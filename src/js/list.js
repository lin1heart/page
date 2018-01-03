$(function(){
    var da = getList(10,0);
    if(da!="error"){
        image_val(da);
    }else{
        listContent.$Notice.error("请求失败!!!");
    }
});
var app =  new Vue({
    el: '#app',
    methods: {
    	menuSelect: function(val){
            listContent.$data.value1 = val-1;
            if(val =="2"){
                var data = getList(10,0);

            }
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
var img_url = [];
// var img_url = ["../img/1.jpg","../img/3_4.png","../img/6.jpg","../img/7.jpg","../img/3_4.png","../img/1.jpg","../img/6.jpg","../img/7.jpg","../img/6.jpg","../img/1.jpg"];
function show() {
    var check = document.getElementById('dbox');
    if(check){
        check.parentNode.removeChild(check);
    }else{
        var firstHeight = render(1);
        var dir = document.getElementById('tabFirst');
        var dbox = document.createElement('div');//第一行的div
        dbox.className = "box";
        dbox.id = "dbox";
        for(var x = 1;x<8; x++){
            if(x==5){
                flag = 2;
                firstHeight = render(2);                
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
    }
}
var img_pro = [];
// var img_pro = [1366/768,162/270,1366/768,1366/768,162/270,1366/768,1366/768,1366/768,1366/768,1366/768,1366/768];
var i = 0;
//图片校验
function image_val(da) {
		for(var j = 0; j<da.length ; j++){
            var image = new Image();  
            img_url[j] = window.IMAGE_URL + da[j].headImage;
            image.src = window.IMAGE_URL + da[j].headImage;
            img_pro[j] = image.width/image.height;
            console.log(image.width,image.height);
        }
        show();
        
              
}
function render(flag){
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

var nub;

window.onload = function(){
    document.onmouseover = function(e){
        var target = e.target|| e.srcElement;
        var p = /[0-9]/;
        var b = p.test(target.id);
        if(b){
        	nub = target.id.replace(/[^0-9]/ig,"");
        }
        if("img"+nub ==target.id){
            console.log(13);
        }

    }
}