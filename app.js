var timeleft = 10;
var clicks =0;
var message;
function clickAdder(){
    clicks +=1;
    const allClicks = document.getElementById("clicks");
    allClicks.innerHTML = clicks;   
}
function cpsTest(){
    var downloadTimer = setInterval(function(){
        if(timeleft <= 0)
        {
            if(clicks <= 45){
                message = "Need some more practise";
            }
            if(clicks >= 46 && clicks <= 55){
                message = "Average";
            }
            if(clicks >=56 && clicks <= 120){
                message = "Impressive";
            }
            if(clicks >= 121){
                message = "Haaax";
            }
           clearInterval(downloadTimer);         
           location.reload();
           alert("Your average cps" + ":" + clicks/10 +"..." + message);
           return false;           
        } 
        else 
        {
          document.getElementById("timer").innerHTML = timeleft ;
        }
        timeleft -= 1;
    }, 1000);
    
}


