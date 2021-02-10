var apiurl = "https://restcountries.eu/rest/v2/all";
$.ajax({
    url : apiurl,
    method : "GET",
    success : function(v){
        console.log(v);
        var Obj = v;
        var html_temp = "";
        Obj.map(function(e){
            html_temp+=`<tr>
            <td>`+e.name+`</td>
            <td>`+e.topLevelDomain+`</td>
            <td>`+e.alpha2Code+`</td>
            <td>`+e.alpha3Code+`</td>
            <td>`+e.capital+`</td>
            <td>`+e.region+`</td>
            <td>`+e.subregion+`</td>
            <td>`+e.population+`</td>
            <td>`+e.demonym+`</td>
            <td>`+e.area+`</td>
        </tr>`;
        });
        $(".mydata").html(html_temp);
    }
});
