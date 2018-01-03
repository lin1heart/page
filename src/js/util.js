function getList(a,b,c){
    var da;
    $.ajax({
        url: SERVER_URL+"image/getList",
        data:{ pageSize: a, pageIndex: b, type: c},
        success: function(data){
            if(data.code===200){
                da = data.data;
            }else{
                da = data.msg;
            }
            
        },
        error: function(request,status,error){
            da = status;
           console.log(request.readyState,status,error);
        },
        async:false,
        timeout: 3000
    });
    return da;
}
var SERVER_URL = "http://192.168.0.106:8080/";
var IMAGE_URL = "http://192.168.0.105:80/image/";
window.IMAGE_URL = IMAGE_URL;