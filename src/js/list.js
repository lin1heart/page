$(function(){
//var da = getList('2','1','2');
//if(da!="error"){
//    show();
//}else{
//    alert(da);
//}
	var da = [];
    height_i = image_val(da);
    show();
});
var height_i;
var app =  new Vue({
    el: '#app'
});

var img_url = ["../img/1.jpg","../img/3_4.png","../img/6.jpg","../img/7.jpg"];
function show() {
    var check = document.getElementById('dbox');
    if(check){
        check.parentNode.removeChild(check);
    }else{
        var dir = document.getElementById('conntion');
        var dbox = document.createElement('div');//第一行的div
        dbox.className = "box";
        dbox.id = "dbox";
        for(var x = 0;x<4; x++){
            var dr = document.createElement('div');
            dr.className = "img_div";
            dr.style.height = height_i+'px';
            dr.id = "dr" + x;
            var img = document.createElement('img');
            img.src = img_url[x];
            dr.appendChild(img);
            dbox.appendChild(dr);
        }
        dir.append(dbox);
    }
}
var img_pro = [];
var i = 0;
//图片校验
function image_val(da) {
		var url = "http://ws.changxing.sh.cn:10180/ws/file/download/5a17ebc09536030bd409193c";
		for(var j = 0; j<da.length ; j++){
            var image = new Image();  
            image.src = da[j].url;
            image.onload = function() {
                img_pro[i] = image.width/image.height;
                i++;
            }
        }
        img_pro = [1366/768,162/270,1366/768,1366/768];
        var wid = 0;
        var body_width =  document.body.clientWidth - 40;
        for(var a = 0; a< img_pro.length; a++){
            wid += img_pro[a];
        }
        var heig = body_width/wid;
        return heig; 
}
// 页面改变 重新绘制
window.onresize = function(){
    var da = [];
    height_i = image_val(da);
    show();
}