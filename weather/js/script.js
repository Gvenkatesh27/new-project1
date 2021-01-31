var APIKEY = "21a38fda47d730f0ab80f5f43611f3e5";
var cityName = "";

$(".wform").submit(function(e){
    e.preventDefault();
    cityName = $("#demo").val();
    var wapi = "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid="+APIKEY;
    $.ajax({
        url:wapi,
        method:"GET",
        success:function(v){
            var deg_data = v.main;
            var temp_val = deg_data.temp;
            temp_val=parseInt(temp_val);
            temp_val=temp_val - 273.15;
            temp_val=Math.round(temp_val);
            $(".temp").html("<h2>temp in "+cityName+" is "+temp_val);
        }
    });
});