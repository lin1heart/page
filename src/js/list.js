$(function(){
  var da = getList('2','1','2');
  if(da!="error"){
      show();
  }else{
      alert(da);
  }
});
var wid = '300px';
var hei = '400px';
var app =  new Vue({
    el: '#app',
    methods: {
    }
});
function show() {
    var dir = document.getElementById('conntion');
    var dbox = document.createElement('div');//第一行的div
    var dr = document.createElement('div');

    dd.className = "box";

}