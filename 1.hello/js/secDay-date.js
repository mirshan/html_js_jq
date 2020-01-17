var d1=Date()		//获取当前时间      字符串类型
console.log(d1)
var d2=new Date('2017-10-01 12:12:12')  //设置时间 -也可以换成：和/    对象类型，可使用时间的方法
console.log(d2)     //不写具体时间，会生成一个8小时，因为北京时间是东八区，生成了一个8小时，如果去掉0，就没有8小时了


d2.getDate()
d2.getDay()
d2.getHours()
d2.getMonth()
console.log(d2.getDate(),d2.getFullYear(),d2.getMonth(),d2.getHours(),d2.getMinutes(),d2.getSeconds())

var str=d2.toLocaleString()
console.log('toLocaleString:'+str)

var str=d2.toLocaleDateString()
console.log('toLocaleDateString:'+str)

var str=d2.toLocaleTimeString()
console.log('toLocaleTimeString:'+str)



d2.setDate()
d2.setHours()


