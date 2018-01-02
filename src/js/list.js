$(function(){
//var da = getList('2','1','2');
//if(da!="error"){
//    show();
//}else{
//    alert(da);
//}
	var da = [{"name":"aaa","id":"1","url":""},]
	image_val(da);
});
var wid = '300px';
var hei = '400px';
var app =  new Vue({
    el: '#app'
});
function show() {
    var dir = document.getElementById('conntion');
    var dbox = document.createElement('div');//第一行的div
    var dr = document.createElement('div');

    dd.className = "box";

}
var img_width = [];
var img_height = [];
var i = 0;
//图片校验
function image_val(da) {
		var url = "http://ws.changxing.sh.cn:10180/ws/file/download/5a17ebc09536030bd409193c";
		for(var j = 0; j<da.length ; j++){
			
		}
    var image = new Image();  
    image.src = url;
    image.onload = function() {
    	img_width[i] = image.width;
    	img_height[i] = image.height;
    	i++;
    }
}
