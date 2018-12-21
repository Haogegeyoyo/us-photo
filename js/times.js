// $(document).ready(function(){
//     run(enddate);
// });
//定时器
function run(enddate){
    //如果enddate为后台传入的Date类型，这里直接转化为毫秒数
    enddate=new Date(enddate.value.replace("T"," ").getTime());
    //以500毫秒的速度执行（可以避免方法执行速度慢会影响展示效果的情况）0
    var time = 500; 
    setInterval("dateDif('"+enddate+"')",time);
}
//计算时间相差
function dateDif(enddate){
    var date = enddate - new Date().getTime(); 
    var days    = date / 1000 / 60 / 60 / 24;
    var daysRound   = Math.floor(days);
    var hours    = date/ 1000 / 60 / 60 - (24 * daysRound);
    var hoursRound   = Math.floor(hours);
    var minutes   = date / 1000 /60 - (24 * 60 * daysRound) - (60 * hoursRound);
    var minutesRound  = Math.floor(minutes);
    var seconds   = date/ 1000 - (24 * 60 * 60 * daysRound) - (60 * 60 * hoursRound) - (60 * minutesRound);
    var secondsRound  = Math.floor(seconds);
    var time = "倒计时"+(daysRound+"天"+hoursRound +"时"+minutesRound+"分"+secondsRound+"秒");
    $("#ytime").text(time);
    }