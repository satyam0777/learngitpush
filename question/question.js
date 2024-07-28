function download(cb){
    console.log("download start");
    setTimeout(function){
        console.log("download end");
        cb();

    },2000);
}