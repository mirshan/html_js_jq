//var a=0?1:2;
//console.log(a)
//三步表达式，？前是表达式，冒号前是正确时的值，冒号后面是错误时的值


//switch语句:
//switch(表达式){
//	case 标号1:
//		语句1
//	case 标号2:
//		语句2
//	……
//	case 标号n:
//		语句n
//	default:
//		语句f
//	
//}

/*
var a=parseInt(prompt("输入星期一到星期日的数字"))
switch (a){
	case 1:
		console.log('周一');
		break
	case 2:
		console.log('周二');
		break
	case 3:
		console.log('周三');
		break
	default:
		console.log('其他');
}
*/

//for语句
/*
var sum=0
for(i=0;i<=10;i++){
	sum+=i
}
console.log(sum)
*/



//函数
/*
var n=parseInt(prompt('输入数字，计算从1累加总和'))
function mysum(n){
	sum=0
	for(i=0;i<=n;i++){
		sum+=i
	}
	return sum	
}
console.log(mysum(n))
*/

//变量提升，只要定义了，在定义前使用也可以使用，不报错，只不过是undefined
//没有var定义的变量，都算做全局变量
//匿名函数只是没有名字，常用于作为其他函数的参数
function mytest(a,b,fn){
	return fn(a,b)
}
var num=mytest(2,3,function(a,b){
	return a+b;
});
console.log('匿名函数：'+num)


//即时函数，只执行一次，立即执行，先写两个括号，前面是匿名函数，后面是参数
/*
(function(num1,num2){
	console.log(num1+num2)
	})(2,3)
*/

//数组
var arr=[1,2,3,5,4,7,9]
for(var i=0;i<arr.length;i++){
	console.log("arr[%d]=%d:",i,arr[i])
}
for(var i in arr){
	console.log("arr[%s]=%d:",i,arr[i])    //i在这里是string类型的
}
//var arr1=new Array[6]  建议有6个元素的数据，但赋值的时候多出也没问题
delete arr[1]  //虽然删除了数据，但位置还在，undefined
//遍历数据forEach   传的是匿名函数
arr.forEach(function(item){
	console.log(item)
})
//数据方法
arr.push(6)		//列尾增加元素
arr.unshift(8)  //从头插数据
arr.pop(3)		//删除下标为3的元素，并返回此元素：括号为空则从尾拿
arr.shift()		//从头取数据
arr.sort().reverse()      //数据排序，默认升序
arr.reverse()   //数据反转
console.log(arr.join('&'))  //将数据的元素用字符串拼接
arr.slice(1,3)   //切片，取出下标元素组成新数组，从下标为1拿，至下标为3止，不包含下标为3的元素
arr.indexOf(6)   //返回元素的下标，有重复返回第一个
arr.lastIndexOf(6)//返回元素的下标，重复的返回最后一个

arr.sort(function(x,y){      //匿名函数，自定义按数据长度来排序
	return x.length<y.length
})



arr.forEach(function(item){
	console.log(item)
})



//字符串方法
var str='hanpeng is a good man!'
console.log(str.charAt(19))			//打印第19个脚标的字符
str.toLowerCase()			//转小写
str.toUpperCase()			//转大写
str.indexOf('good')	        //查找是否有good单词，没有则是-1
str.lastIndexOf('good')	    //重复的返回最后一个的下标
str.replace('afd','ad')     //前面是包含的词，后面是替换的新词
str.substring(9,13)            //切字符串，取出9-13的字符串生成新字符串
str.substr(3,7)             //从3截取7个字符
str.split(" ")          //用空格来截取

parseInt(Math.random()*(6-2+1)+2)  //6到2之间的随机数，公式，（y-x+1)+x,大的写前面



