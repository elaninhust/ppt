title: 位运算符的奇淫技巧
speaker: Elan
url: 
transition: slide3

[slide]

# 位运算符

---

* 位操作符用于作用在最基本的层次上,也就是内存中表示数值的位来操作数值. {:&.fadeIn}
* ECMAScript中所有的数值都以IEEE-754 64位格式存储,但位操作符并不直接操作64位的值,而是先将64位的值转换成32位的整数,然后执行操作,最后再将结果转换回64位.

[slide]


[magic data-transition="vertical3d"]

## 数值的二进制表示法

* 对于有符号的整数,32位中的前31位用于表示整数的值,第32位用于表示数值的符号:0为正数,1为负数
* 正整数的存储
* 负整数的存储：以二进制补码存储
    - 先求这个数值的绝对值的二进制码 {:&.fadeIn}
    - 求二进制反码
    - 将得到的二进制反码加1

====

```javascript

    18; // 0000 0000 0000 0000 0000 0000 0001 0010

-18:  ?

```

---
 
1111 1111 1111 1111 1111 1111 1110 1110 {:&.fadeIn}

[/magic]

[slide]

[magic data-transition="vertical3d"]

位运算符 | 表示法 | 说明 | 其他
:-------:|:------:|:-------:|:--------:
按位非(NOT) | `~` | 执行按位非的结果就是返回数值的反码 | 无 

====

```javascript

    var num1 = 25;  //二进制00000000 00000000 00000000 00011001

var num2 = ~num1;

```

====

一个整数与自身的取反值相加等于-1

====

* 对哨位值进行`~`操作
    - 当你执行indexOf操作时，如果找不到目标则返回-1，同时~-1 = 0 {:&.fadeIn}
    - 其实我们完全可以使用>=0或者!= -1这种操作。但是有一个概念：“抽象渗漏”，意思是在代码中暴露了底层实现细节，我们可以选择屏蔽掉细节
* 浮点数取整
    - `~~3.12 = 3` {:&.fadeIn}
    - `~~-9.78 = -9`(Math.floor区别)

[/magic]

[slide]

[magic data-transition="vertical3d"]

位运算符 | 表示法 | 说明 | 其他
:-------:|:------:|:-------:|:--------:
按位与(AND) | `&` | 将2个操作数每一位进行与操作 | 无
按位或(OR)  | `丨` | 将2个操作数每一位进行或操作 | 无
按位异或(XOR) | `^` | 将2个操作数每一位进行异或操作 | 无

====

* 使用`&`运算符判断一个数的奇偶
    - `12&1` {:&.fadeIn}
    - `13&1`
* 使用`丨`来取整
    - `6.23|0` {:&.fadeIn}
    - `-6.23|0`
* 使用`^`来完成整数值交换

[/magic]

[slide]

[magic data-transition="vertical3d"]

位运算符 | 表示法 | 说明 | 其他
:-------:|:------:|:-------:|:--------:
左移 | `<<` | 将数值的每一位向左移动制定的位数,并用0填补空位 | 不影响符号位
有符号的右移 | `>>` | 将数值的每一位向右移动制定的位数,并用0填补空位 | 保留符号位
无符号的右移 | `>>>` | 将数值的每一位向右移动制定的位数,并用0填补空位 | 不保留符号位

====

```javascript

    1<<1 //2
-6<<1 //-12
3>>2 //0
-3>>2 //-1
-3>>>2 //

```

====

* 使用`>>, <<, >>>`来取整
    - `>>>`不可对负数取整 {:&.fadeIn}
* 使用`<<`来实现2的n次方
    - `1<<n`

[/magic]

[slide]

[magic data-transition="vertical3d"]

# 要不要使用位运算符
====

## 边界问题

> 1.令 expr 为解释执行 UnaryExpression 的结果。
> 
> 2.令 oldValue 为 ToInt32(GetValue(expr))。

====

## 速度问题
[/magic]
