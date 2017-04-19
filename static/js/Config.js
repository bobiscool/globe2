/**
 * Created by mac on 16/12/9.
 *
 */
var tinyscrollbar = require('../js/slide.js');
var GEO_LOCATION = {
    '海门': [121.15, 31.89],
    '鄂尔多斯': [109.781327, 39.608266],
    '招远': [120.38, 37.35],
    '舟山': [122.207216, 29.985295],
    '齐齐哈尔': [123.97, 47.33],
    '盐城': [120.13, 33.38],
    '赤峰': [118.87, 42.28],
    '青岛': [120.33, 36.07],
    '乳山': [121.52, 36.89],
    '金昌': [102.188043, 38.520089],
    '泉州': [118.58, 24.93],
    '莱西': [120.53, 36.86],
    '日照': [119.46, 35.42],
    '胶南': [119.97, 35.88],
    '南通': [121.05, 32.08],
    '拉萨': [91.11, 29.97],
    '云浮': [112.02, 22.93],
    '梅州': [116.1, 24.55],
    '文登': [122.05, 37.2],
    '上海': [121.48, 31.22],
    '攀枝花': [101.718637, 26.582347],
    '威海': [122.1, 37.5],
    '承德': [117.93, 40.97],
    '厦门': [118.1, 24.46],
    '汕尾': [115.375279, 22.786211],
    '潮州': [116.63, 23.68],
    '丹东': [124.37, 40.13],
    '太仓': [121.1, 31.45],
    '曲靖': [103.79, 25.51],
    '烟台': [121.39, 37.52],
    '福州': [119.3, 26.08],
    '瓦房店': [121.979603, 39.627114],
    '即墨': [120.45, 36.38],
    '抚顺': [123.97, 41.97],
    '玉溪': [102.52, 24.35],
    '张家口': [114.87, 40.82],
    '阳泉': [113.57, 37.85],
    '莱州': [119.942327, 37.177017],
    '湖州': [120.1, 30.86],
    '汕头': [116.69, 23.39],
    '昆山': [120.95, 31.39],
    '宁波': [121.56, 29.86],
    '湛江': [110.359377, 21.270708],
    '揭阳': [116.35, 23.55],
    '荣成': [122.41, 37.16],
    '连云港': [119.16, 34.59],
    '葫芦岛': [120.836932, 40.711052],
    '常熟': [120.74, 31.64],
    '东莞': [113.75, 23.04],
    '河源': [114.68, 23.73],
    '淮安': [119.15, 33.5],
    '泰州': [119.9, 32.49],
    '南宁': [108.33, 22.84],
    '营口': [122.18, 40.65],
    '惠州': [114.4, 23.09],
    '江阴': [120.26, 31.91],
    '蓬莱': [120.75, 37.8],
    '韶关': [113.62, 24.84],
    '嘉峪关': [98.289152, 39.77313],
    '广州': [113.23, 23.16],
    '延安': [109.47, 36.6],
    '太原': [112.53, 37.87],
    '清远': [113.01, 23.7],
    '中山': [113.38, 22.52],
    '昆明': [102.73, 25.04],
    '寿光': [118.73, 36.86],
    '盘锦': [122.070714, 41.119997],
    '长治': [113.08, 36.18],
    '深圳': [114.07, 22.62],
    '珠海': [113.52, 22.3],
    '宿迁': [118.3, 33.96],
    '咸阳': [108.72, 34.36],
    '铜川': [109.11, 35.09],
    '平度': [119.97, 36.77],
    '佛山': [113.11, 23.05],
    '海口': [110.35, 20.02],
    '江门': [113.06, 22.61],
    '章丘': [117.53, 36.72],
    '肇庆': [112.44, 23.05],
    '大连': [121.62, 38.92],
    '临汾': [111.5, 36.08],
    '吴江': [120.63, 31.16],
    '石嘴山': [106.39, 39.04],
    '沈阳': [123.38, 41.8],
    '苏州': [120.62, 31.32],
    '茂名': [110.88, 21.68],
    '嘉兴': [120.76, 30.77],
    '长春': [125.35, 43.88],
    '胶州': [120.03336, 36.264622],
    '银川': [106.27, 38.47],
    '张家港': [120.555821, 31.875428],
    '三门峡': [111.19, 34.76],
    '锦州': [121.15, 41.13],
    '南昌': [115.89, 28.68],
    '柳州': [109.4, 24.33],
    '三亚': [109.511909, 18.252847],
    '自贡': [104.778442, 29.33903],
    '吉林': [126.57, 43.87],
    '阳江': [111.95, 21.85],
    '泸州': [105.39, 28.91],
    '西宁': [101.74, 36.56],
    '宜宾': [104.56, 29.77],
    '呼和浩特': [111.65, 40.82],
    '成都': [104.06, 30.67],
    '大同': [113.3, 40.12],
    '镇江': [119.44, 32.2],
    '桂林': [110.28, 25.29],
    '张家界': [110.479191, 29.117096],
    '宜兴': [119.82, 31.36],
    '北海': [109.12, 21.49],
    '西安': [108.95, 34.27],
    '金坛': [119.56, 31.74],
    '东营': [118.49, 37.46],
    '牡丹江': [129.58, 44.6],
    '遵义': [106.9, 27.7],
    '绍兴': [120.58, 30.01],
    '扬州': [119.42, 32.39],
    '常州': [119.95, 31.79],
    '潍坊': [119.1, 36.62],
    '重庆': [106.54, 29.59],
    '台州': [121.420757, 28.656386],
    '南京': [118.78, 32.04],
    '滨州': [118.03, 37.36],
    '贵阳': [106.71, 26.57],
    '无锡': [120.29, 31.59],
    '本溪': [123.73, 41.3],
    '克拉玛依': [84.77, 45.59],
    '渭南': [109.5, 34.52],
    '马鞍山': [118.48, 31.56],
    '宝鸡': [107.15, 34.38],
    '焦作': [113.21, 35.24],
    '句容': [119.16, 31.95],
    '北京': [116.46, 39.92],
    '徐州': [117.2, 34.26],
    '衡水': [115.72, 37.72],
    '包头': [110, 40.58],
    '绵阳': [104.73, 31.48],
    '乌鲁木齐': [87.68, 43.77],
    '枣庄': [117.57, 34.86],
    '杭州': [120.19, 30.26],
    '淄博': [118.05, 36.78],
    '鞍山': [122.85, 41.12],
    '溧阳': [119.48, 31.43],
    '库尔勒': [86.06, 41.68],
    '安阳': [114.35, 36.1],
    '开封': [114.35, 34.79],
    '济南': [117, 36.65],
    '德阳': [104.37, 31.13],
    '温州': [120.65, 28.01],
    '九江': [115.97, 29.71],
    '邯郸': [114.47, 36.6],
    '临安': [119.72, 30.23],
    '兰州': [103.73, 36.03],
    '沧州': [116.83, 38.33],
    '临沂': [118.35, 35.05],
    '南充': [106.110698, 30.837793],
    '天津': [117.2, 39.13],
    '富阳': [119.95, 30.07],
    '泰安': [117.13, 36.18],
    '诸暨': [120.23, 29.71],
    '郑州': [113.65, 34.76],
    '哈尔滨': [126.63, 45.75],
    '聊城': [115.97, 36.45],
    '芜湖': [118.38, 31.33],
    '唐山': [118.02, 39.63],
    '平顶山': [113.29, 33.75],
    '邢台': [114.48, 37.05],
    '德州': [116.29, 37.45],
    '济宁': [116.59, 35.38],
    '荆州': [112.239741, 30.335165],
    '宜昌': [111.3, 30.7],
    '义乌': [120.06, 29.32],
    '丽水': [119.92, 28.45],
    '洛阳': [112.44, 34.7],
    '秦皇岛': [119.57, 39.95],
    '株洲': [113.16, 27.83],
    '石家庄': [114.48, 38.03],
    '莱芜': [117.67, 36.19],
    '常德': [111.69, 29.05],
    '保定': [115.48, 38.85],
    '湘潭': [112.91, 27.87],
    '金华': [119.64, 29.12],
    '岳阳': [113.09, 29.37],
    '长沙': [113, 28.21],
    '衢州': [118.88, 28.97],
    '廊坊': [116.7, 39.53],
    '菏泽': [115.480656, 35.23375],
    '合肥': [117.27, 31.86],
    '武汉': [114.31, 30.52],
    '大庆': [125.03, 46.58]
};
function scrollbar(_el) {
    var scrollbar  = tinyscrollbar(_el,{trackSize:231,wheelSpeed:50});

    // console.log(scrollbar);
    _el.addEventListener("move", function()
    {
        // console.log(scrollbar.contentPosition);
    }, false);
}

var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = GEO_LOCATION[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};

var WsW=[
{stack:"bar",color:"#0096FF"},
{stack:"bar1",color:"#7779FF"},
{stack:"bar1",color:"#00FF02"},
{stack:"bar1",color:"#F8EC02"},
{stack:"bar2",color:"#01FEFF"},
{stack:"bar2",color:"#B2BFCB"},
{stack:"bar3",color:"#FE8C03"},
{stack:"bar3",color:"#00C833"},
{stack:"bar3",color:"#C30508"},
{stack:"bar4",color:"#0096FF"},
{stack:"bar4",color:"#F8EC02"},
{stack:"bar4",color:"#01FEFF"},
{stack:"bar4",color:"#B2BFCB"},
{stack:"bar4",color:"#FE8C03"},
{stack:"bar4",color:"#00C833"},
{stack:"bar4",color:"#C30508"},
    {stack:"bar",color:"#0096FF"},
    {stack:"bar1",color:"#7779FF"},
    {stack:"bar1",color:"#00FF02"},
    {stack:"bar1",color:"#F8EC02"},
    {stack:"bar2",color:"#01FEFF"},
    {stack:"bar2",color:"#B2BFCB"},
    {stack:"bar3",color:"#FE8C03"},
    {stack:"bar3",color:"#00C833"},
    {stack:"bar3",color:"#C30508"},
    {stack:"bar4",color:"#0096FF"},
    {stack:"bar4",color:"#F8EC02"},
    {stack:"bar4",color:"#01FEFF"},
    {stack:"bar4",color:"#B2BFCB"},
    {stack:"bar4",color:"#FE8C03"},
    {stack:"bar4",color:"#00C833"},
    {stack:"bar4",color:"#C30508"}
]


var DbF = [
    {color1:"089501",color2:"7FF000"},
    {color1:"F27300",color2:"F8CE00"},
    {color1:"A00000",color2:"ED0202"},
    {color1:"0079FD",color2:"03B1FF"},
    {color1:"01BFBE",color2:"00FBFD"},
    {color1:"089501",color2:"7FF000"},
    {color1:"F27300",color2:"F8CE00"},
    {color1:"A00000",color2:"ED0202"},
    {color1:"0079FD",color2:"03B1FF"},
    {color1:"01BFBE",color2:"00FBFD"},
    {color1:"A00000",color2:"ED0202"},
    {color1:"0079FD",color2:"03B1FF"}

]

//这里需要写一个一次生成函数

var CONFIG = {
    __Template: {
        "监控数量": "__MainPage",
        "预警数量": "__AllMap",
        "时间线": "__Timeline",
        "盗版分布": "__AllMap",
        "下载量图": "__AllMap",
        "下载量分布": "__AllMap",
        "预警详情": "__ChartAndSearch",
        "监测列表": "__Apparea",
        "渠道监测": "__Channel"
    },
    __ChartId: {
        "监控数量": "JKSJ",
        "预警数量": "YJSL",
        "时间线": "SJX",
        "盗版分布": "DBFB",
        "下载量图": "XZLT",
        "下载量分布": "XZLFB",
        "预警详情": "YJXQ"
    },
    __ChartSetting: {
        "监控数量": function (data) {
            // console.log(data)
            return {

                title: {
                    text: '',
                    subtext: ''
                },
                legend: {
                    show: false,
                    data: ["监控产品预警数量", "监控产品数量"]

                },
                toolbox: {
                    show: false
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: data[0].month,
                    axisLabel: {
                        textStyle: {
                            color: "#fff"
                        }
                    }
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {
                        textStyle: {
                            color: "#fff"
                        }
                    }
                },
                series: [{
                    name: '监控产品预警数量',
                    type: 'line',
                    smooth: true,
                    textStyle: {
                        color: "#FE3C6E"
                    },
                    lineStyle: {
                        normal: {
                            color: "rgba(254,60,110,1)"
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: "rgba(254,60,110,1)"
                        }
                    },
                    data: data[0].PRI_APP_AMOUNT

                }, {
                    name: '监控产品数量',
                    type: 'line',
                    smooth: true,
                    textStyle: {
                        color: "#02FFFF"
                    },
                    lineStyle: {
                        normal: {
                            color: "rgba(2,255,255,0.3)"
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: "rgba(2,255,255,0.3)"
                        }
                    },
                    data:  data[0].PRI_APP_MONITORS
                }],
                tooltip: {
                    show: true,
                    trigger: 'axis'
                }
            }
        },
        "预警数量": function (data) {
            return {
                title: {
                    text: '',
                    subtext: '',
                    sublink: '',
                    left: 'center',
                    textStyle: {
                        color: '#fff'
                    }
                },
                tooltip: {
                    trigger: 'item',
                    formatter:function (value,index) {
                        var a = value.value;
                        var b = a[2]+"次";

                        return b;
                    }
                },
                visualMap: {
                    min: 0,
                    max: 1000,
                    calculable: true,
                    color: ['orangered', 'yellow', 'lightskyblue'],
                    textStyle: {
                        color: "#fff"
                    },
                    right: 0
                },
                geo: {
                    map: 'china',
                    label: {
                        emphasis: {
                            show: false
                        }
                    },
                    roam: false,
                    itemStyle: {
                        normal: {
                            areaColor: '#000B2A',
                            borderColor: '#41657D'
                        },
                        emphasis: {
                            areaColor: '#2a333d'
                        }
                    }
                },
                series: [
                    {
                        name: '',
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        data: convertData(data[0].areaData),
                        symbolSize: function (val) {
                            var _tem=0;

                            if(val[2]/5>50)
                            {
                                _tem=50;
                            }else if(val[2]/5<10){
                                _tem=10;
                            }else {
                                _tem=val[2]/5;
                            }

                            return _tem;
                        },
                        label: {
                            normal: {
                                formatter: '{b}',
                                position: 'right',
                                show: true
                            },
                            emphasis: {
                                show: true
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#ddb926'
                            }
                        }
                    },
                    {
                        name: 'Top 5',
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
                        data: convertData(data[0].areaData.sort(function (a, b) {
                            return b.value - a.value;
                        }).slice(0, 6)),
                        symbolSize: function (val) {

                            var _tem=0;

                            if(val[2]/5>50)
                            {
                                _tem=50;
                            }else if(val[2]/5<10){
                                _tem=10;
                            }else {
                                _tem=val[2]/5;
                            }

                            return _tem;
                        },
                        showEffectOn: 'render',
                        rippleEffect: {
                            brushType: 'stroke'
                        },
                        hoverAnimation: true,
                        label: {
                            normal: {
                                formatter: '{b}',
                                position: 'right',
                                show: true
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#f4e925',
                                shadowBlur: 10,
                                shadowColor: '#333'
                            }
                        },
                        zlevel: 1
                    }
                ]

            }
        },
        "时间线": {},
        "盗版分布": function (data) {
            // console.log(data);
            var _tem = [];
            var _temO = {}
            for(var i=0,j=data[0].Times.length;i<j;i++){
                _temO[i]=[];
                for(var m=0,n=data[0].Channels.length;m<n;m++){
                    _temO[i].push({
                        name: data[0].Channels[m], value: data[0].TimeData[data[0].Times[i]][data[0].Channels[m]], itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 1, color: '#'+DbF[m].color1
                                }, {
                                    offset: 0, color: '#'+DbF[m].color2
                                }], false)
                            }
                        }
                    })

                }
                _tem.push({
                    title: {text: "截止"+data[0].Times[i]+"盗版分布情况"},
                    series:[{data:_temO[i]}]
                })
            }

            // console.log(_tem)

            return {
                baseOption: {
                    timeline: {
                        // y: 0,
                        axisType: 'category',
                        autoPlay: true,
                        playInterval: 2000,
                        controlStyle: {
                            showPrevBtn: true,
                            showNextBtn: true,
                            position: "left",
                            normal: {
                                color: "transparent",
                                borderColor: "#03E8FA"
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: "#03E8FA",
                                borderColor: "#03E8FA"
                            },
                            emphasis: {
                                color: "#03E8FA", borderColor: "#03E8FA"
                            }

                        }
                        ,
                        data: data[0].Times,
                        label: {
                            textStyle: {
                                color: '#fff'
                            }
                        },
                        lineStyle: {
                            color: '#03E8FA'
                        }
                    },
                    title: {
                        subtext: '数据来自梆梆安全',
                        textStyle: {
                            color: '#fff'
                        },
                        left:60

                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        x: 'right',
                        data:data[0].Channels,
                        textStyle: {
                            color: "#fff",
                        },
                        top:50
                    },
                    calculable: true,
                    grid: {
                        top: 80,
                        bottom: 100
                    },
                    xAxis: [],
                    yAxis: [],
                    series: [
                        {

                            name: '占比',
                            type: 'pie',
                            center:['50%','50%']
,                            radius: '60%',
                            itemStyle: {
                                normal: {

                                    label:{
                                        show: true,
//	                            position:'inside',
                                        textStyle: {
                                            color: 'rgba(255, 255, 255, 0.9)'
                                        },
                                        formatter: '{b} : {c} ({d}%)'
                                    }
                                },
                                labelLine :{show:true,
                                normal:{
                                    lineStyle: {
                                        color: 'rgba(255, 255, 255, 0.9)'
                                    }
                                }
                                }
                            }
                        }
                    ]
                },
                options: _tem
                //     {
                //         title: {text: '2002全国宏观经济指标'},
                //         series: [
                //
                //             {
                //                 data: [
                //                     {
                //                         name: '应用宝', value: data[0]['2015.01']["应用宝"], itemStyle: {
                //                         normal: {
                //                             color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //                                 offset: 1, color: '#089501'
                //                             }, {
                //                                 offset: 0, color: '#7FF000'
                //                             }], false)
                //                         }
                //                     }
                //                     },
                //                     {
                //                         name: '多特',
                //                         value: data[0]['2015.01']["多特"],
                //                         itemStyle: {
                //                             normal: {
                //                                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //                                     offset: 1,
                //                                     color: '#F27300'
                //                                 }, {offset: 0, color: '#F8CE00'}], false)
                //                             }
                //                         }
                //                     },
                //                     {
                //                         name: '安卓网',
                //                         value: data[0]['2015.01']["安卓网"],
                //                         itemStyle: {
                //                             normal: {
                //                                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //                                     offset: 1,
                //                                     color: '#A00000'
                //                                 }, {offset: 0, color: '#ED0202'}], false)
                //                             }
                //                         }
                //                     },
                //                     {
                //                         name: '下载之家',
                //                         value: data[0]['2015.01']["下载之家"],
                //                         itemStyle: {
                //                             normal: {
                //                                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //                                     offset: 1,
                //                                     color: '#0079FD'
                //                                 }, {offset: 0, color: '#03B1FF'}], false)
                //                             }
                //                         }
                //                     },
                //                     {
                //                         name: '河源下载站',
                //                         value: data[0]['2015.01']["河源下载站"],
                //                         itemStyle: {
                //                             normal: {
                //                                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //                                     offset: 1,
                //                                     color: '#01BFBE'
                //                                 }, {offset: 0, color: '#00FBFD'}], false)
                //                             }
                //                         }
                //                     }
                //                 ]
                //             }
                //         ]
                //     },
                //     {
                //         title: {text: '2003全国宏观经济指标'},
                //         series: [
                //
                //             {
                //                 data: [
                //                     {
                //                         name: '应用宝', value: data[0]['2015.02']["应用宝"], itemStyle: {
                //                         normal: {
                //                             color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //                                 offset: 1, color: '#089501'
                //                             }, {
                //                                 offset: 0, color: '#7FF000'
                //                             }], false)
                //                         }
                //                     }
                //                     },
                //                     {
                //                         name: '多特',
                //                         value: data[0]['2015.02']["多特"],
                //                         itemStyle: {
                //                             normal: {
                //                                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //                                     offset: 1,
                //                                     color: '#F27300'
                //                                 }, {offset: 0, color: '#F8CE00'}], false)
                //                             }
                //                         }
                //                     },
                //                     {
                //                         name: '安卓网',
                //                         value: data[0]['2015.02']["安卓网"],
                //                         itemStyle: {
                //                             normal: {
                //                                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //                                     offset: 1,
                //                                     color: '#A00000'
                //                                 }, {offset: 0, color: '#ED0202'}], false)
                //                             }
                //                         }
                //                     },
                //                     {
                //                         name: '下载之家',
                //                         value: data[0]['2015.02']["下载之家"],
                //                         itemStyle: {
                //                             normal: {
                //                                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //                                     offset: 1,
                //                                     color: '#0079FD'
                //                                 }, {offset: 0, color: '#03B1FF'}], false)
                //                             }
                //                         }
                //                     },
                //                     {
                //                         name: '河源下载站',
                //                         value: data[0]['2015.02']["河源下载站"],
                //                         itemStyle: {
                //                             normal: {
                //                                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //                                     offset: 1,
                //                                     color: '#01BFBE'
                //                                 }, {offset: 0, color: '#00FBFD'}], false)
                //                             }
                //                         }
                //                     }
                //                 ]
                //             }
                //         ]
                //     },
                //     {
                //         title: {text: '2004全国宏观经济指标'},
                //         series: [
                //
                //             {
                //                 data: [
                //                     {
                //                         name: '应用宝', value: data[0]['2015.03']["应用宝"], itemStyle: {
                //                         normal: {
                //                             color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //                                 offset: 1, color: '#089501'
                //                             }, {
                //                                 offset: 0, color: '#7FF000'
                //                             }], false)
                //                         }
                //                     }
                //                     },
                //                     {
                //                         name: '多特',
                //                         value: data[0]['2015.03']["多特"],
                //                         itemStyle: {
                //                             normal: {
                //                                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //                                     offset: 1,
                //                                     color: '#F27300'
                //                                 }, {offset: 0, color: '#F8CE00'}], false)
                //                             }
                //                         }
                //                     },
                //                     {
                //                         name: '安卓网',
                //                         value: data[0]['2015.03']["安卓网"],
                //                         itemStyle: {
                //                             normal: {
                //                                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //                                     offset: 1,
                //                                     color: '#A00000'
                //                                 }, {offset: 0, color: '#ED0202'}], false)
                //                             }
                //                         }
                //                     },
                //                     {
                //                         name: '下载之家',
                //                         value: data[0]['2015.03']["下载之家"],
                //                         itemStyle: {
                //                             normal: {
                //                                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //                                     offset: 1,
                //                                     color: '#0079FD'
                //                                 }, {offset: 0, color: '#03B1FF'}], false)
                //                             }
                //                         }
                //                     },
                //                     {
                //                         name: '河源下载站',
                //                         value: data[0]['2015.03']["河源下载站"],
                //                         itemStyle: {
                //                             normal: {
                //                                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //                                     offset: 1,
                //                                     color: '#01BFBE'
                //                                 }, {offset: 0, color: '#00FBFD'}], false)
                //                             }
                //                         }
                //                     }
                //                 ]
                //             }
                //         ]
                //     },
                //     {
                //         title: {text: '2005全国宏观经济指标'},
                //         series:  [
                //
                //             {
                //                 data: [
                //                     {
                //                         name: '应用宝', value: data[0]['2015.04']["应用宝"], itemStyle: {
                //                         normal: {
                //                             color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //                                 offset: 1, color: '#089501'
                //                             }, {
                //                                 offset: 0, color: '#7FF000'
                //                             }], false)
                //                         }
                //                     }
                //                     },
                //                     {
                //                         name: '多特',
                //                         value: data[0]['2015.04']["多特"],
                //                         itemStyle: {
                //                             normal: {
                //                                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //                                     offset: 1,
                //                                     color: '#F27300'
                //                                 }, {offset: 0, color: '#F8CE00'}], false)
                //                             }
                //                         }
                //                     },
                //                     {
                //                         name: '安卓网',
                //                         value: data[0]['2015.04']["安卓网"],
                //                         itemStyle: {
                //                             normal: {
                //                                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //                                     offset: 1,
                //                                     color: '#A00000'
                //                                 }, {offset: 0, color: '#ED0202'}], false)
                //                             }
                //                         }
                //                     },
                //                     {
                //                         name: '下载之家',
                //                         value: data[0]['2015.04']["下载之家"],
                //                         itemStyle: {
                //                             normal: {
                //                                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //                                     offset: 1,
                //                                     color: '#0079FD'
                //                                 }, {offset: 0, color: '#03B1FF'}], false)
                //                             }
                //                         }
                //                     },
                //                     {
                //                         name: '河源下载站',
                //                         value: data[0]['2015.04']["河源下载站"],
                //                         itemStyle: {
                //                             normal: {
                //                                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //                                     offset: 1,
                //                                     color: '#01BFBE'
                //                                 }, {offset: 0, color: '#00FBFD'}], false)
                //                             }
                //                         }
                //                     }
                //                 ]
                //             }
                //         ]
                //     },
                //     {
                //         title: {text: '2006全国宏观经济指标'},
                //         series:   [
                //
                //             {
                //                 data: [
                //                     {
                //                         name: '应用宝', value: data[0]['2015.05']["应用宝"], itemStyle: {
                //                         normal: {
                //                             color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //                                 offset: 1, color: '#089501'
                //                             }, {
                //                                 offset: 0, color: '#7FF000'
                //                             }], false)
                //                         }
                //                     }
                //                     },
                //                     {
                //                         name: '多特',
                //                         value: data[0]['2015.05']["多特"],
                //                         itemStyle: {
                //                             normal: {
                //                                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //                                     offset: 1,
                //                                     color: '#F27300'
                //                                 }, {offset: 0, color: '#F8CE00'}], false)
                //                             }
                //                         }
                //                     },
                //                     {
                //                         name: '安卓网',
                //                         value: data[0]['2015.05']["安卓网"],
                //                         itemStyle: {
                //                             normal: {
                //                                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //                                     offset: 1,
                //                                     color: '#A00000'
                //                                 }, {offset: 0, color: '#ED0202'}], false)
                //                             }
                //                         }
                //                     },
                //                     {
                //                         name: '下载之家',
                //                         value: data[0]['2015.05']["下载之家"],
                //                         itemStyle: {
                //                             normal: {
                //                                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //                                     offset: 1,
                //                                     color: '#0079FD'
                //                                 }, {offset: 0, color: '#03B1FF'}], false)
                //                             }
                //                         }
                //                     },
                //                     {
                //                         name: '河源下载站',
                //                         value: data[0]['2015.05']["河源下载站"],
                //                         itemStyle: {
                //                             normal: {
                //                                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //                                     offset: 1,
                //                                     color: '#01BFBE'
                //                                 }, {offset: 0, color: '#00FBFD'}], false)
                //                             }
                //                         }
                //                     }
                //                 ]
                //             }
                //         ]
                //     },
                //     {
                //         title: {text: '2007全国宏观经济指标'},
                //         series: [
                //
                //             {
                //                 data: [
                //                     {
                //                         name: '应用宝', value: data[0]['2015.06']["应用宝"], itemStyle: {
                //                         normal: {
                //                             color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //                                 offset: 1, color: '#089501'
                //                             }, {
                //                                 offset: 0, color: '#7FF000'
                //                             }], false)
                //                         }
                //                     }
                //                     },
                //                     {
                //                         name: '多特',
                //                         value: data[0]['2015.06']["多特"],
                //                         itemStyle: {
                //                             normal: {
                //                                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //                                     offset: 1,
                //                                     color: '#F27300'
                //                                 }, {offset: 0, color: '#F8CE00'}], false)
                //                             }
                //                         }
                //                     },
                //                     {
                //                         name: '安卓网',
                //                         value: data[0]['2015.06']["安卓网"],
                //                         itemStyle: {
                //                             normal: {
                //                                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //                                     offset: 1,
                //                                     color: '#A00000'
                //                                 }, {offset: 0, color: '#ED0202'}], false)
                //                             }
                //                         }
                //                     },
                //                     {
                //                         name: '下载之家',
                //                         value: data[0]['2015.06']["下载之家"],
                //                         itemStyle: {
                //                             normal: {
                //                                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //                                     offset: 1,
                //                                     color: '#0079FD'
                //                                 }, {offset: 0, color: '#03B1FF'}], false)
                //                             }
                //                         }
                //                     },
                //                     {
                //                         name: '河源下载站',
                //                         value: data[0]['2015.06']["河源下载站"],
                //                         itemStyle: {
                //                             normal: {
                //                                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //                                     offset: 1,
                //                                     color: '#01BFBE'
                //                                 }, {offset: 0, color: '#00FBFD'}], false)
                //                             }
                //                         }
                //                     }
                //                 ]
                //             }
                //         ]
                //     },
                //     {
                //         title: {text: '2008全国宏观经济指标'},
                //         series:  [
                //
                //             {
                //                 data: [
                //                     {
                //                         name: '应用宝', value: data[0]['2015.07']["应用宝"], itemStyle: {
                //                         normal: {
                //                             color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //                                 offset: 1, color: '#089501'
                //                             }, {
                //                                 offset: 0, color: '#7FF000'
                //                             }], false)
                //                         }
                //                     }
                //                     },
                //                     {
                //                         name: '多特',
                //                         value: data[0]['2015.07']["多特"],
                //                         itemStyle: {
                //                             normal: {
                //                                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //                                     offset: 1,
                //                                     color: '#F27300'
                //                                 }, {offset: 0, color: '#F8CE00'}], false)
                //                             }
                //                         }
                //                     },
                //                     {
                //                         name: '安卓网',
                //                         value: data[0]['2015.07']["安卓网"],
                //                         itemStyle: {
                //                             normal: {
                //                                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //                                     offset: 1,
                //                                     color: '#A00000'
                //                                 }, {offset: 0, color: '#ED0202'}], false)
                //                             }
                //                         }
                //                     },
                //                     {
                //                         name: '下载之家',
                //                         value: data[0]['2015.07']["下载之家"],
                //                         itemStyle: {
                //                             normal: {
                //                                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //                                     offset: 1,
                //                                     color: '#0079FD'
                //                                 }, {offset: 0, color: '#03B1FF'}], false)
                //                             }
                //                         }
                //                     },
                //                     {
                //                         name: '河源下载站',
                //                         value: data[0]['2015.07']["河源下载站"],
                //                         itemStyle: {
                //                             normal: {
                //                                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //                                     offset: 1,
                //                                     color: '#01BFBE'
                //                                 }, {offset: 0, color: '#00FBFD'}], false)
                //                             }
                //                         }
                //                     }
                //                 ]
                //             }
                //         ]
                //     },
                //     {
                //         title: {text: '2009全国宏观经济指标'},
                //         series:  [
                //
                //             {
                //                 data: [
                //                     {
                //                         name: '应用宝', value: data[0]['2015.08']["应用宝"], itemStyle: {
                //                         normal: {
                //                             color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //                                 offset: 1, color: '#089501'
                //                             }, {
                //                                 offset: 0, color: '#7FF000'
                //                             }], false)
                //                         }
                //                     }
                //                     },
                //                     {
                //                         name: '多特',
                //                         value: data[0]['2015.08']["多特"],
                //                         itemStyle: {
                //                             normal: {
                //                                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //                                     offset: 1,
                //                                     color: '#F27300'
                //                                 }, {offset: 0, color: '#F8CE00'}], false)
                //                             }
                //                         }
                //                     },
                //                     {
                //                         name: '安卓网',
                //                         value: data[0]['2015.08']["安卓网"],
                //                         itemStyle: {
                //                             normal: {
                //                                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //                                     offset: 1,
                //                                     color: '#A00000'
                //                                 }, {offset: 0, color: '#ED0202'}], false)
                //                             }
                //                         }
                //                     },
                //                     {
                //                         name: '下载之家',
                //                         value: data[0]['2015.08']["下载之家"],
                //                         itemStyle: {
                //                             normal: {
                //                                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //                                     offset: 1,
                //                                     color: '#0079FD'
                //                                 }, {offset: 0, color: '#03B1FF'}], false)
                //                             }
                //                         }
                //                     },
                //                     {
                //                         name: '河源下载站',
                //                         value: data[0]['2015.08']["河源下载站"],
                //                         itemStyle: {
                //                             normal: {
                //                                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //                                     offset: 1,
                //                                     color: '#01BFBE'
                //                                 }, {offset: 0, color: '#00FBFD'}], false)
                //                             }
                //                         }
                //                     }
                //                 ]
                //             }
                //         ]
                //     },
                //     {
                //         title: {text: '2010全国宏观经济指标'},
                //         series:  [
                //
                //             {
                //                 data: [
                //                     {
                //                         name: '应用宝', value: data[0]['2015.09']["应用宝"], itemStyle: {
                //                         normal: {
                //                             color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //                                 offset: 1, color: '#089501'
                //                             }, {
                //                                 offset: 0, color: '#7FF000'
                //                             }], false)
                //                         }
                //                     }
                //                     },
                //                     {
                //                         name: '多特',
                //                         value: data[0]['2015.09']["多特"],
                //                         itemStyle: {
                //                             normal: {
                //                                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //                                     offset: 1,
                //                                     color: '#F27300'
                //                                 }, {offset: 0, color: '#F8CE00'}], false)
                //                             }
                //                         }
                //                     },
                //                     {
                //                         name: '安卓网',
                //                         value: data[0]['2015.09']["安卓网"],
                //                         itemStyle: {
                //                             normal: {
                //                                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //                                     offset: 1,
                //                                     color: '#A00000'
                //                                 }, {offset: 0, color: '#ED0202'}], false)
                //                             }
                //                         }
                //                     },
                //                     {
                //                         name: '下载之家',
                //                         value: data[0]['2015.09']["下载之家"],
                //                         itemStyle: {
                //                             normal: {
                //                                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //                                     offset: 1,
                //                                     color: '#0079FD'
                //                                 }, {offset: 0, color: '#03B1FF'}], false)
                //                             }
                //                         }
                //                     },
                //                     {
                //                         name: '河源下载站',
                //                         value: data[0]['2015.09']["河源下载站"],
                //                         itemStyle: {
                //                             normal: {
                //                                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //                                     offset: 1,
                //                                     color: '#01BFBE'
                //                                 }, {offset: 0, color: '#00FBFD'}], false)
                //                             }
                //                         }
                //                     }
                //                 ]
                //             }
                //         ]
                //     },
                //     {
                //         title: {text: '2011全国宏观经济指标'},
                //         series:   [
                //
                //             {
                //                 data: [
                //                     {
                //                         name: '应用宝', value: data[0]['2015.10']["应用宝"], itemStyle: {
                //                         normal: {
                //                             color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //                                 offset: 1, color: '#089501'
                //                             }, {
                //                                 offset: 0, color: '#7FF000'
                //                             }], false)
                //                         }
                //                     }
                //                     },
                //                     {
                //                         name: '多特',
                //                         value: data[0]['2015.10']["多特"],
                //                         itemStyle: {
                //                             normal: {
                //                                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //                                     offset: 1,
                //                                     color: '#F27300'
                //                                 }, {offset: 0, color: '#F8CE00'}], false)
                //                             }
                //                         }
                //                     },
                //                     {
                //                         name: '安卓网',
                //                         value: data[0]['2015.10']["安卓网"],
                //                         itemStyle: {
                //                             normal: {
                //                                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //                                     offset: 1,
                //                                     color: '#A00000'
                //                                 }, {offset: 0, color: '#ED0202'}], false)
                //                             }
                //                         }
                //                     },
                //                     {
                //                         name: '下载之家',
                //                         value: data[0]['2015.10']["下载之家"],
                //                         itemStyle: {
                //                             normal: {
                //                                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //                                     offset: 1,
                //                                     color: '#0079FD'
                //                                 }, {offset: 0, color: '#03B1FF'}], false)
                //                             }
                //                         }
                //                     },
                //                     {
                //                         name: '河源下载站',
                //                         value: data[0]['2015.10']["河源下载站"],
                //                         itemStyle: {
                //                             normal: {
                //                                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //                                     offset: 1,
                //                                     color: '#01BFBE'
                //                                 }, {offset: 0, color: '#00FBFD'}], false)
                //                             }
                //                         }
                //                     }
                //                 ]
                //             }
                //         ]
                //     },
                //     {
                //         title: {text: '2011全国宏观经济指标'},
                //         series:   [
                //
                //             {
                //                 data: [
                //                     {
                //                         name: '应用宝', value: data[0]['2015.11']["应用宝"], itemStyle: {
                //                         normal: {
                //                             color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //                                 offset: 1, color: '#089501'
                //                             }, {
                //                                 offset: 0, color: '#7FF000'
                //                             }], false)
                //                         }
                //                     }
                //                     },
                //                     {
                //                         name: '多特',
                //                         value: data[0]['2015.11']["多特"],
                //                         itemStyle: {
                //                             normal: {
                //                                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //                                     offset: 1,
                //                                     color: '#F27300'
                //                                 }, {offset: 0, color: '#F8CE00'}], false)
                //                             }
                //                         }
                //                     },
                //                     {
                //                         name: '安卓网',
                //                         value: data[0]['2015.11']["安卓网"],
                //                         itemStyle: {
                //                             normal: {
                //                                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //                                     offset: 1,
                //                                     color: '#A00000'
                //                                 }, {offset: 0, color: '#ED0202'}], false)
                //                             }
                //                         }
                //                     },
                //                     {
                //                         name: '下载之家',
                //                         value: data[0]['2015.11']["下载之家"],
                //                         itemStyle: {
                //                             normal: {
                //                                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //                                     offset: 1,
                //                                     color: '#0079FD'
                //                                 }, {offset: 0, color: '#03B1FF'}], false)
                //                             }
                //                         }
                //                     },
                //                     {
                //                         name: '河源下载站',
                //                         value: data[0]['2015.11']["河源下载站"],
                //                         itemStyle: {
                //                             normal: {
                //                                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //                                     offset: 1,
                //                                     color: '#01BFBE'
                //                                 }, {offset: 0, color: '#00FBFD'}], false)
                //                             }
                //                         }
                //                     }
                //                 ]
                //             }
                //         ]
                //     },
                //     {
                //         title: {text: '2011全国宏观经济指标'},
                //         series:   [
                //
                //             {
                //                 data: [
                //                     {
                //                         name: '应用宝', value: data[0]['2015.12']["应用宝"], itemStyle: {
                //                         normal: {
                //                             color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //                                 offset: 1, color: '#089501'
                //                             }, {
                //                                 offset: 0, color: '#7FF000'
                //                             }], false)
                //                         }
                //                     }
                //                     },
                //                     {
                //                         name: '多特',
                //                         value: data[0]['2015.12']["多特"],
                //                         itemStyle: {
                //                             normal: {
                //                                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //                                     offset: 1,
                //                                     color: '#F27300'
                //                                 }, {offset: 0, color: '#F8CE00'}], false)
                //                             }
                //                         }
                //                     },
                //                     {
                //                         name: '安卓网',
                //                         value: data[0]['2015.12']["安卓网"],
                //                         itemStyle: {
                //                             normal: {
                //                                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //                                     offset: 1,
                //                                     color: '#A00000'
                //                                 }, {offset: 0, color: '#ED0202'}], false)
                //                             }
                //                         }
                //                     },
                //                     {
                //                         name: '下载之家',
                //                         value: data[0]['2015.12']["下载之家"],
                //                         itemStyle: {
                //                             normal: {
                //                                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //                                     offset: 1,
                //                                     color: '#0079FD'
                //                                 }, {offset: 0, color: '#03B1FF'}], false)
                //                             }
                //                         }
                //                     },
                //                     {
                //                         name: '河源下载站',
                //                         value: data[0]['2015.12']["河源下载站"],
                //                         itemStyle: {
                //                             normal: {
                //                                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //                                     offset: 1,
                //                                     color: '#01BFBE'
                //                                 }, {offset: 0, color: '#00FBFD'}], false)
                //                             }
                //                         }
                //                     }
                //                 ]
                //             }
                //         ]
                //     }
                // ]

            }
        },
        "下载量图": function (data) {

         function wan(_tem) {
             var _temArr=[];
             for(var i in _tem){
                 _temArr.push(_tem[i]/10000000)
             }

             return _temArr;
         }
            return {
                tooltip: {
                    trigger: 'axis'
                },
                toolbox: {
                    show:false
                },
                legend: {
                    data: ['蒸发量', '降水量', '平均温度'],
                    textStyle:{
                        color:"#fff"
                    }
                },
                xAxis: [
                    {
                        nameTextStyle:{
                            color:"#fff"
                        },
                        axisLine:{
                            lineStyle:{
                                color:"#fff"
                            }
                        },
                        type: 'category',
                        data: data[0].month,
                        axisLabel: {
                            textStyle: {
                                color: "#fff"
                            }
                        },
                        splitLine:{
                            show:true,
                            lineStyle:{
                                type:"dashed"
                            }
                        }
                    }
                ],
                yAxis: [
                    {
                        nameTextStyle:{
                            color:"#fff"
                        },
                        axisLine:{
                            lineStyle:{
                                color:"#fff"
                            }
                        },
                        type: 'value',
                        name: '下载量',
                        min: 0,
                        max: 1000000,
                        interval: 100000,
                        axisLabel: {
                            formatter: '{value}/千万次',
                            textStyle: {
                                color: '#fff'
                            }
                        },
                        splitLine:{
                            show:true,
                            lineStyle:{
                                type:"dashed"
                            }
                        }
                    },
                    {
                        nameTextStyle:{
                            color:"#fff"
                        },
                        axisLine:{
                            lineStyle:{
                                color:"#fff"
                            }
                        },
                        type: 'value',
                        name: '增长率',
                        min: 0,
                        max: 100,
                        interval:10,
                        axisLabel: {
                            formatter: '{value}%',
                            textStyle: {
                                color: '#fff'
                            }
                        },
                        splitLine:{
                            show:true,
                            lineStyle:{
                                type:"dashed"
                            }
                        }
                    }
                ],
                series: [
                    {
                        name: '当月下载量',
                        type: 'bar',
                        data: wan(data[0].dl_num),
                        itemStyle:{
                            normal:{
                                color:"#01FFFE"
                            }
                        }

                    },
                    {
                        name: '总下载量',
                        type: 'bar',
                        data:wan(data[0].sum),
                        itemStyle:{
                            normal:{
                                color:"#0096FF"
                            }
                        }
                    },
                    {
                        name: '下载量增速',
                        type: 'line',
                        yAxisIndex: 1,
                        data:data[0].increase,
                        itemStyle:{
                            normal:{
                                color:"#F1EA02"
                            }
                        }
                    }
                ]
            }
        },
        "下载量分布":function (data) {
            // console.log(WsW);
            var _tem=[];
            for(var i=0,j=data[0].Channels.length;i<j;i++){
                // console.log(WsW[i].stack);
                _tem.push({
                    name:  data[0].Channels[i],
                    type: 'bar',
                    stack:WsW[i].stack,
                    data: data[0].ChannelsData[data[0].Channels[i]],
                    itemStyle:{

                        normal:{
                            color:WsW[i].color,
                            barBorderRadius:3
                        }
                    }
                })
            }

            //  ole.log(_tem);


            return {

                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                legend: {
                    data: data[0].Channels,
                    textStyle: {
                        color: "#fff"
                    },
                    left:60
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        data: data[0].month,
                        axisLabel: {
                            textStyle: {
                                color: '#fff'
                            }
                        },
                        splitLine:{
                            show:true,
                            lineStyle:{
                                type:"dashed"
                            }
                        }
                    }
                ],
                yAxis: [
                    {
                        nameTextStyle:{
                            color:"#fff"
                        },
                        axisLine:{
                            lineStyle:{
                                color:"#fff"
                            }
                        },
                        type: 'value',
                        axisLabel: {
                            textStyle: {
                                color: '#fff'
                            }
                        },
                        splitLine:{
                            show:true,
                            lineStyle:{
                                type:"dashed"
                            }
                        }
                    }
                ],
                series:_tem
            }
        } ,
        "预警详情": function (data) {
            var data=data[0];
            // console.log(data);
            return {
                title: {
                    text:data.name,
                    subtext: '',
                    textStyle: {
                        color: '#fff',
                    },
                    left:80
                },
                legend: {
                    show: false,
                    data: ["下载量增长", "盗版数量"]

                },
                toolbox: {
                    show: false
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: data.time,
                    axisLabel: {
                        textStyle: {
                            color: "#fff"
                        }
                    }
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {
                        textStyle: {
                            color: "#fff"
                        }
                    }
                },
                series: [{
                    name: "下载量增长",
                    type: 'line',
                    smooth: true,
                    textStyle: {
                        color: "#FE3C6E"
                    },
                    lineStyle: {
                        normal: {
                            color: "rgba(254,60,110,1)"
                        }
                    },

                    data: data.down

                }, {
                    name: '盗版数量',
                    type: 'line',
                    smooth: true,
                    textStyle: {
                        color: "#02FFFF"
                    },
                    lineStyle: {
                        normal: {
                            color: "rgba(2,255,255,0.3)"
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: "rgba(2,255,255,0.3)"
                        }
                    },
                    data: data.pri
                }],
                tooltip: {
                    show: true,
                    trigger: 'axis'
                }
            }
        }
    },
   __ProvinceTocity:{
       "山东省": "济南",
       "江苏省": "南京",
       "山西省": "太原",
       "云南省": "昆明",
       "陕西省": "西安",
       "上海市": "上海",
       "广西壮族自治区":"南宁" ,
       "重庆市": "重庆",
       "安徽省": "合肥",
       "黑龙江省": "哈尔滨",
       "江西省": "南昌",
       "浙江省": "杭州",
       "西藏自治区": "拉萨",
       "天津市": "天津",
       "香港特别行政区":"香港" ,
       "青海省": "西宁",
       "湖北省": "武汉",
       "甘肃省": "兰州",
       "四川省": "成都",
       "辽宁省": "沈阳",
       "湖南省": "长沙",
       "吉林省": "长春",
       "贵州省": "贵阳",
       "广东省": "广州",
       "新疆维吾尔自治区": "乌鲁木齐",
       "福建省": "福州",
       "河南省": "郑州",
       "海南省": "海口",
       "河北省": "石家庄",
       "北京市": "北京",
       "内蒙古自治区":"呼和浩特"
   },
    __ClickdataConvice:{
       'xd':{title:"新增下载量",who:"day",number:"current_num",add:"",zs:"current_growth"},
       'xm':{title:"新增下载量",who:"month",number:"current_num",add:"",zs:"current_growth"},
       'xy':{title:"新增下载量",who:"year",number:"current_num",add:"",zs:"current_growth"},
        'zd':{title:"下载量增速",who:"day",number:"current_growth",add:"%",zs:"grow_growth"},
        'zm':{title:"下载量增速",who:"month",number:"current_growth",add:"%",zs:"grow_growth"},
        'zy':{title:"下载量增速",who:"year",number:"current_growth",add:"%",zs:"grow_growth"},
        'qd':{title:"渠道收录数量",who:"day",number:"currnet_num",zs:"grow_num"},
        'qm':{title:"渠道收录数量",who:"month",number:"currnet_num",zs:"grow_num"},
        'qy':{title:"渠道收录数量",who:"year",number:"currnet_num",zs:"grow_num"},
    },
    __AfterRouter:{
        "YJ":function () {
            // console.log("我居然执行了?!");
            let scroll_area = document.getElementById('scroll_area');
            scrollbar(scroll_area);
        }
    }
}


module.exports = CONFIG;