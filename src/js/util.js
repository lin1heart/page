function getList(a,b,c){
    var da;
    $.ajax({
        url:"http://192.168.0.106:8080/image/getList",
        data:{ pageSize: a, pageIndex: b, type: c},
        success: function(data){
            da = data;
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