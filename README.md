# nifty-util

nifty-util是一个实用而简单的JavaScript工具库。

## 安装

从GitHub上下载[最新的nifty-util](https://github.com/ZHTGitHub/nifty-util)，或使用[npm](https://github.com/ZHTGitHub/nifty-util)安装:

```bash
npm install nifty-util
```

## 如何使用

```bash
import util from 'nifty-util'
// or
import { isEqual } from 'nifty-util'
```
<br />

## 目录
[isUndefined(value), 判断是否为undefined.](#isUndefined)
<br />

> ### isEqual(val1, val2)

判断两个值是否绝对相等，数组/对象只比较其属性值是否绝对相等

#### Arguments

val1: 任意值

val2: 任意值

#### Returns

(boolean): 若两个值绝对相等返回true，否则返回false.


#### Example

```bash
const result = isEqual(1, '1')
console.log(result)
// => false
```
<br />

> ### isYummy(value)

判断值是否合法

#### Arguments

value: 任意值

#### Returns

(boolean): 若值不为undefined、null、false、空字符串、空数组、空对象返回true，否则返回false.


#### Example

```bash
const result = isYummy({})
console.log(result)
// => false
```
<br />

> ### getScrollOffset()

返回滚动条滚动距离

#### Arguments

无

#### Returns

({ x: number, y: number }): x为横坐标滚动距离，y为纵坐标滚动距离.


#### Example

```bash
const result = getScrollOffset()
console.log(result)
// => { x: 0, y: 100 }
```
<br />

> ### getViewportSize()

返回浏览器视口尺寸

#### Arguments

无

#### Returns

({ width: number, height: number }): width为视口宽度，height为视口高度.


#### Example

```bash
const result = getViewportSize()
console.log(result)
// => { width: 1920, height: 1080 }
```
<br />

> ### queryToObject(search)

将 url 参数解析为 JS 对象

#### Arguments

search: url参数

#### Returns

(Object): 一个新的对象.


#### Example

```bash
const objUrl = new URL('http://github.com?name=leslie&gender=male')
const result = queryToObject(objUrl.search)
console.log(result)
// => { name: 'leslie', gender: 'male' }
```
<br />

> ### date(value)

返回日期的详细信息

#### Arguments

value: 字符串日期/日期对象，不传则为当前时间.

#### Returns

|  属性   | 说明  | 类型  |
|  :----  | :----  | :----  |
| year   | 年份  | number  |
| month  | 当前月份(0-11)  | number  |
| day  | 周几  | number  |
| date  | 日  | number  |
| hours  | 时  | number  |
| minutes  | 分  | number  |
| seconds  | 秒  | number  |
| milliseconds  | 毫秒  | number  |
| time  | 自 1970 年 1 月 1 日 00:00:00 UTC 到当前时间的毫秒数  | number  |
| normalMonth  | 当前月份(1-12)  | number  |
| am00Time  | 0点  | number  |
| pm24Time  | 24点  | number  |


#### Example

```bash
const result = date()
console.log(result)
// => 
{ 
  am00Time: 1677081600000, 
  date: 23, 
  day: 4, 
  hours: 10, 
  milliseconds: 680, 
  minutes: 49, 
  month: 1, 
  normalMonth: 2, 
  pm24Time: 1677167999999 
  seconds: 36, 
  time: 1677120576680, 
  year: 2023 
}
```
<br />

> ### set(object, path, value)

设置对象路径处的值

#### Arguments

object: 要修改的对象
path: 要设置的属性的路径
value: 要设置的值

#### Returns

(Object): 返回的对象.


#### Example

```bash
const obj = {}
const result = set(obj, 'a.b', 1)
console.log(result)
// => { a: { b: 1 } }
```
<br />

> ### get(object, path, defaultValue)

获取对象路径处的值

#### Arguments

object: 要查询的对象
path: 要获取的属性的路径
defaultValue: 为未定义的解析值返回的值

#### Returns

(*): 返回解析值.


#### Example

```bash
const obj = {a: {b: 1}}
const result = set(obj, 'a.b')
console.log(result)
// => 1
```
<br />

> ### deepClone(value)

深拷贝

#### Arguments

value: 任意值

#### Returns

(Object): 返回新的对象.


#### Example

```bash
const obj = {name: 'leslie', list: ['fruit']}
const result = deepClone(obj)
console.log(result)
// => {name: 'leslie', list: ['fruit']}
```
<br />

> ### find(collection, predicate)

查找包含目标值的元素.

#### Arguments

collection: 数组
predicate: 目标值

#### Returns

(*): 返回包含目标值的元素，否则返回 undefined.


#### Example

```bash
const list = [{gender: 'male', name: 'leslie'}, { gender: 'female', name: 'lily' }]
const result1 = find(list, ['gender', 'male'])
console.log(result1)
// => {gender: 'male'}

const result2 = find(list, {gender: 'male'})
console.log(result2)
// => {gender: 'male'}

const result3 = find(list, 'male')
console.log(result3)
// => {gender: 'male'}
```
<br />

> ### findIndex(collection, predicate)

查找包含目标值元素的下标.

#### Arguments

collection: 数组
predicate: 目标值

#### Returns

(number): 返回匹配元素的下标，否则返回-1.


#### Example

```bash
const list = [{gender: 'male', name: 'leslie'}, { gender: 'female', name: 'lily' }]
const result1 = find(list, ['gender', 'male'])
console.log(result1)
// => 0

const result2 = find(list, {gender: 'male'})
console.log(result2)
// => 0

const result3 = find(list, 'male')
console.log(result3)
// => 0
```
<br />

> ### flatArray(value)

数组拍平.

#### Arguments

value: 数组

#### Returns

(Array): 返回一个新的一维数组.


#### Example

```bash
const list = [1, [2, [3, [4]]]]
const result = flatArray(list)
console.log(result)
// => [1, 2, 3, 4]
```
<br />

> ### removeDuplicate(value)

数组去重.

#### Arguments

value: 数组

#### Returns

(Array): 返回一个新的数组.


#### Example

```bash
const list = [1, 1, {num: 2}, {num: 2}]
const result = removeDuplicate(list)
console.log(result)
// => [1, {num: 2}]
```
<br />

> ### getType(value)

返回值的数据类型.

#### Arguments

value: 任意值.

#### Returns

(string): 返回boolean | NaN | number | string | array | function | object | null | undefined | symbol.


#### Example

```bash
const value = 1
const result = getType(value)
console.log(result)
// => number
```
<br />

> ### isArray(value)

判断是否为数组.

#### Arguments

value: 任意值.

#### Returns

(boolean): 若为数组返回true，否则返回false.


#### Example

```bash
const value = []
const result = isArray(value)
console.log(true)
// => true
```
<br />

> ### isBoolean(value)

判读是否为布尔值.

#### Arguments

value: 任意值.

#### Returns

(boolean): 若为布尔值返回true，否则返回false.


#### Example

```bash
const value = false
const result = isBoolean(value)
console.log(true)
// => true
```
<br />

> ### isFunction(value)

判断是否为函数.

#### Arguments

value: 任意值.

#### Returns

(boolean): 若为函数返回true，否则返回false.


#### Example

```bash
const value = function() {}
const result = isFunction(value)
console.log(true)
// => true
```
<br />

> ### isNull(value)

判断是否为null.

#### Arguments

value: 任意值.

#### Returns

(boolean): 若为null返回true，否则返回false.


#### Example

```bash
const value = null
const result = isNull(value)
console.log(true)
// => true
```
<br />

> ### isNumber(value)

判读是否为数值.

#### Arguments

value: 任意值.

#### Returns

(boolean): 若为数值返回true，否则返回false.


#### Example

```bash
const value = 1
const result = isNumber(value)
console.log(true)
// => true
```
<br />

> ### isObject(value)

判断是否为对象.

#### Arguments

value: 任意值.

#### Returns

(boolean): 若为对象返回true，否则返回false.


#### Example

```bash
const value = {}
const result = isObject(value)
console.log(true)
// => true
```
<br />

> ### isString(value)

判读是否为字符串.

#### Arguments

value: 任意值.

#### Returns

(boolean): 若为字符串返回true，否则返回false.


#### Example

```bash
const value = ''
const result = isString(value)
console.log(true)
// => true
```
<br />

> ### isSymbol(value)

判断是否为symbol.

#### Arguments

value: 任意值.

#### Returns

(boolean): 若为symbol返回true，否则返回false.


#### Example

```bash
const value = Symbol('name')
const result = isSymbol(value)
console.log(true)
// => true
```
<br />

> <h3 id="isUndefined">isUndefined(value)</h3>

判断是否为undefined.

#### Arguments

value: 任意值.

#### Returns

(boolean): 若为symbol返回true，否则返回false.


#### Example

```bash
const value = void 0
const result = isUndefined(value)
console.log(true)
// => true
```