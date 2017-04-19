/**
 * Created by mac on 16/12/12.
 */
function filter_list(l) {
    // Return a new array with the strings filtered out
    var __Array=[];
    for(var i=0,j=l.length;i<j;i++){
        if(typeof l[i]=="number"){
            __Array.push(l[i])
        }
    }

    return __Array;
}

filter_list()