/**
 * Created by mac on 16/12/3.
 */

var DomControl = {

    $: function $(str) {
        var Ele = false;
        if (str.charAt(0) == ".") {
            var temstr = str.replace(/^\./, '');
            if (document.getElementsByClassName) {//兼容ie8
                Ele = document.getElementsByClassName(temstr);
            } else {
                Ele = [];
                var Arr1 = this.makeItArray(document.getElementsByTagName("*"));
                for (var i = 0, j = Arr1.length; i < j; i++) {
                    if (this.hasClass(Arr1[i], temstr).a) {
                        Ele.push(Arr1[i]);
                        // console.log(Arr1[i]);
                    }
                }
            }


        } else if (str.charAt(0) == "#") {
            Ele = document.getElementById(str.replace(/^\#/, ''));
        } else {
            Ele = document.getElementsByTagName(str);
        }
        return Ele;
    },

    hasClass: function hasClass(obj, clas) {
        var temB = {a: false, b: false};
        if (obj.className) {
            var Arr = obj.className.split(' ');
        } else {
            return temB;
        }

        //console.log(Arr);
        for (var i in Arr) {
            if (Arr[i] == clas) {
                temB.a = true;
                temB.b = i;
            }
        }
        return temB;
    },

    makeItArray: function makeItArray(obj) {
        var temArray = [];
        var l = obj.length;
        for (var i = 0; i < l; i++) {
            temArray.push(obj[i]);
        }

        return temArray;
    },
    toggleClass: function toggleClass(obj, clas) {
        var temB={};
        if(typeof clas=="string"){
             temB = this.hasClass(obj, clas);
            var Arr = obj.className.split(' ');
            if (temB.a) {
                Arr.splice(temB.b, 1);
            } else {
                Arr.push(clas);
            }

            obj.className = Arr.join(' ');
        }else {
             temB = this.hasClass(obj, clas[0]);
            var Arr = obj.className.split(' ');
            if (temB.a) {
                Arr.splice(temB.b, 1);
                Arr.push(clas[1]);
            } else {
                temB = this.hasClass(obj, clas[1]);
                Arr.splice(temB.b, 1);
                Arr.push(clas[0]);
            }

            obj.className = Arr.join(' ');
        }


    },
    addClass:function (obj,clas) {
        var temB = this.hasClass(obj, clas);
        var Arr = obj.className.split(' ');
        if (temB.a) {
            return false;
        } else {
            Arr.push(clas);
            obj.className = Arr.join(' ');
        }
    },
    removeClass:function (obj,clas) {//删除class
        var temB = this.hasClass(obj,clas);
        var Arr = obj.className.split(' ');
        if (temB.a) {
            Arr.splice(temB.b, 1);
        }
        obj.className = Arr.join(' ');
    },
    parents:function(obj,selector){
        /*  这里 是找寻 具有 selector 的父级
         * selector
         * 分为  id
         *      class
         *      标签
         * */
        var _obj = obj;
        console.log(DomControl.hasClass(_obj,selector.slice(1)));

        console.log(selector.charAt(0) === ".");
        if( selector.charAt(0) === "#" ){// id 找父集
            while(obj.id !== selector.slice(1)){  //如果obj的id 不等于selector的ID
                _obj = _obj.parentNode;
            }
        }else if( selector.charAt(0) === "." ){//如果obj的class不等于selector的Class
            while((_obj && _obj.nodeType !== 9) && !DomControl.hasClass(_obj,selector.slice(1)).a){ // 如果obj 存在 并且 obj 不是 document
                _obj = _obj.parentNode;
                console.log(obj);
            }
        }else{
            while(_obj && _obj.nodeType !== 9 && _obj.nodeName.toLowerCase() !== selector){
                _obj = _obj.parentNode;
            }
        }


        // 找到obj  返回obj  没有找到 就返回 null
        return _obj && _obj.nodeType === 9  ? null : _obj;
    }
}


module.exports = DomControl;