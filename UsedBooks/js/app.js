(function(mui, app, undefined) {
	/**
	 * APP常量
	 */
	app.constant = {
		APP_BASICURL: '',
		APP_FILEUPLOAD: '',
		APP_LOGINUSERMSG: 'app-loginusermsg'
	}

	/**
	 * 获取DOM对象
	 * @param {Object} el
	 */
	app.dom = function(el) {
		return document.querySelector(el);
	}

	/**
	 * 获取输入框值
	 * @param {Object} el
	 */
	app.getValue = function(el) {
		return app.dom(el).value;
	}

	/**
	 * 是否为空
	 * @param {Object} value
	 */
	app.isEmpty = function(value) {
		var validateReg = /^\S+$/;
		return !validateReg.test(value);
	}

	/**
	 * 是否为电话号码
	 * @param {Object} value
	 */
	app.isMobile = function(value) {
		var validateReg = /^1[0-9]{10}$/;
		return validateReg.test(value);
	}
	
	/**
	 * 是否为邮箱
	 * @param {Object} value
	 */
	app.isEmail = function(value) {
		var validateReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
		return validateReg.test(value);
	}

	/**
	 * 显示
	 * @param {Object} el
	 */
	app.show = function(el) {
		app.dom(el).classList.add('mui-visibility');
	}

	/**
	 * 隐藏
	 * @param {Object} el
	 */
	app.hidden = function(el) {
		app.dom(el).classList.remove('mui-visibility');
	}

	/**
	 * 获取当前时间戳
	 */
	app.timestamp = function() {
		return new Date().getTime();
	}

	/**
	 * 请求数据
	 * @param {Object} url
	 * @param {Object} param
	 * @param {Object} callback
	 */
	app.ajax = function(param, callback, method) {
		var url = app.constant.APP_BASICURL;
		mui.ajax(url, {
			data: param,
			type: method || 'get', //HTTP请求类型
			timeout: 10000, //超时时间设置为10秒；
			headers: {
				'Content-Type': 'text/html; charset=gb2312'
			},
			success: function(data) {
				callback && callback(JSON.parse(data));
			},
			error: function(xhr, type, errorThrown) {
				console.log(param.opkey + ':' + errorThrown);
			}
		});
	}

	/**
	 * 上传文件
	 */
	app.uploadFile = function(options, callback) {
		var waitAlert = plus.nativeUI.showWaiting("上传中，请等待...");
		var token = app.loginUser.get().token;
		var task = plus.uploader.createUpload(app.constant.APP_FILEUPLOAD, {
			method: "POST"
		}, function(upload, status) {
			// 上传完成
			if(status == 200) {
				var httpfile = JSON.parse(upload.responseText).httpfile;
				upload && callback(httpfile);
				waitAlert.close();
			} else {
				mui.toast("上传失败: " + status);
			}
		});
		task.addFile(options.path, {
			key: options.name
		});
		task.addData("token", token);
		task.addEventListener("statechanged", function(upload, status) {
			waitAlert.setTitle("上传中，已完成：\n" + parseInt(upload.uploadedSize / upload.totalSize * 100) + '%');
		}, false);
		task.start();
	}

	/**
	 * 本地存储
	 */
	app.storage = {
		isEmpty: function(key) {
			var val = plus.storage.getItem(key);
			if(val === null) {
				return true
			}
			return false
		},
		set: function(key, value) {
			var val = (typeof value === "string")?value:JSON.stringify(value);
			plus.storage.setItem(key, val);
		},
		get: function(key, type) {
			var val = plus.storage.getItem(key);
			type = type || 'json';
			if(val && type === 'json') {
				return JSON.parse(val)
			}
			return val;
		},
		remove: function(key){
			plus.storage.removeItem(key);
		},
		clear: function() {
			plus.storage.clear();
		}
	}

	/**
	 * 获取用户登录信息
	 */
	app.loginUser = {
		isEmpty: function() {
			return app.storage.isEmpty(app.constant.APP_LOGINUSERMSG);
		},
		set: function(data) {
			app.storage.set(app.constant.APP_LOGINUSERMSG, data);
		},
		get: function() {
			return app.storage.get(app.constant.APP_LOGINUSERMSG);
		},
		remove: function(){
			app.storage.remove(app.constant.APP_LOGINUSERMSG);
		}
	}

	/**
	 * 对比版本
	 * @param {Object} v1
	 * @param {Object} v2
	 */
	app.compareVersion = function(v1, v2) {
		var v1_ = (v1 || '0').split('.');
		var v2_ = (v2 || '0').split('.');
		for(var i = 0; i < (v1_.length > v2_.length ? v1_.length : v2_.length); i++) {
			var v1__ = v1_[i] || 0;
			var v2__ = v2_[i] || 0;
			if(v1__ < v2__) {
				return -1;
			} else if(v1__ > v2__) {
				return 1;
			}
		}
		return 0;
	}

	/**
	 * 判断是否白屏设备
	 */
	app.isWhiteScreenDevice = function() {
		return mui.os.android && app.compareVersion(mui.os.version, '5.1') >= 0;
	}

	/**
	 * 页面
	 */
	app.page = {
		duration: mui.os.android ? 250 : 300,
		animationTypeShow: mui.os.android ? 'slide-in-right' : 'pop-in',
		animationTypeClose: mui.os.android ? 'slide-out-right' : 'pop-out',
		open: function(pageUrl, extras) { //打开新页面
			var self = this;
			if(mui.os.plus) {
				mui.plusReady(function() {
					var page = plus.webview.create(pageUrl, pageUrl, {
						scrollIndicator: 'none',
						render: app.isWhiteScreenDevice ? 'always' : 'onscreen',
					}, extras);

					function show() {
						page.removeEventListener('loaded', show, false);
						page.show(self.animationTypeShow, self.duration, {
							acceleration: 'none',
						});
					}
					page.addEventListener('loaded', show, false);
				});
			} else {
				location.href = pageUrl;
			}
		},
		back: function() { //后退
			if(app.isApp) {
				plus.webview.currentWebview().close(this.animationTypeClose, this.duration, {
					acceleration: 'none',
				});
			} else {
				history.back();
			}
		}
	}

	/**
	 * 获取当前网络状况
	 */
	app.getCurrentNetworkType = function() {
		var NetworkType = {};

		NetworkType[plus.networkinfo.CONNECTION_UNKNOW] = 'UNKNOW';
		NetworkType[plus.networkinfo.CONNECTION_NONE] = 'NONE';
		NetworkType[plus.networkinfo.CONNECTION_ETHERNET] = 'ETHERNET';
		NetworkType[plus.networkinfo.CONNECTION_WIFI] = 'WIFI';
		NetworkType[plus.networkinfo.CONNECTION_CELL2G] = '2G';
		NetworkType[plus.networkinfo.CONNECTION_CELL3G] = '3G';
		NetworkType[plus.networkinfo.CONNECTION_CELL4G] = '4G';

		return NetworkType[plus.networkinfo.getCurrentType()];
	}

	/**
	 * dataURI 转 blob
	 * @param {Object} dataURI
	 */
	app.dataURItoBlob = function(dataURI) {
		var arr = dataURI.split(','),
			mime = arr[0].match(/:(.*?);/)[1],
			bstr = atob(arr[1]),
			n = bstr.length,
			u8arr = new Uint8Array(n);
		while(n--) {
			u8arr[n] = bstr.charCodeAt(n);
		}
		return new Blob([u8arr], {
			type: mime
		});
	}

	/**
	 * 读取文件
	 * @param {Object} response
	 * @param {Object} callback
	 */
	app.FileReader = function(response, callback) {
		var reader = new FileReader();
		reader.onload = function() {
			callback && callback(reader.result);
		}
		reader.readAsDataURL(response);
	}

	/**
	 * 读文件大小
	 * @param {Object} file
	 */
	app.readFileSize = function(fileSize) {
		var size = fileSize / 1024;
		var aMultiples = ["KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

		var fileSizeString = '';
		for(var i = 0; size > 1; size /= 1024, i++) {
			fileSizeString = size.toFixed(2) + " " + aMultiples[i];
		}
		return fileSizeString;
	}

	/**
	 * app退出登录
	 */
	app.logOut = function() {
		app.loginUser.remove();
		app.storage.set(app.constant.APP_HISTORYTIMESTAMP, mui.now());
	}
	
	/**
	 * 创建iframe
	 * @param {Object} el
	 * @param {Object} opt
	 */
	app.createIframe =  function (el, opt) {
		var elContainer = (el instanceof Node)?el:document.querySelector(el);
		var wrapper = document.querySelector(".mui-iframe-wrapper");
		if(!wrapper){
			// 创建wrapper 和 iframe
			wrapper = document.createElement('div');
			wrapper.className = 'mui-iframe-wrapper';
			for(var i in opt.style){
				wrapper.style[i] = opt.style[i];
			}
			var iframe = document.createElement('iframe');
			iframe.src = opt.url;
			iframe.id = opt.id || opt.url;
			iframe.name = opt.id;
			wrapper.appendChild(iframe);
			elContainer.appendChild(wrapper);
		}else{
			var iframe = wrapper.querySelector('iframe');
			iframe.src = opt.url;
			iframe.id = opt.id || opt.url;
			iframe.name = iframe.id;
		}
	}
})(mui, window.app = {});

(function() {
	mui(document.body).on('tap', '[data-open]', function() {
		var pageUrl = this.getAttribute('data-open');
		if(pageUrl) {
			app.page.open(pageUrl);
		}
	});
	
	Date.prototype.Format = function (fmt) { //author: meizz 
	    var o = {
	        "M+": this.getMonth() + 1, //月份 
	        "d+": this.getDate(), //日 
	        "h+": this.getHours(), //小时 
	        "m+": this.getMinutes(), //分 
	        "s+": this.getSeconds(), //秒 
	        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
	        "S": this.getMilliseconds() //毫秒 
	    };
	    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	    for (var k in o)
	    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	    return fmt;
	}
})();