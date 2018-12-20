

function GetGlobalConfig(){
	return globalConfig;
}

//当前软件版本
function GetVersion(){
	var version=13;
	return version;
}
//当前软件版本显示
function GetVersionText(){
	var version="1.1.3";
	return version;
}

//时间 yyyy-MM-dd HH:mm:ss
function GetNowDate() {
    return new Date().format("yyyy-MM-dd hh:mm:ss");
}

Date.prototype.format = function (format) {
    var args = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),  //quarter
        "S": this.getMilliseconds()
    };
    if (/(y+)/.test(format))
        format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var i in args) {
        var n = args[i];
        if (new RegExp("(" + i + ")").test(format))
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? n : ("00" + n).substr(("" + n).length));
    }
    return format;
};