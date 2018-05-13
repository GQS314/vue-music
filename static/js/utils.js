// 浏览器相关方法
export const utils = {
	// 设备信息
	deviceVersion () {
		const u = navigator.userAgent
		const app = navigator.appVersion
		return {		// 移动终端浏览器版本信息
			userAgent: u,
			appVersion: app,
			trident: u.includes('Trident'),	 // IE内核
			presto: u.includes('Presto'), 	// opera内核
			webKit: u.includes('AppleWebKit'), 	// 苹果、谷歌内核
			gecko: u.includes('Gecko') && !u.includes('KHTML'), 	// 火狐内核
			mobile: !!u.match(/AppleWebKit.*Mobile/i) || !!u.match(/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/),		// 是否为移动终端
			ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), 	// ios终端
			android: u.includes('Android') || u.includes('Linux'), 	// android终端或者uc浏览器
			iPhone: u.includes('iPhone') || u.includes('Mac'), 	// 是否为iPhone或者QQHD浏览器
			iPad: u.includes('iPad'), 	// 是否iPad
			webApp: !u.includes('Safari'), 	// 是否web应该程序，没有头部与底部,
			language: (navigator.browserLanguage || navigator.language).toLowerCase(),	// 浏览器语言
			plugins: navigator.plugins,		// 返回一个类似数组的对象，成员是浏览器安装的插件，比如Flash、ActiveX等
			platform: navigator.platform,		// 属性返回用户的操作系统信息
			isOnline: navigator.onLine, 	// 返回一个布尔值，表示用户当前在线还是离线
			geolocation: navigator.geolocation 		// 返回一个Geolocation对象，包含用户地理位置的信息。
		}
	},

	// 判断数据类型格式
	initType () {
		this.dataType = {}
		let type = (o) => {
			let s = Object.prototype.toString.call(o)
			return s.match(/\[object (.*?)\]/)[1].toLowerCase()
		}

		const _self = this
		let eachArry = ['Null', 'Undefined', 'Object', 'Array', 'String', 'Number', 'Boolean', 'Function', 'RegExp']
		eachArry.forEach(function (t) {
				_self.dataType['is' + t] = function (o) {
				return type(o) === t.toLowerCase()
			}
		})
	},
  getRandom(arr, min, max){
    if(arr.length < max){
      let index = 0;
      let difference = max - min;
      let ok = true;
      while (ok){
        index = Math.random()*difference + min;
        index = parseInt(index);
        let check = true;
        for(let i = 0; i < arr.length; i++){
          if(index == arr[i]){
            check = false;
            break;
          }
        }
        if(check){
          ok = false;
        }
      }
      return index;
    }else {
      return 0;
    }
  },

	// 从数组中获取num 个随机不重复的元素
	// arr 需要取出的数组
	// num 取出数组的数量
	getRandomEleFromArr (arr, num) {
		let testArr = new Set(arr)
		let newArr = Array.from(testArr)

		let resultArr = []
		for (let i = 0; i < num; i++) {
			if (newArr.length > 0) {
				let index = Math.floor(Math.random() * newArr.length)
				resultArr.push(newArr[index])
				newArr.splice(index, 1)
			} else {
				console.error(`数组中没有超过${num}个不同的元素哦`)
				break
			}
		}
		return resultArr
	},
  
  // JS对象转URL参数
  // param 将要转为URL参数字符串的对象
  // key URL参数字符串的前缀
  // encode true/false 是否进行URL编码,默认为true
  // return URL参数字符串
  urlEncode (param, key, encode) {
    if(param==null) return '';
    var paramStr = '';
    var t = typeof (param);
    if (t == 'string' || t == 'number' || t == 'boolean') {
      paramStr += '&' + key + '=' + ((encode==null||encode) ? encodeURIComponent(param) : param);
    } else {
      for (var i in param) {
        var k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i);
        paramStr += utils.urlEncode(param[i], k, encode);
      }
    }
    return paramStr;
  },

	// 返回rgba随机色参数为透明度
	randomColor (opacity = 1) {
		let r = Math.floor(Math.random() * 256)
		let g = Math.floor(Math.random() * 256)
		let b = Math.floor(Math.random() * 256)
		return `rgba(${r},${g},${b},${opacity})`
	},

	// 返回浏览器url的参数 返回一个对象
	getUrlParam (url) {
		let _arr = url.search.slice(1).split('&')
		let _obj = {}
		for (let i = 0; i < _arr.length; i++) {
			_obj[_arr[i].split('=')[0]] = _arr[i].split('=')[1]
		}
		return _obj
	},

	// 返回一个字符串的长度，汉字算2个字符长度
	strLength (str) {
		let a = 0
		for (let i = 0; i < str.length; i++) {
			let count = str.charCodeAt(i) > 255 ? 2 : 1
			a += count
		}
		return a
	}
}

// 初始化判断数据类型格式
utils.initType()
