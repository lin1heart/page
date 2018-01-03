$(function(){
//var da = getList('2','1','2');
//if(da!="error"){
//    show();
//}else{
//    alert(da);
//}
    show();
});
var app =  new Vue({
    el: '#app',
    methods: {
    	menuSelect: function(val){
    		listContent.$data.value1 = val-1;
    	}
    }
});
var listContent = new Vue({
	el: '#listContent',
	data: {
    	value1:0
    }
})
var aff = new Vue({
    el: '#affix'
})

var img_url = ["../img/1.jpg","../img/3_4.png","../img/6.jpg","../img/7.jpg","../img/3_4.png","../img/1.jpg","../img/6.jpg","../img/7.jpg","../img/6.jpg","../img/1.jpg"];
function show() {
    var check = document.getElementById('dbox');
    if(check){
        check.parentNode.removeChild(check);
    }else{
        var da = [];
        var firstHeight = image_val(da,1);
        var dir = document.getElementById('tab1');
        var dbox = document.createElement('div');//第一行的div
        dbox.className = "box";
        dbox.id = "dbox";
        for(var x = 1;x<8; x++){
            if(x==5){
                firstHeight = image_val(da,2);
            }
            var dr = document.createElement('div');
            dr.className = "img_div";
            dr.style.height = firstHeight+'px';
            var img = document.createElement('img');
            img.src = img_url[x-1];
            img.id = "img" + x;
            dr.appendChild(img);
            dbox.appendChild(dr);
        }
        dir.append(dbox);
        // var da = [];
        // var doubleHeight = image_val(da,2);
        // var dbox2 = document.createElement('div');//第一行的div
        // dbox2.className = "box";
        // dbox2.id = "dbox2";
        // for(var x = 5;x<8; x++){
        //     var dr = document.createElement('div');
        //     dr.className = "img_div";
        //     dr.style.height = doubleHeight+'px';
        //     var img = document.createElement('img');
        //     img.src = img_url[x];
        //     img.id = "img" + x;
        //     dr.appendChild(img);
        //     dbox2.appendChild(dr);
        // }
        // dir.append(dbox2);
    }
}
var img_pro = [1366/768,162/270,1366/768,1366/768,162/270,1366/768,1366/768,1366/768,1366/768,1366/768,1366/768];
var i = 0;
//图片校验
function image_val(da,flag) {
		var url = "http://ws.changxing.sh.cn:10180/ws/file/download/5a17ebc09536030bd409193c";
		for(var j = 0; j<da.length ; j++){
            var image = new Image();  
            image.src = da[j].url;
            image.onload = function() {
                img_pro[i] = image.width/image.height;
                i++;
            }
        }
        
        var wid = 0;
        if(flag ==1){
            var body_width =  document.body.clientWidth - 85;
            for(var a = 0; a< 4; a++){
                wid += img_pro[a];
            }
            var heig = body_width/wid;
            return heig; 
        }else if(flag ==2){
            var body_width =  document.body.clientWidth - 80;
            for(var a = 4; a< 7; a++){
                wid += img_pro[a];
            }
            var heig = body_width/wid;
            return heig; 
        }       
}

// 页面改变 重新绘制
window.onresize = function(){
    var da = [];
    height_i = image_val(da);
    show();
}

// window.onload = function(){
//     var oUl = document.getElementById("ul1");
//     var aLi = oUl.getElementsByTagName('li');
//     for(var i=0;i<aLi.length;i++){
//         aLi[i].onclick = function(){
//             alert(123);
//         }
//     }
// }
var nub;
$(document).click(function (e) { 
    var v_id = $(e.target).attr('id');
//  nub = v_id.replace(/[^0-9]/ig,"");
});
