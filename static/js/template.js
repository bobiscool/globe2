/**
 * Created by mac on 16/12/9.
 *
 * 由于我是 动态生成的  添加事件 也就只能 在 里面 添加onclick  或者是 在父集上添加点击事件
 */
// 这里是模板数据 传入 DATA 数据  根据 data数据 渲染出 数据来  用es6的模板属性

var CONTENT_BGIMG = new Image();
var DIALOG_IMG = new Image();
DIALOG_IMG.src = "static/img/duihuakuang.png";
CONTENT_BGIMG.src = "static/img/Content-bg.png";
var CONFIG = require("../js/Config");
var DomControl = require("../js/myDomContol.js");
var Template = {
    __MainPage: function (data) {
        return `<span class="Content-nav Info-button Buttons Unselectale">${data.name}</span><img src=${CONTENT_BGIMG.src} class="Content-bg"><div class="Info-board"><span class="Info-board-YJSL">监控产品预警数量<span id="YJSL-number">${data.YJS}</span></span><span class="Info-board-CPSL">监控产品数量<span id="CPSL-number">${data.JKCP}</span></span></div><div class="Chart-Zone HalfPage" id=${CONFIG.__ChartId[data.name]}></div>`
    },
    __AllMap: function (data) {
        return `<span class="Content-nav Info-button Buttons Unselectale">${data.name}</span><img src=${CONTENT_BGIMG.src} class="Content-bg"><div class="Chart-Zone Allmap" id=${CONFIG.__ChartId[data.name]}></div>`
    },
    __Timeline: function (data) {
        // console.log("时间线");
        // console.log(data);
        return `<div class="Year-number" >
                    <div class="Year-number-contend">
                    <div class="Year-number-selecter">
                    <span class="Selecter select-Active" data-changeTime="xd">日</span>
<span class="Selecter" data-changeTime="xm" >月</span>
<span class="Selecter" data-changeTime="xy" >年</span>
                </div>
                <div class="Like-graph-g"></div>

<div class="Year-number-text">
  <span class="Year-number-title">新增下载量</span>
  <span class="Year-number-number">${data.textData[0].growth.day.current_num}</span>
  <span class="Year-number-upOdown">${data.textData[0].growth.day.current_growth}%</span>
</div>

<span class="See-More">查看下载分布</span>
</div>
<div class="Year-number-contend">
<div class="Year-number-selecter">
<span class="Selecter select-Active" data-changeTime="zd">日</span>
<span class="Selecter" data-changeTime="zm" >月</span>
<span class="Selecter" data-changeTime="zy" >年</span>
</div>

<div class="Like-graph-r"></div>
<div class="Year-number-text">
  <span class="Year-number-title">下载量增速</span>
  <span class="Year-number-number">${data.textData[0].growth.day.current_growth}%</span>
  <span class="Year-number-upOdown">${data.textData[0].growth.day.grow_growth}%<span class="Up"></span><span class="Down"
  ></span></span>
</div>
<span class="See-More">查看增速分布</span>

</div>
<div class="Year-number-contend">
<div class="Year-number-selecter">
<span class="Selecter select-Active" data-changeTime="qd">日</span>
<span class="Selecter" data-changeTime="qm" >月</span>
<span class="Selecter" data-changeTime="qy" >年</span>

</div>
<div class="Like-graph-b"></div>

<div class="Year-number-text">
  <span class="Year-number-title">渠道收录数量</span>
  <span class="Year-number-number">${data.textData[0].market.day.currnet_num}</span>
  <span class="Year-number-upOdown">${data.textData[0].market.day.grow_num}%</span>
</div>
<span class="See-More">查看渠道详情</span>
</div>
</div>
                <div class="Time-line">
<span class="Content-nav Info-button Buttons Unselectale">${data.name}</span>
<div class="Time-line-contend">
<div class="Time-line-contend-item"><span class="Circle-out" style="background-color: ${randomBackColor()}"><span class="Circle-in"></span></span>
<div class="Dialog">

<img src=${DIALOG_IMG.src} class="Dialog-img">
<span class="Dialog-contend-title">${WhatsMatter(getWhat(data.textData[1][3].things)[0],data.textData[1][3].things[getWhat(data.textData[1][3].things)[0]]).title}</span>
<span class="Dialog-contend-text">${WhatsMatter(getWhat(data.textData[1][3].things)[0],data.textData[1][3].things[getWhat(data.textData[1][3].things)[0]]).text}</span>
</div>
<div class="Dialog-time">
  <span class="Dialog-time-date">${data.textData[1][3].time}</span>
  <span class="Dialog-time-hour">7:00</span>
  <span class="Dialog-time-hlong">${data.textData[1][3].howlong}</span>
</div>
</div>
<div class="Time-line-contend-item"><span class="Circle-out" style="background-color: ${randomBackColor()}"><span class="Circle-in"></span></span><div class="Dialog">

<img src=${DIALOG_IMG.src} class="Dialog-img">
<span class="Dialog-contend-title">${WhatsMatter(getWhat(data.textData[1][2].things)[0],data.textData[1][3].things[getWhat(data.textData[1][2].things)[0]]).title}</span>
<span class="Dialog-contend-text">${WhatsMatter(getWhat(data.textData[1][2].things)[0],data.textData[1][3].things[getWhat(data.textData[1][2].things)[0]]).text}</span>
</div>
<div class="Dialog-time">
  <span class="Dialog-time-date">${data.textData[1][2].time}</span>
  <span class="Dialog-time-hour">7:00</span>
  <span class="Dialog-time-hlong">${data.textData[1][2].howlong}</span>
</div>
</div>
<div class="Time-line-contend-item"><span class="Circle-out" style="background-color: ${randomBackColor()}"><span class="Circle-in"></span></span>
<div class="Dialog">

<img src=${DIALOG_IMG.src} class="Dialog-img">
<span class="Dialog-contend-title">${WhatsMatter(getWhat(data.textData[1][1].things)[0],data.textData[1][3].things[getWhat(data.textData[1][1].things)[0]]).title}</span>
<span class="Dialog-contend-text">${WhatsMatter(getWhat(data.textData[1][1].things)[0],data.textData[1][3].things[getWhat(data.textData[1][1].things)[0]]).text}</span>
</div>

<div class="Dialog-time">
 <span class="Dialog-time-date">${data.textData[1][1].time}</span>
  <span class="Dialog-time-hour">7:00</span>
  <span class="Dialog-time-hlong">${data.textData[1][1].howlong}</span>
</div>

</div>
<div class="Time-line-contend-item"><span class="Circle-out" style="background-color: ${randomBackColor()}"><span class="Circle-in"></span></span>
<div class="Dialog">

<img src=${DIALOG_IMG.src} class="Dialog-img">
<span class="Dialog-contend-title">${WhatsMatter(getWhat(data.textData[1][0].things)[0],data.textData[1][3].things[getWhat(data.textData[1][0].things)[0]]).title}</span>
<span class="Dialog-contend-text">${WhatsMatter(getWhat(data.textData[1][0].things)[0],data.textData[1][3].things[getWhat(data.textData[1][0].things)[0]]).text}</span>
</div>

<div class="Dialog-time">
  <span class="Dialog-time-date">${data.textData[1][0].time}</span>
  <span class="Dialog-time-hour">7:00</span>
  <span class="Dialog-time-hlong">${data.textData[1][0].howlong}</span>
</div>
</div>
</div>
<span class="V_line"></span>
<span class="See-More">查看更多</span>
</div>`
    },
    __Apparea: function (data) {
        // 突然觉得 还是需要模板语法  在这里 要显示 五十个  最小屏的时候 就是 50个  屏幕增大的时候 图标 不变 ?点击事件添加在哪里??  重新加载数据 又在哪里 数据太多 还是就在本地留下 前后两页的东西 ,点击下一页的时候 才去加载 靠后的第二页 一直这样 循环下去 ???  还有 那个搜索页面是在哪里??  点击事件 该怎么添加 ?
// console.log(data);
        function ActiveUoN(str) {
            if (str) {
                return "activeApp"
            } else {
                return "unActiveApp"
            }
        }



        var __temStr = "<span class='Content-nav Info-button Buttons Unselectale'>" + data.name + "</span><img src=" + CONTENT_BGIMG.src + " class='Content-bg'> <span class='Prev-button' data-changepage='P'></span><span class='Next-button' data-changepage='N'></span>";
        var __temStr2 = "";
        var __temStr3 = "";
        for (var i = 0; i <= 4; i++) {


            for (var j = 0; j <= 9; j++) {
                __temStr2 += "<span class='Appua unActiveApp leftPosition-" + j + " topPosition-" + i + "' data-App='"+add(i*10,j)+"'>" + data.textData.page1[i*10+j].slice(0,6) + "</span>"

                __temStr3 +="<span class='Appua unActiveApp leftPosition-" + j + " topPosition-" + i + "' data-App='"+add(i*10,j)+"'>" + data.textData.page2[i*10+j].slice(0,6) + "</span>"
            }


        }

        const __ApplistN= __temStr+"<div class='Applist ApplistN' data-page='1'>"+__temStr2+"</div>";
        const __ApplistR = "<div class='Applist ApplistR' data-page='2'>"+__temStr3+"</div>";
        var __Applist  = __ApplistN+__ApplistR;

        return __Applist;
    },
    __Channel:function (data) {
        var __temStr = "<span class='Content-nav Info-button Buttons Unselectale'>" + data.name + "</span><img src=" + CONTENT_BGIMG.src + " class='Content-bg'>"+"<span class='SearchArea'><input type='text' class='SearchInput' value='欧朋浏览器'/><input type='submit' class='SearchButton' value='' data-monitor="+CONFIG.__ChartId[data.name]+"/><span class='SearchIcon SearchAndEnter search'></span></span>" +
            "</span>";


        return __temStr;

    },
    __ChartAndSearch:function (data) {
        // 首先创建 一个今天的表格 这里的 data 只是 一个 样板 data 在后面点击之后 才会展示 真实的数据

        var _temApplist="";
        for(var i in data.applist){
            var _temCls = "warning-app-img "+data.applist[i].level;
            _temApplist+= `<span class="warning-app" data-searchapp="${data.applist[i].name}"><span class="warning-app-name" data-searchapp="${data.applist[i].name}">${data.applist[i].name}</span><span class="${_temCls}"></span></span>`
        }

        return `<span class="Content-nav Info-button Buttons Unselectale">${data.name}</span><img src=${CONTENT_BGIMG.src} class="Content-bg"><div class="Chart-Zone Allmap" id=${CONFIG.__ChartId[data.name]}></div> <div class="searchbar-mask"><div class="search-bar"><span class='SearchArea2'><input type='text' class='SearchInput' placeholder="筛选APP" data-search="input"/><span class='SearchIcon SearchAndEnter search'></span></span></span>
<div class="app-list" id="scroll_area">
 <span class="warning-title">预警APP列表</span>
 <span class="slide-bar">
 
 
</span>

  <div class="viewport">
 <div class="warning-app-area overview" >
 ${_temApplist}
</div>
</div>

</div>
 <span class="warning-switch">
 <span class="switch-arrow arrow-in" data-switch="out" data-first="true"></span>
</span>
</div></div> <div class="slide-bg"><div class="scrollbar"><div class="track"><div class="thumb"><div class="end"></div></div></div></div></div>`
    }
}
function randomBackColor() {
    var __hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    var __temStr = "#";
    for (var i = 0; i < 6; i++) {
        __temStr += __hex[parseInt(15 * Math.random())];
    }
    return __temStr;
}

function add(a,b) {
    var b=-Number(b);
    var a = Number(a);
    return a-b;
}

function WhatsMatter(_key,_data) {
    switch(_key){
        case "PRI_APP_DOWN_ABNORMAL":
            return {title:"发现盗版",text:"有"+_data+"应用发现下载量异常增加<br>请查看预警事件"};
            break;
        default:
            return {title:"没有事件",text:"没有事件"};
    }
}


function getWhat(_data, what) {
    var _temWhat = [];
    if(what){
        for (var i = 0, j = _data.length; i < j; i++) {
            _temWhat.push(_data[i][what]);
        }
    }else{
        for (var i in _data) {
            _temWhat.push(i);
        }
    }


    return _temWhat;
}

module.exports = Template;