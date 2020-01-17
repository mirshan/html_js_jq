//获取元素节点
//按ID查找DIV(对象类型)
var jdDiv = document.getElementById("div1")
//按CLASS查找DIV(数组类型)
var jdDivsArr = Document.getElementsByClassName("div2")
//按name获取
var jsinArr = document.getElementsByName("inte")
//获取所有名字为div的元素
var jsArr = document.getElementsByTagName("div")

//拿元素的属性，先拿到标签再获取属性,可通过函数来修改其属性内容
var ins = document.getElementById("in1")

function func1() {
	ins.placeholder = "DOM修改标签内容"
}
//获取自定义属性的方法
var my = document.getElementById("div1")
console.log(my.getAttribute("my"))
my.setAttribute("my", "mirs") //修改，如果不存在就相当于增加一个属性
my.removeAttribute("my")

//设置div1的属性
var div1s = document.getElementById("div1")
div1s.setAttribute("style", "background-color:red;width: 200px;height: 30px;") //自己想的方法备用
div1s.style.backgroundColor = "green"
//获取元素标签style属性值中颜色方法，如果没有获取不到：
div1s.style.backgroundColor
//获取外部样式表的颜色值方法:常用此方法，通用
window.getComputedStyle(div1s, null).backgroundColor

//获取文本内容
console.log(div1s.innerHTML) //开始至结束标签的内容，包含换行
console.log(div1s.outerHTML) //内容包括外面的标签
div1s.innerHTML = "DOM修改文本内容" //可以放到function里更好一些