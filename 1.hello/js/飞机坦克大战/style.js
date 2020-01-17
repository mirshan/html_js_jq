var jsmainscreen=document.getElementById("mainScreen")
var jsbg1 = document.getElementById("bg1")
var jsbg2 = document.getElementById("bg2")
var timeBg = setInterval(function() {
	jsbg1.style.top = jsbg1.offsetTop + 2 + "px"
	jsbg2.style.top = jsbg2.offsetTop + 2 + "px"
	if(jsbg1.offsetTop >= 800) {
		jsbg1.style.top = "-800px";
	} else if(jsbg2.offsetTop >= 800) {
		jsbg2.style.top = "-800px"
	}

}, 10)

//飞机动起来

var airPlane = document.getElementById("airplane")
airPlane.addEventListener("mousedown", function(e) {
	var ev = e || window.event
	basex = ev.pageX
	basey = ev.pageY
	movex = 0
	movey = 0
	//给鼠标移动添加事件
	jsmainscreen.addEventListener("mousemove", function(e) {
		var en = e || window.event
		movex = en.pageX - basex
		basex = en.pageX
		movey = en.pageY - basey
		basey = en.pageY
		airPlane.style.left = airPlane.offsetLeft + movex + "px"
		airPlane.style.top = airPlane.offsetTop + movey + "px"

	}, false)

}, false)


//发射子弹
var timerBullet=setInterval(function(){
	var bullet=document.createElement("div")
	jsmainscreen.appendChild(bullet)
	bullet.className="bullet"
	bullet.style.left=airPlane.offsetLeft+52+"px";
	bullet.style.top=airPlane.offsetTop-10+"px";
	
	//让子弹飞
	var timerBulletFly=setInterval(function(){
		bullet.style.top=bullet.offsetTop-20+"px"
		if(bullet.offsetTop <=-20 ){
			clearInterval(timerBulletFly)
			jsmainscreen.removeChild(bullet)
		}
	},100)
	
},200)

//出现坦克
var timerTank=setInterval(function(){
	var tank=document.createElement("div")
	jsmainscreen.appendChild(tank)
	tank.className="tank"
	tank.style.left=randomNum(0,472)+"px";
	tank.style.top="0px";
	
	//让子弹飞
	var timerTankFly=setInterval(function(){
		tank.style.top=tank.offsetTop+10+"px"
		if(tank.offsetTop >=740 ){
			clearInterval(timerTankFly)
			jsmainscreen.removeChild(tank)
		}
	},1000)
	
},2000)




//以下来自网络


//死亡标志
var flag = 1;
//分数
var fenshu = 0;
var timer = setInterval(function(){
	jsBg1.style.top = jsBg1.offsetTop + 1 + "px";
	jsBg2.style.top = jsBg2.offsetTop + 1 + "px";
	if(jsBg1.offsetTop>=768){
		jsBg1.style.top = "-768px";
	}
	if(jsBg2.offsetTop>=768){
		jsBg2.style.top = "-768px";
	}
},10)
 


//子弹和坦克碰撞检测
var allTanks = document.getElementsByClassName("tank");
var allBullents = document.getElementsByClassName("bullet");
var pzjcTimer = setInterval(function(){
	for (var i = 0;i<allBullents.length;i++){
		for (var j = 0;j<allTanks.length;j++){
			var b = allBullents[i];
			var t = allTanks[j];
			if(pzjcFunc(b,t)){
				clearInterval(b.timer);
				clearInterval(t.timer);
				t_bSoundFun();
				fenshu++;
				var fenshuHtml = document.getElementById("fenshu");
				fenshuHtml.innerHTML = fenshu + "分";
				document.getElementById("mainScreen").removeChild(b);
				document.getElementById("mainScreen").removeChild(t);
				break;
			}
		}
	}
},50);
 
//死亡检测
var airplane = document.getElementById("airplane");
var pzjcTimer = setInterval(function(){
	for (var i = 0;i<allTanks.length;i++){
		var t = allTanks[i];
		
		if(pzjcFunc(airplane,t)){
			clearInterval(t.timer);
			document.getElementById("mainScreen").removeChild(airplane);
			document.getElementById("mainScreen").removeChild(t);
			if(flag==1){
				var bSoundId = document.getElementById("bSound");
				document.body.removeChild(bSoundId);
				
			}
			overSoundFun();
			flag = 0;
			var replayTimer = setInterval(function(){
				window.location.href = "./tijiao.php?fenshu=" + fenshu;
			},2000)
			break;
		}
	}
	
},50);
 
//碰撞检测
function pzjcFunc(obj1, obj2){
	var obj1Left = obj1.offsetLeft;
	var obj1Width = obj1Left + obj1.offsetWidth;
	var obj1Top = obj1.offsetTop;
	var obj1Height = obj1Top + obj1.offsetHeight;
 
	var obj2Left = obj2.offsetLeft;
	var obj2Width = obj2Left + obj2.offsetWidth;
	var obj2Top = obj2.offsetTop;
	var obj2Height = obj2Top + obj2.offsetHeight;
			
 
	if ( !(obj1Left > obj2Width || obj1Width < obj2Left || obj1Top > obj2Height || obj1Height < obj2Top) ) {
		return true;
	} else {
		return false;
	}
}
//子弹和坦克碰撞
function t_bSoundFun(){
	var tbSound = document.createElement("audio");
	tbSound.id = "tbSound";
	tbSound.setAttribute("hidden","true");
	tbSound.setAttribute("autoplay","true");
	tbSound.setAttribute("loop","false");
	var tbSource = document.createElement("source");
	tbSource.setAttribute("src","img/enemy3_down.mp3");
	tbSource.setAttribute("hidden","true");
	tbSound.appendChild(tbSource);
	document.body.appendChild(tbSound);
	var bSoundTimer = setInterval(function(){
		document.body.removeChild(tbSound);
		clearInterval(tbSoundTimer);
	},500)
	
}
//死亡
function overSoundFun(){
	var overSound = document.createElement("audio");
	overSound.id = "overSound";
	overSound.setAttribute("hidden","true");
	overSound.setAttribute("autoplay","true");
	overSound.setAttribute("loop","false");
	var overSource = document.createElement("source");
	overSource.setAttribute("src","img/game_over.mp3");
	overSource.setAttribute("hidden","true");
	overSound.appendChild(overSource);
	document.body.appendChild(overSound);
	var overSoundTimer = setInterval(function(){
		document.body.removeChild(overSound);
		clearInterval(overSoundTimer);
	},1000)
	
}
