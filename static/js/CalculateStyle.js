/**
 * Created by mac on 16/12/2.
 */

var stage = new createjs.Stage("BgEarth");
var stage2 = new createjs.Stage("BgEarth2");
// console.log(stage)
var DomControl=require("../js/myDomContol.js");
var stageDom = DomControl.$("#BgEarth");
var stageDom2 = DomControl.$("#BgEarth2");
// console.log(stage)
var w=0;
var h = 0;
var ImgArray = [];
var a = 0;
var BgEarth1 = {OldX:0},
    BgEarth2 = {OldX:0},
    GroundEarth = {OldY:0},
    BgEarthadd1 = {OldX:0},
    BgEarthadd2 = {OldX:0},
    GroundEarthadd = {OldY:0},
    LXK1 ={},
    LXK2 = {},RSIZETIMER;

PreLoad([ "static/img/new.png","static/img/ground.png","static/img/LXK1.png","static/img/LXK2.png"],init);


function resize(){
     w = DomControl.$("#bgImg").offsetWidth;
     h = DomControl.$("#bgImg").offsetHeight;
    stageDom.setAttribute("width",w);
    stageDom2.setAttribute("width",w);
    stageDom.setAttribute("height",h);
    stageDom2.setAttribute("height",h);
    CalculateButtonTop();
}

function init() {
    resize();
    addToStage();
    window.addEventListener("resize" ,function () {
        clearTimeout(RSIZETIMER);
        RSIZETIMER=setTimeout(function () {
            resize();
            positionImg();
        },20);

    });
}

DomControl.$("#bgImg").onmousedown=function (event) {
    event.preventDefault();
};

DomControl.$("#Borders").onmousedown = function (event) {
    event.preventDefault();
};



function PreLoad(Array,Callback) {
    var temA= [];
    var n =0;
    for(var i=0,j=Array.length;i<j;i++){
        temA[i] = new Image();
          temA[i].src =Array[i];
        temA[i].onload = function () {
            n++;
            // console.log(n);
        }
    }


    var temB = setInterval(function () {
        if(n==Array.length)
        {
            clearInterval(temB);
            ImgArray=temA;
            Callback&&Callback();
            return temA;
        }
    },50);
}




function addToStage() {
    // console.log(ImgArray);
    BgEarth1 = new createjs.Bitmap(ImgArray[0]);
    BgEarth2 = new createjs.Bitmap(ImgArray[0]);
    GroundEarth = new createjs.Bitmap(ImgArray[1]);
    BgEarthadd1 = new createjs.Bitmap(ImgArray[0]);
    BgEarthadd2 = new createjs.Bitmap(ImgArray[0]);
    GroundEarthadd = new createjs.Bitmap(ImgArray[1]);
    LXK1 =new createjs.Bitmap(ImgArray[2]);
    LXK2 = new createjs.Bitmap(ImgArray[3]);
    positionImg();
}



function positionImg() {

    BgEarth1.x=-0.9*ImgArray[0].width+(w-ImgArray[0].width)/2;
    BgEarth1.y=0.296*h;
    BgEarth1.scaleY = 0.5*w/1000;
    BgEarth2.scaleY = 0.5*w/1000;
    BgEarth2.x=.1*ImgArray[0].width+(w-ImgArray[0].width)/2;
    BgEarth2.y=0.296*h;

    BgEarthadd1.x=-0.9*ImgArray[0].width+(w-ImgArray[0].width)/2;
    BgEarthadd1.y=0.296*h;
    BgEarthadd1.scaleY = 0.5*w/1000;
    BgEarthadd2.scaleY = 0.5*w/1000;
    BgEarthadd2.x=.1*ImgArray[0].width+(w-ImgArray[0].width)/2;
    BgEarthadd2.y=0.296*h;


    var React = new createjs.Shape();
    var Reactadd = new createjs.Shape();
    stage.addChild(BgEarth1);
    stage.addChild(BgEarth2);
    stage2.addChild(BgEarthadd1);
    stage2.addChild(BgEarthadd2);
    React.graphics.beginFill("rgba(255,255,255,0.0)").drawRoundRect(ImgArray[0].width*0.1+(w-ImgArray[0].width)/2,0.296*h,ImgArray[0].width*0.8,ImgArray[0].height*0.6,180);
    Reactadd.graphics.beginFill("rgba(255,255,255,0.0)").drawRoundRect(ImgArray[0].width*0.1+(w-ImgArray[0].width)/2,0.296*h,ImgArray[0].width*0.8,ImgArray[0].height*0.6,180);
    BgEarth1.mask = React;
    BgEarth2.mask = React;

    BgEarthadd1.mask = Reactadd;
    BgEarthadd2.mask = Reactadd;

    GroundEarth.y = parseInt((h-ImgArray[1].height));
    GroundEarth.scaleX = w/1920;
    GroundEarth.x =(w-ImgArray[1].width*w/1920)/2;


    GroundEarthadd.y = parseInt((h-ImgArray[1].height));
    GroundEarthadd.scaleX = w/1920;
    GroundEarthadd.x =(w-ImgArray[1].width*w/1920)/2;

    LXK1.x =0.034*w;
    LXK1.scaleX =w/1920;
    LXK1.scaleY = w/1920;
    LXK2.x = 0.812*w;
    LXK2.scaleX =w/1920;
    LXK2.scaleY = w/1920;
    LXK1.y = 0.167*h;
    LXK2.y = 0.167*h;




    stage.addChild(React,GroundEarth,LXK1,LXK2);
    stage2.addChild(Reactadd,GroundEarthadd);
    stage.update();
    stage2.update();


    createjs.Ticker.timingMode = createjs.Ticker.RAF;
    createjs.Ticker.addEventListener("tick",tick);
}


function tick(event) {
    BgEarth1.OldX=BgEarth1.x;
    BgEarth2.OldX=BgEarth2.x;
    GroundEarth.OldY=GroundEarth.y;
    BgEarth1.x +=.05;
    BgEarth2.x +=.05;

    BgEarthadd1.OldX=BgEarth1.x;
    BgEarthadd2.OldX=BgEarth2.x;
    GroundEarthadd.OldY=GroundEarth.y;
    BgEarthadd1.x +=.05;
    BgEarthadd2.x +=.05;

    if(parseInt(GroundEarth.y)==parseInt((h-ImgArray[1].height*3/4))){
        a=-1;
    }

    if(GroundEarth.y==parseInt((h-ImgArray[1].height))){
        a=1;
    }


    // console.log(GroundEarth.y);
    GroundEarth.y+=a*0.04;
    GroundEarthadd.y+=a*0.04;


    if(BgEarth1.x>ImgArray[0].width+(w-ImgArray[0].width)/2){
        BgEarth1.x=-.9*ImgArray[0].width+(w-ImgArray[0].width)/2;
        BgEarthadd1.x=-.9*ImgArray[0].width+(w-ImgArray[0].width)/2;
    }
    if(BgEarth2.x>ImgArray[0].width+(w-ImgArray[0].width)/2){
        BgEarth2.x=-.9*ImgArray[0].width+(w-ImgArray[0].width)/2;
        BgEarthadd2.x=-.9*ImgArray[0].width+(w-ImgArray[0].width)/2;
    }
    stage.update(event);
    stage2.update(event);
}

// 12.07
function CalculateButtonTop() {
    DomControl.$("#Button-Area").style.top = DomControl.$("#Borders").offsetTop+0.157*DomControl.$("#topBorder").offsetHeight-50+"px";
}

