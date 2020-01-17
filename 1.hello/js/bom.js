//BOM用来操作浏览器的对象，可以通过window来访问这些对象
//BOM的属性:
//跳转
window.location.href="red.html"
//刷新页面
window.location.reload()

//加载
window.location.assign("red.html")  //保留历史记录，可返回
window.location.replace("red.html")  //不保留历史记录，不可返回

//历史记录中前一页或后一页
window.history.back()
window.history.forward()
window.history.go(-2)			//返回两个页面
window.history.length			//一共几个历史记录

/*------------------------------------------------------------------*/
//BOM的常用方法
//新创建一个窗口，不是很常用
window.open("a.html","blank","width=400px,height=400px,left=20px,top=20px")
window.close()
/*------------------------------------------------------------------*/

//BOM的事件
//页面完成加载完成后触发
window.onload=function(){
	alert("页面加载成功")
}

//滚动事件，如下豆瓣可以监测滚动到某个位置加载页面数据，可以是500px乘以i来搞
window.onscroll=function(){
	console.log('发生了滚动')
	var a=document.documentElement.height.scrollTop || document.body.scrollTop
	console.log(a)    //或的关系是适应不同浏览器
}

//间歇定时器
var time
time=window.setInterval(function(){
	console.log("每2秒打印一次")
},2000)				//每2秒执行一次匿名函数

function funs1(){    //清除定时器
				window.clearInterval(time)
			}
function funs2(){
	time=window.setTimeout(function(){
		console.log("Mirs is a good man")
	},2000)
}

//延时定时器
			var time1=window.setTimeout(function(){
				console.log("延时定时器，只执行一次")
			},1000)
