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
 * 字符串前面拼指定字符到固定长度
 * [left-pad]
 * [git] https://www.npmjs.com/package/left-pad
 * [PR] https://github.com/stevemao/left-pad/pull/11
 * 
 * [DEMO] leftpad('hello',20,'1')，就要返回'111111111111111hello'
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
 * 找出数组中和为n的所有组合
 * 穷举法，复杂度O(N*2^N)
 */

function combinations(array, n) {
  var lists = [],
      M = 1 << array.length; //2^arr.length次方，获得所有组合的个数
  for (var i = 1; i < M; ++i) {
      var sublist = array.filter(function(c, k) {
          return i >> k & 1
      });
      if (sublist.reduce(function(p, c) {
              return p + c
          }, 0) === n)
          lists.push(sublist);
  }
  return lists;
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


























