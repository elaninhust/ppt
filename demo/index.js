//`>>>`不可对负数取整,无符号右移会把负数的二进制码当成正数的二进制码，由于负数是以其绝对值的二进制补码形式表示的，会导致无符号右移后的结果非常之大
//https://github.com/Aaaaaaaty/Blog/issues/22


/**
 * 判断正整数n是否是2的整数幂
 */
function(n){
	return !!n&(n-1)
}

/**
 * 随机获取数组某一项
 */
var arr = [...];
var len = arr.length;

// 一般方法：
var rIndex = Math.floor((Math.random() * len))

// 使用位运算的方法
var rIndex = Math.random() * len | 0


/**
 * [left-pad] (https://www.npmjs.com/package/left-pad)
 * (https://github.com/stevemao/left-pad/pull/11)
 */

function leftpad (str, len, ch) {
  str = String(str);

  var i = -1;

  if (!ch && ch !== 0) ch = " ";

  len = len - str.length;

  while (++i < len) {
    str = ch + str;
  }

  return str;
}


/**
 * 16进制颜色值转RGB
 * @param  {String} hex 16进制颜色字符串
 * @return {String}     RGB颜色字符串
 */
  function hexToRGB(hex) {
    var hexx = hex.replace('#', '0x')
    var r = hexx >> 16
    var g = hexx >> 8 & 0xff
    var b = hexx & 0xff
    return `rgb(${r}, ${g}, ${b})`
}

/**
 * RGB颜色转16进制颜色
 * @param  {String} rgb RGB进制颜色字符串
 * @return {String}     16进制颜色字符串
 */
function RGBToHex(rgb) {
    var rgbArr = rgb.split(/[^\d]+/)
    var color = rgbArr[1]<<16 | rgbArr[2]<<8 | rgbArr[3]
    return '#'+ color.toString(16)
}