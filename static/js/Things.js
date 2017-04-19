/**
 * Created by mac on 16/12/7.
 */
var DomControl = require("../js/myDomContol.js");
var ButtonArea = DomControl.$("#Button-Area");
var TEMPLATE = require("../js/template");
var Buttons = DomControl.$("#Button-Area").getElementsByClassName("ButtonsBS");
var CONFIG = require("../js/Config");
var $ = require("jquery");
var tinyscrollbar = require('../js/slide.js');
var OLD = "XX";
var Opoints = DomControl.$("#Points");
var Ocharts_Area = DomControl.$("#Charts-Area");
var Ousername = DomControl.$("#UserName");
var Omasker = DomControl.$("#Masker");
var Opass = DomControl.$("#Password");
var Ologinbtn = DomControl.$("#Loginbtn");
var Oremember = DomControl.$(".RememberPwd")[0];
var AloginInput= DomControl.$(".form-control");
var Ologout = DomControl.$("#switch");
var ORemember = DomControl.$("#Remember");
var Abuttons = DomControl.$(".ButtonsBS");
var ForO = null;
// Ologinbtn.style.display = "none";


var N = 0;
var PAGE_TIMER = null;
var CHARTS_ARRAY = {};
var DATA;
var Data=require('./db').default;
var FIRST_TIME = true;
var ApplistPage=1;
var HeadToken;
var OLD_SCROLL=0;
var NOW_APP_LIST;
// console.log(ORemember);




// LoadData2({key:["increment_curve", "one_update_info", "down_load_dis", "waring_app_download","pri_downloads_growth","pri_mark_history","pri_monitor_apps","pri_monitor_nums","piracy_app_info"],call:ChangeDataStructure});

if(window.localStorage.Token){

    $.ajax({
        headers: {
            // 'Content-Type': 'application/x-www-form-urlencoded',
            "Authorization":"Token "+window.localStorage.Token
        },
        type: "POST",
        url: "http://118.190.5.240:8010/data?client_id=0008&time_stamp="+parseInt((new Date().getTime()) / 1000)+"&key=increment_curve&sign=hehe&name=iscc",
        // url:"http://172.16.11.224:3200/data?"+d,
        // data:{"client_id":"0008","time_stamp":a,"key":_key[i],"sign":"hehe","name":"iscc"},
        dataType: "json",
        success: function (data) {
            // console.log(data);
            if(data.code==1){
                alert("Token超时请重新登录");
               return false;
            }else{
                Omasker.style.display = "none";
                LoadData2({key:["increment_curve", "one_update_info", "down_load_dis", "waring_app_download","pri_downloads_growth","pri_mark_history","pri_monitor_apps","pri_monitor_nums","piracy_app_info"],call:ChangeDataStructure});
                init();
            }
        },
        error: function () {
            alert("登录错误");
        }
    })
}


Ologout.onclick = function () {
    window.localStorage.Token =undefined;
    if(!ORemember.checked){
        AloginInput[0].value= "";
        AloginInput[1].value= "";
    }

    let Obuttony = DomControl.$('.Nav-buttonY')[0];
    Omasker.style.display = "block";
    Ocharts_Area.innerHTML = "";
    Data=require('./db').default;
    Data.XX[0].chartData[0].PRI_APP_AMOUNT=[];
    Data.XX[0].chartData[0].PRI_APP_MONITORS=[];
    N = 0;
    PAGE_TIMER = null;
    CHARTS_ARRAY = {};
    FIRST_TIME = true;
    ApplistPage=1;
    Obuttony.className = "ButtonsBS Nav-buttonB";
    Abuttons[0].className="ButtonsBS Nav-buttonY";
}

window.localStorage.remeber=false;
ORemember.checked=window.localStorage.remeber;
ORemember.onclick = function () {

    if(ORemember.checked){
        // console.log("on");
        AloginInput[0].autocomplete = "on";
        AloginInput[1].autocomplete = "on";
    }else {
        // console.log("off");
        AloginInput[0].autocomplete = "off";
        AloginInput[1].autocomplete = "off";
    }
};



Ologinbtn.onclick = function () {
    console.log("点击");
    if(Opass.value&&Ousername.value){
        $.ajax({
            // contentType: "application/json; charset=utf-8",
            // url:"http://114.215.95.163:8081/login",
            url:"http://118.190.5.240:8010/login",
            type:"POST",
            dataType:"json",
            data:{"username":Ousername.value, "password":Opass.value},
            success:function (data) {
                // console.log(data);
                if(!data.code){
                    Omasker.style.display="none";
                    HeadToken = data.token;
                    window.localStorage.Token = HeadToken;
                    // console.log(HeadToken);
                    LoadData2({key:["increment_curve", "one_update_info", "down_load_dis", "waring_app_download","pri_downloads_growth","pri_mark_history","pri_monitor_apps","pri_monitor_nums","piracy_app_info"],call:ChangeDataStructure});
                    init();
                }
            }
        })
    }else {
        alert("请输入密码和用户名!!!")
    }
}







var d = "client_id=0008&time_stamp=" + parseInt((new Date().getTime()) / 1000) + "&key=increment_curve&sign=hehe" + "&name=iscc";
// console.log(CONTENT_BGIMG);


// $.ajax({
//     url: "./static/js/db2.json",
//     type: 'get',
//     success: function (data) {
//         Data = data;
        // console.log(data);
        // display("XX");

//     },
//     error: function (err) {
//     }
// })


// $.ajax({
//     url:"http://172.16.11.224:8080/data?"+d,
//     // data: { client_id: '0008', time_stamp: parseInt((new Date().getTime()) / 1000),key:"increment_curve",sign:"hehe",name:"iscc" },
//     method: 'GET',
//     success:function (resp) {
//         console.log(resp.responseText);
//
//     },
//     error:function (err) {
//         console.log(err)
//     }
// })


var d = "client_id=0008&time_stamp=" + parseInt((new Date().getTime()) / 1000) + "&key=increment_curve&sign=hehe" + "&name=iscc";
//
// AJAX.getJSON("172.16.11.224:8080"+d,function (res) {
//     console.log(res)
// });


window.addEventListener('resize', function () {
    for (var i in CHARTS_ARRAY) {
        CHARTS_ARRAY[i].resize();
    }
});


// 滑鼠事件
ForO = (function () {// 兼容firefox
    if (navigator.userAgent.indexOf("Firefox") == -1) {

        return {

            a: "wheelDelta",
            c: 1,
            b: "mousewheel"
        }
    } else {
        return {
            a: "detail",
            c: -1,
            b: "DOMMouseScroll"
        }
    }
})();

function init() {
    document.addEventListener(ForO.b, function (e) {
        // console.log(ForO.c*e[ForO.a]);
        clearInterval(PAGE_TIMER);
        PAGE_TIMER = setTimeout(function () {

            if (ForO.c * e[ForO.a] < 0) {
                // console.log(N);
                if (N == DATA.length - 1) {
                    return false;
                }

                if (N < DATA.length - 1) {
                    N++;
                    flyPage2(N);
                }
            } else {
                if (N == 0) {
                    return false;
                }

                if (N > 0) {
                    N--;
                    flyPage2(N);
                }
            }

            changeCircleColor(DomControl.$(".Now")[0].dataset.rank);

        }, 40);
    });

// 滑鼠事件

    document.addEventListener('keydown',function (event) {
        var e= event||window.event;
        if(e.keyCode=="40"){
            if (N == DATA.length - 1) {
                return false;
            }

            if (N < DATA.length - 1) {
                N++;
                flyPage2(N);
            }
        }

        if(e.keyCode=="38") {
            if (N == 0) {
                return false;
            }

            if (N > 0) {
                N--;
                flyPage2(N);
            }
        }
        changeCircleColor(DomControl.$(".Now")[0].dataset.rank);
    })
}


// display("XX");

//点击侧面 小图标
Opoints.addEventListener("click", function (e) {
    var e = e || window.event;
    if (e.target.tagName === "SPAN") {
        // console.log(e.target.dataset.rank);
        flyPage2(e.target.dataset.rank);
    }
});


ButtonArea.addEventListener("click", function (e) {
    var e = e || window.event;
    var temA = e.target;


    if (e.target.tagName === "SPAN") {
        for (var i = 0, j = Buttons.length; i < j; i++) {
            Buttons[i].className = "ButtonsBS Nav-buttonB";
        }
        DomControl.toggleClass(e.target, ["Nav-buttonY", "Nav-buttonB"]);
        display(e.target.dataset.key);

        // console.log(Data['JC'][0].textData);
    }

});


function display(who) {
    //先是界面切换动画
    // console.log("展示"+who);
    N = 0;
    DATA = Data[who];
    // console.log(DATA);
    if (FIRST_TIME) {
        CalculatePonitsPages(DATA.length);
    }
    if (OLD !== who) {
        DomControl.addClass(DomControl.$(".Now")[0], "SmallScaleY");
        // console.log(DomControl.$(".Now")[0].className);
        CHARTS_ARRAY={};
        setTimeout(function () {
            DomControl.removeClass(DomControl.$(".Now")[0], "SmallScaleY")
        }, 300);
        setTimeout(function () {
            CalculatePonitsPages(DATA.length)
        }, 200);
    }
    OLD = who;
    //更改标题  以及获取数据

    //每一个 主标题下面的第一个页面开始加载
}


function CalculatePonitsPages(n) {//计算竖向页数
    // 传入数字 创建
    // console.log("计算页面"+n);
    if (n <= 1) {
        Opoints.className = "HidePoint";
    } else {
        Opoints.className = "ShowPoint";
        Opoints.innerHTML = "";
        Opoints.style.height = n * 30 + "px";
        Opoints.style.marginTop = -(n * 30) / 2 + "px";
        for (var i = 0; i < n; i++) {
            var __Span = document.createElement("span");
            __Span.dataset.rank = i;
            (function (i) {
                if (i == 0) {
                    __Span.className = "Circle ActivePoint " + ("pointRank" + i);
                } else {
                    __Span.className = "Circle NotActivePoint " + ("pointRank" + i);
                }
            })(i);

            Opoints.appendChild(__Span);
        }
    }

    CalculatePages(n)
}


function CalculatePages(n) {
    Ocharts_Area.innerHTML = "";
    for (var i = 0; i < n; i++) {
        var __Div = document.createElement("div");
        RenderTemplateRouter(__Div, DATA[i]);// 模板路由
        __Div.dataset.rank = i;
        (function (i) {
            if (i == 0) {
                if (FIRST_TIME) {
                    __Div.className = "Page Now " + ("PageRank" + i);
                    FIRST_TIME = false;
                } else {
                    __Div.className = "Page Now SmallScaleY " + ("PageRank" + i);
                }
            } else if (i == 1) {
                __Div.className = "Page Next " + ("PageRank" + i);
            } else {
                __Div.className = "Page HidepageB " + ("PageRank" + i);
            }
        })(i);



        Ocharts_Area.appendChild(__Div);
    }
}


function flyPage2(__num) {
    N = __num;
    var __Pages = DomControl.$(".Page");
    var __target = DomControl.$((".PageRank" + __num))[0];
    var __targetP = DomControl.$((".PageRank" + (__num - 1)))[0];
    var __targetN = DomControl.$((".PageRank" + (Number(__num) + 1)))[0];
    // console.log(__Pages);
    __target.className = "Page Now PageRank" + __num;
    if (__targetP) {
        __targetP.className = "Page Prev PageRank" + (__num - 1);
        // console.log(__targetP);
    }

    if (__targetN) {
        __targetN.className = "Page Next PageRank" + (Number(__num) + 1);
        // console.log(__targetN);
    }


    for (var i = 0, j = __Pages.length; i < j; i++) {
        // console.log(__Pages[i].dataset.rank);
        if (__Pages[i].dataset.rank < Number(__num) - 1) {
            __Pages[i].className = "Page HidepageT PageRank" + __Pages[i].dataset.rank;
        }

        if (__Pages[i].dataset.rank > Number(__num) + 1) {
            __Pages[i].className = "Page HidepageB PageRank" + __Pages[i].dataset.rank;
        }

    }
    changeCircleColor(__num);
}


function changeCircleColor(_n) {
    var __Circle = DomControl.$(".Circle");
    for (var i = 0, j = __Circle.length; i < j; i++) {
        if (i == _n) {
            __Circle[i].className = "Circle ActivePoint " + ("pointRank" + i);
        } else {
            __Circle[i].className = "Circle NotActivePoint " + ("pointRank" + i);
        }
    }
}


function RenderTemplateRouter(obj, data) {
    //拿到数据   与DIV比对 渲染到Div上面  这个地方需要配置项 那里获取 路由对应表
    //obj.innerHTML=TEMPLATE[CONFIG[data.name]](data);
    obj.innerHTML += TEMPLATE[CONFIG.__Template[data.name]](data);//设置 渲染模板

    if (typeof data.chartData != "undefined") {

        if (data.chartData instanceof Array) {

            setTimeout(function () {
                renderCharts(data)
            }, 15);
        } else {

            //如果绘制的不止一个图表

            setTimeout(function () {
                renderCharts(data)
            }, 15);
        }
    }

    setTimeout(CONFIG.__AfterRouter[OLD],30);
}

// CalculateDataTitle(Data);

// window.addEventListener("mousescroll",fireFoxorOther);
function renderCharts(data, OneOrMore) {
    // 如果是 一个图表 只需要拿到 数据 以及 找到DIV就可以渲染了
    // 但如果是多个图表  那就需要  将其对应的 图表拿到

    var __tem = typeof OneOrMore;
    // console.log(__tem);
    var __one = (__tem == "undefined") ? true : OneOrMore;//默认为但数据渲染模式
    if (__one === true) {
        //单数据模式
        // console.log(document.getElementById(CONFIG.__ChartId[data.name]));
        var Ochart = echarts.init(document.getElementById(CONFIG.__ChartId[data.name]));
        // console.dir(Ochart+data.name);
        CHARTS_ARRAY[CONFIG.__ChartId[data.name]]=Ochart;
        // Ochart.title = "BMW";
        // console.log("设置Echart");
        // console.log(CONFIG.__ChartSetting[data.name]);
        Ochart.setOption(CONFIG.__ChartSetting[data.name](data.chartData));
    } else {
        //  一个页面多个表格 还没有出现!!!!!   幸好 还没出现 !!!  不然这里比较麻烦  一个页面多个表格   那么 传入的就是一个  对象 每一个对象里面 键值  对应一个数据对象   然后 传入 设置   设置好了  又传出来   进行  布局   这里又涉及到了多个锚点
    }
}



// function LoadData(_key) {
//     var n = 0;
//     var _temArr ={};
//     var a = parseInt((new Date().getTime()) / 1000);
//     for (var i in _key) {
//         let d = "client_id=0008&time_stamp=" + a + "&key=" + _key[i] + "&sign=hehe" + "&name=iscc";
//
//         (function(i){$.ajax({
//             headers: {
//                 // 'Content-Type': 'application/x-www-form-urlencoded',
//                 "Authorization":"Token "+HeadToken
//             },
//             type: "POST",
//             // url: "http://114.215.95.163:8081/data?"+d,
//            url:"http://172.16.11.224:8081/data?"+d,
//            //  data:{"client_id":"0008","time_stamp":a,"key":_key[i],"sign":"hehe","name":"iscc"},
//             dataType: "json",
//             success: function (data) {
//                 n++;
//                 // console.log(n);
//                 // console.log(data);
//                 _temArr[_key[i]]=data.data;
//                 if (n==_key.length) {
//                     // 升起来
//                     //处理数据
//                     // console.log(_temArr);
//                     ChangeDataStructure(_temArr);
//                 }
//             },
//             error: function () {
//                 console.log("error")
//             }
//         })})(i)
//     }
// }

function LoadData2(options) {
    if(!options.name){
        options.name="iscc"
    }
    var n = 0;
    var _temArr ={};
    var a = parseInt((new Date().getTime()) / 1000);
    for (var i in options.key) {
        let d = "client_id=0008&time_stamp=" + a + "&key=" + options.key[i] + "&sign=hehe" + "&name="+options.name;
        (function(i){$.ajax({
            headers: {
                // 'Content-Type': 'application/x-www-form-urlencoded',
                "Authorization":"Token "+window.localStorage.Token
            },
            type: "POST",
            url: "http://118.190.5.240:8010/data?"+d,
            // url:"http://172.16.11.224:3200/data?"+d,
             // data:{"client_id":"0008","time_stamp":a,"key":_key[i],"sign":"hehe","name":"iscc"},
            dataType: "json",
            success: function (data) {
                n++;
                // console.log(n);
                // console.log(data);
                _temArr[options.key[i]]=data.data;
                if (n==options.key.length) {
                    // 升起来
                    //处理数据
                    // console.log(_temArr);
                    // ChangeDataStructure(_temArr);
                    options.call&&options.call(_temArr,options.name);
                }
            },
            error: function () {
                console.log("error")
            }
        })})(i)
    }
}


Ocharts_Area.addEventListener('click', function (e) {
    var e = e || window.event;

    console.log(e.target);
    // if (e.target.dataset.app) {
    //     // console.log(e.target.dataset.app);
    //     DomControl.toggleClass(e.target, ["activeApp", "unActiveApp"]);
    //     DATA[0].textData[e.target.dataset.app].AoN = !DATA[0].textData[e.target.dataset.app].AoN;
    //
    //     // console.log(Data);
    // }
    //post数据

    if (e.target.dataset.changetime) {
        // 找到 找到对应的数据 以及父集 重新渲染
        var _Parents = DomControl.parents(e.target, '.Year-number-contend');
        var _SelectArea = _Parents.getElementsByClassName('Selecter');
        for (var i = 0, j = _SelectArea.length; i < j; i++) {
            DomControl.removeClass(_SelectArea[i], 'select-Active');
        }
//现在需要一个 局部渲染函数。。。   只渲染部分
        DomControl.addClass(e.target, 'select-Active');
        var _RenderArea = _Parents.getElementsByClassName('Year-number-text')[0];
        var _temA= CONFIG.__ClickdataConvice[e.target.dataset.changetime];
        if(e.target.dataset.changetime.indexOf('x')!=-1||e.target.dataset.changetime['z']!=-1){
            _RenderArea.innerHTML = `<div class="Year-number-text">
  <span class="Year-number-title">${_temA.title}</span>
  <span class="Year-number-number">${Data.XX[2].textData[0].growth[_temA.who][_temA.number]}${_temA.add}</span>
  <span class="Year-number-upOdown">${Data.XX[2].textData[0].growth[_temA.who][_temA.zs]}%</span>
</div>`
        }

        if(e.target.dataset.changetime.indexOf('q')!=-1){

            // console.log(Data.XX[2].textData.market[CONFIG.__ClickdataConvice[e.target.dataset.changetime].who]);
            _RenderArea.innerHTML = `<div class="Year-number-text">
  <span class="Year-number-title">${_temA.title}</span>
  <span class="Year-number-number">${Data.XX[2].textData[0].market[_temA.who][_temA.number]}</span>
  <span class="Year-number-upOdown">${Data.XX[2].textData[0].market[_temA.who][_temA.zs]}%</span>
</div>`
        }

    }


    if(e.target.dataset.changepage){
        if(e.target.dataset.changepage=="P"){
            // 加载左边页面

            let __temNow = document.querySelectorAll('.ApplistN')[0];
            let __temPrev = __temNow.previousElementSibling;
            let __temPar = document.querySelectorAll('.Now')[0];

            ApplistPage--;
            if(ApplistPage<1){
                ApplistPage=1
            }else {

                DomControl.addClass(__temNow,'ApplistR');
                DomControl.addClass(__temPrev,'ApplistN');
                DomControl.removeClass(__temNow,'ApplistN');
                DomControl.removeClass(__temPrev,'ApplistL');
            }











        }

        if(e.target.dataset.changepage=="N"){
            //加载右边页面  首先获取 当前
            let __temNow = document.querySelectorAll('.ApplistN')[0];
            let __temPar = document.querySelectorAll('.Now')[0];
            let __temNext = __temNow.nextElementSibling;

            ApplistPage++;
            if(ApplistPage>Data.JC[0].textData.length) {
                ApplistPage = Data.JC[0].textData.length;
            }


            if(__temNext.nextElementSibling){

                DomControl.addClass(__temNow,'ApplistL');
                DomControl.addClass(__temNext,'ApplistN');
                DomControl.removeClass(__temNow,'ApplistN');
                DomControl.removeClass(__temNext,'ApplistR');
            }else{
                var __temStr3 = "";
                for (var i = 0; i <= 4; i++) {
                    for (var j = 0; j <= 9; j++) {
                        __temStr3 +="<span class='Appua unActiveApp leftPosition-" + j + " topPosition-" + i + "' data-App='"+add(i*10,j)+"'>" + Data.JC[0].textData["page"+ApplistPage][i*10+j].slice(0,6) + "</span>"
                    }
                }
                const __ApplistR = "<div class='Applist ApplistR' data-page="+add(ApplistPage,1)+">"+__temStr3+"</div>";


                DomControl.removeClass(__temNow,'ApplistN');
                DomControl.removeClass(__temNext,'ApplistR');
                DomControl.addClass(__temNow,'ApplistL');
                DomControl.addClass(__temNext,'ApplistN');
                __temPar.innerHTML +=__ApplistR;
            }








        }
    }

    if(e.target.dataset.switch){
        // 滑动
        let __switch = document.querySelectorAll('.switch-arrow')[0];
        let __searchbar = document.querySelectorAll('.search-bar')[0];
        let _warning_app_area = document.querySelectorAll('.warning-app-area')[0];
        let scroll_area = document.getElementById('scroll_area');
        let __slide_bg = document.querySelectorAll(".slide-bg")[0];

        if(e.target.dataset.switch == "in"){
            e.target.dataset.switch="out";
            DomControl.removeClass(__slide_bg,"disableLess");
        }else {
            e.target.dataset.switch="in";
            DomControl.addClass(__slide_bg,"disableLess");
        }

        if(e.target.dataset.first=="true"){
            e.target.dataset.first="false";
            // 根据 数据渲染
        }

        DomControl.toggleClass(__switch,["arrow-in","arrow-out"]);
        DomControl.toggleClass(__searchbar,"search-bar-in");


    }

    if(e.target.dataset.search){
        let searchInput = document.querySelectorAll(".SearchInput")[0];
        let _warning_app_area = document.querySelectorAll('.warning-app-area')[0];
        let scroll_area = document.getElementById('scroll_area');
        NOW_APP_LIST=DATA[0].applist.concat();
        searchInput.oninput=function (){
            // console.log(this.value);
            var _self = this;
            NOW_APP_LIST = findWhohas(_self.value,DATA[0].applist);
            // console.log(typeof NOW_APP_LIST[0]);
            if(typeof NOW_APP_LIST[0]!="undefined"){
                if(NOW_APP_LIST.length>=20){
                    let b = NOW_APP_LIST.splice(0,20);
                    renderApplist(_warning_app_area,b);
                    _warning_app_area.style.height = getLength(NOW_APP_LIST.length,20,15)+"px";
                    scrollbar(scroll_area,renderThelast);
                    // console.log(NOW_APP_LIST);
                }else {
                    renderApplist(_warning_app_area,NOW_APP_LIST);
                    _warning_app_area.style.height = getLength(NOW_APP_LIST.length,20,15)+"px";
                    scrollbar(scroll_area);
                }

            }else{
                _warning_app_area.innerHTML = "<span class='warning-app'><span class='warning-app-name'>没有结果o(>﹏<)o</span></span>";
                _warning_app_area.style.height=50+"px";
                scrollbar(scroll_area);
            }


        }
    }

    if(e.target.dataset.searchapp){
        // console.log(e.target.dataset.searchapp);
        LoadData2({key:["priacy_app_details"],name:e.target.dataset.searchapp,call:renderApplistChart
        })
    }

    if(e.target.dataset.monitor){
        let SearchInput = document.querySelectorAll(".SearchInput")[0];
        if(!SearchInput.value){
            alert('请输入一点东西。。');
            return false;
        }else{
            let __tem = "Authorization=Token "+window.localStorage.Token+"&appname="+encodeURI(SearchInput.value);
         window.open("http://appdata.bangcle.com/http_interface/?"+__tem);
        }
    }
});







// 以下函数 是为了调节 数据结构  写的一些 啰嗦的东西

function ChangeDataStructure(data,name) {
    // console.log(data);
    data.pri_monitor_nums.datas =Fakedata(data.pri_monitor_nums.datas);
    data.increment_curve.datas.sort(function (a,b) {
        var c = new Date(a.month);
        var d = new Date(b.month);
        return c-d;
    });//  给日期排序
    Data.SC[0].chartData[0].month = getWhat(data.increment_curve.datas, "month");
    Data.SC[0].chartData[0].sum = getWhat(data.increment_curve.datas, "sum");
    Data.SC[0].chartData[0].dl_num = getWhat(data.increment_curve.datas, "dl_num");
    Data.SC[0].chartData[0].increase = getWhat(data.increment_curve.datas, "increase");
    Data.SC[1].chartData[0].month = getWhat(data.down_load_dis.datas).sort(function (a,b) {
        var c = new Date(a);
        var d = new Date(b);
        return c-d;
    });// 月份拍排一个序
    Data.SC[1].chartData[0].Channels = getWhat(data.down_load_dis.datas[Data.SC[1].chartData[0].month[0]]);

    for(var m=0,n=Data.SC[1].chartData[0].Channels.length;m<n;m++){
        Data.SC[1].chartData[0].ChannelsData[Data.SC[1].chartData[0].Channels[m]]=[];

    }
    for(var i=0,j=Data.SC[1].chartData[0].month.length;i<j;i++){
        for(var m=0,n=Data.SC[1].chartData[0].Channels.length;m<n;m++){
            if(Data.SC[1].chartData[0].ChannelsData[Data.SC[1].chartData[0].Channels[m]]&&Data.SC[1].chartData[0].ChannelsData[Data.SC[1].chartData[0].Channels[m]]!=[]){
            Data.SC[1].chartData[0].ChannelsData[Data.SC[1].chartData[0].Channels[m]].push(data.down_load_dis.datas[Data.SC[1].chartData[0].month[i]][Data.SC[1].chartData[0].Channels[m]]);}else {
                Data.SC[1].chartData[0].ChannelsData[Data.SC[1].chartData[0].Channels[m]]=[];
                Data.SC[1].chartData[0].ChannelsData[Data.SC[1].chartData[0].Channels[m]].push(data.down_load_dis.datas[Data.SC[1].chartData[0].month[i]][Data.SC[1].chartData[0].Channels[m]]);
            }
        }
    }

    Data.XX[0].chartData[0].month= getWhat(data.pri_monitor_nums.datas).sort(function (a,b) {
        var c = new Date(a);
        var d = new Date(b);
        return c-d;
    });
    Data.XX[0].chartData[0].PRI_APP_AMOUNT;
        for(var i in  Data.XX[0].chartData[0].month){
            Data.XX[0].chartData[0].PRI_APP_AMOUNT.push(data.pri_monitor_nums.datas[Data.XX[0].chartData[0].month[i]]["PRI_APP_AMOUNT"]);
            Data.XX[0].chartData[0].PRI_APP_MONITORS.push(data.pri_monitor_nums.datas[Data.XX[0].chartData[0].month[i]]["PRI_APP_MONITORS"]);
        }

    Data.XX[0].YJS= Data.XX[0].chartData[0].PRI_APP_AMOUNT[Data.XX[0].chartData[0].PRI_APP_AMOUNT.length-1];
    Data.XX[0].JKCP= Data.XX[0].chartData[0].PRI_APP_MONITORS[Data.XX[0].chartData[0].PRI_APP_MONITORS.length-1];



    Data.XX[1].chartData[0].areaData = ProvinceToCity(data.waring_app_download.datas);
    Data.XX[2].textData[0]= data.pri_downloads_growth.speed;

    //
    let _temmonth =getWhat(data.piracy_app_info.apps).sort(function (a,b) {
        var c = new Date(a);
        var d = new Date(b);
        return c-d;
    });
    for(var i in _temmonth){
        Data.XX[2].textData[1].push({time:_temmonth[i],things:data.piracy_app_info.apps[_temmonth[i]],howlong:diffTime(_temmonth[i])});
    }

    Data.DB[0].chartData[0].Times= getWhat(data.pri_mark_history.datas).sort(function (a,b) {
        var c = new Date(a);
        var d = new Date(b);
        return c-d;
    });

    Data.DB[0].chartData[0].TimeData= data.pri_mark_history.datas;
    Data.DB[0].chartData[0].Channels= getWhat(data.pri_mark_history.datas[Data.DB[0].chartData[0].Times[0]]);
    Paging(data.pri_monitor_apps.datas,Data.JC[0].textData);
    // Data.JC[0].textData = data.pri_monitor_apps.datas;


    //预警详情
    Data.YJ[0].applist=data.piracy_app_info.app_list;

    // Data.

    setTimeout(function () {
        // console.log('display XX');
        display("XX");
    },50)

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

// 暂时的函数  一旦改数据 这个就删除了
function ProvinceToCity(_data) {
    var _temCity = []
    for (var i in _data) {
        // _temCity[CONFIG.__ProvinceTocity[i]]=_data[i].count;
        _temCity.push({name:i,value:_data[i].count})
    }

    // console.log(_temCity);
    return _temCity
}

function Paging(_data,WhogetPage) {
    var _temN = parseInt(_data.length/50)+1
    for(var i=1;i<=_temN;i++){
        WhogetPage["page"+i]=_data.slice((i*50)-50,(i*50));
        // console.log(WhogetPage);
    }
}

function add(a,b) {

    var b=-Number(b);
    var a = Number(a);
    return a-b;
}


function Fakedata(_a) {
    if(Object.keys(_a).length
        <3){
        return {
            "2016-11":{
                PRI_APP_AMOUNT:475,
                PRI_APP_MONITORS:3190
            },
            "2016-12":{
                PRI_APP_AMOUNT:865,
                PRI_APP_MONITORS:4195
            },
            "2017-01":{
                PRI_APP_AMOUNT:845,
                PRI_APP_MONITORS:5190
            }
        }
    }else {
        return _a;
    }
}


function renderApplist(_obj,_data,_add) {
    if(!_add){
        _obj.innerHTML = "";
        // console.log(_data);
        for(var i in _data){
            var _temCls = "warning-app-img "+_data[i].level;
            _obj.innerHTML +=`<span class="warning-app" data-searchapp="${_data[i].name}"><span class="warning-app-name"  data-searchapp="${_data[i].name}">${_data[i].name}</span><span class="${_temCls}"></span></span>`
        }
    }else {
        for(var i in _data){
            var _temCls = "warning-app-img "+_data[i].level;
            _obj.innerHTML +=`<span class="warning-app" data-searchapp="${_data[i].name}"><span class="warning-app-name"  data-searchapp="${_data[i].name}">${_data[i].name}</span><span class="${_temCls}"></span></span>`
        }
    }

}

function findWhohas(_value,_data) {
    if(_value!=""){
        let _temArray = [];
        for(var i in _data){
            if(_data[i].name.indexOf(_value)!=-1){
                // console.log(_value);
                _temArray.push(_data[i]);
            }
        }

        return _temArray;
    }else {
        return _data.concat([]);
    }

}

function scrollbar(_el,call) {
    var scrollbar  = tinyscrollbar(_el,{trackSize:231,wheelSpeed:50});
    let _warning_app_area = document.querySelectorAll('.warning-app-area')[0];
    OLD_SCROLL=_warning_app_area.offsetTop;
    // console.log(scrollbar);
    _el.addEventListener("move", function()
    {
        call&&call(scrollbar.contentPosition);
    }, false);
}

function refreshCharts(_name,_data) {
    CHARTS_ARRAY[CONFIG.__ChartId[_name]].setOption(CONFIG.__ChartSetting[_name](_data))
}

function renderApplistChart(_data,_appname) {
    var _data=_data.priacy_app_details;
    // console.log(_data);
    var _down =[];
    var _pri =[];
    var _month = getWhat(_data.pri_num).sort(function (a,b) {
        var c = new Date(a);
        var d = new Date(b);
        return c-d;
    });
    // console.log(_month);
    for(var i in _month){
        // console.log(i);
        if(_data.down_his){
            _down.push(_data.down_his[_month[i]]);
        }
        if(_data.pri_num){
            _pri.push(_data.pri_num[_month[i]]);
        }
    }

    // console.log(_down);
    // console.log(_pri);
    refreshCharts("预警详情",[{time:_month,pri:_pri,down:_down,name:_appname}])
}

function diffTime(_Time) {
    let _temA = new Date().getTime();
    let _temB = new Date(_Time).getTime();

    var a = parseInt((_temA-_temB)/(24*60*60*1000))
   if(!a){
        return "今天";
   }else {
       return a+"天前";
   }
}

function getLength(l,h,m) {
    return l*(h+m);
}


function renderThelast(position) {
    let _warning_app_area = document.querySelectorAll('.warning-app-area')[0];


    let a = Math.abs(parseInt((OLD_SCROLL-position)/35));

    if(a>NOW_APP_LIST.length){
        return false;
    }

    if(a>=1){
       let b = NOW_APP_LIST.splice(0,a);
       renderApplist(_warning_app_area,b,true);
   }
   OLD_SCROLL=position;
}