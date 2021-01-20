var feeds = [];

function addFeedback()
{
    var textfeed = document.getElementById("feedback").value;
    if(textfeed==""){
        return false;
    }
    /*document.getElementById("result").style="border:solid 5px; width:17%;"*/
    var message = "<h2>Feedback Details</h2><p><b>Successfully Added Feedback Details!<b></p>";
    feeds.push(textfeed);
    document.getElementById("result").innerHTML=message;
    document.getElementById("feedback").value="";
}

function displayFeedback()
{
    var i;
    var message = "<h2>Feedback Details</h2>";
    var res = "";
    /*document.getElementById("result").style="border:solid 5px;width:22%;"*/
    
    for(i=0;i<feeds.length;i++)
        {
            res += "Feedback "+(i+1)+"<br>"+feeds[i]+"<br>";
        }
     document.getElementById("result").innerHTML=message+res;
     feeds = [];
}