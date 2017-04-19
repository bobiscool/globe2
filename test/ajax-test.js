/**
 * Created by mac WuYiPing on 17/1/11.
 */
var ajax = require('../static/js/ajax.js');
var d = "client_id=0008&time_stamp=" + parseInt((new Date().getTime()) / 1000) + "&key=waring_app_download&sign=hehe" + "&name=iscc";
console.log(d)
// console.log(d);
ajax({
    url:"http://172.16.11.224:8080/data?",
    data: { client_id: '0008', time_stamp: parseInt((new Date().getTime()) / 1000),key:"pri_downloads_growth",sign:"hehe",name:"iscc" },
    method: 'GET',
    success:function (resp) {
        // Data = resp;
        console.log(resp.responseText);
        // display("XX");
    },
    error:function (err) {
        console.log(err)
    }
})