setInterval(function() {
    console.log("我是大帅比");
}, 1000);
var exiting = false;
process.on('SIGINT', function() {
    // console.log("我按下了ctrl+c");
    if (exiting) {
        console.log("退出");
        process.exit();
    } else {
        console.log("第一次按下");
        exiting = true;
        setTimeout(function() {
            exiting = false;
        }, 1000);
    }
})