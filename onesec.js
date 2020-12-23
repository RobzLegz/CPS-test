var onetime = 1;
var oneclicks =0;
var onealert;
function clickAdderOne(){
    oneclicks +=1;
    const fullclicks = document.getElementById("one-sec-clicks");
    fullclicks.innerHTML = oneclicks;
}


function cpsTestOne(){
    var downloadTimer = setInterval(function(){
        if(onetime == 0)
        {
            if(oneclicks <= 4){
                onealert = "Need some more practise";
            }
            if(oneclicks == 5){
                onealert = "Average";
            }
            if(oneclicks >= 6 ){
                onealert = "Impressive";
            }
            if(clicks >= 20){
                onealert = "Haaax";
            }
           clearInterval(downloadTimer);         
           location.reload();
           alert("Your cps" + ":" + oneclicks +"..." + onealert);
           return false;           
        } 
        onetime -= 1;
    }, 700);
}