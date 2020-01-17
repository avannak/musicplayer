window.onload = function() {
    
}

var rain = false;
var lightning1 = false;
var lightning2 = false;
var totw = false;
console.log("rain is " + rain);
var paused = true;
var bgimg1 = false;
var stroke = true;
var defeated = false;
var escape = false;
var desperate = false;
var commonsense = false;

audioPlayer();
function audioPlayer() {

    var currentSong = 0;
    

    $("#audioPlayer")[0].src = $("#playlist li a")[0];

    $("#playlist li a").click(function (e) {

        e.preventDefault();

        $("#audioPlayer")[0].src = this;
        $("#audioPlayer")[0].play();
        $("#video")
        $("#playlist li").removeClass("current-song");

        currentSong = $(this).parent().index();
        $(this).parent().addClass("current-song");
        console.log(currentSong);
        var player = document.getElementById("audioPlayer");
        if(currentSong == 0 && stroke == true){
            
            if(rain == true){
                $(".rain").fadeToggle(2500);
                rain = false;
            }
            if(lightning1 == true){
                $(".lightning1").fadeToggle(2500);
                lightning1 = false;
            }
            if(lightning2 == true){
                $(".lightning2").fadeToggle(2500);
                lightning2 = false;
            }
            $(".stroke").fadeToggle(2500);
            stroke = true;
            console.log("stroke background is " + stroke);
            
        }
        
        
        if(currentSong == 1 && totw == false){
            if(rain == false && lightning1 == false){
                $(".rain").fadeToggle(2500);
                rain = true;
                $(".lightning1").fadeToggle(2500);
                lightning1 = true;
            }
            $(".totw").fadeToggle(2500);

            totw = true;
            console.log("totw background is " + true);
            
        }
        if(currentSong !== 1 && totw == true){
            $(".totw").fadeToggle(2500);
            totw = false;
            $(".lightning1").fadeToggle(2500);
            lightning1 = false;
                
        } 
        if(currentSong == 2 && escape == false){
            
            if(rain == true){
                $(".rain").fadeToggle(2500);
                rain = false;
            }
            if(lightning1 == true){
                $(".lightning1").fadeToggle(2500);
                lightning1 = false;
            }
            if(lightning2 == true){
                $(".lightning2").fadeToggle(2500);
                lightning2 = false;
            }
            $(".escape").fadeToggle(2500);
            escape = true;
            console.log("escape background is " + escape);
            
        }
        if(currentSong !== 2 && escape == true){
            
            $(".escape").fadeToggle(2500);
            escape = false;
            console.log("escape background is " + escape);
            
        }
        if(currentSong == 3 && desperate == false){
            if(rain == true){
                $(".rain").fadeToggle(2500);
                rain = false;
            }
            if(lightning1 == true){
                $(".lightning1").fadeToggle(2500);
                lightning1 = false;
            }
            if(lightning2 == true){
                $(".lightning2").fadeToggle(2500);
                lightning2 = false;
            }
            
            $(".desperate").fadeToggle(2500);
            desperate = true;
            console.log("desperate background is " + desperate);
        }
        if(currentSong !== 3 && desperate == true){

            $(".desperate").fadeToggle(2500);
            desperate = false;
            console.log("desperate background is " + desperate);
        }
        
        if(currentSong == 4 && defeated == false){
            if(rain == false){
                $(".rain").fadeToggle(2500);
                rain = true;
                
            }
            $(".defeated").fadeToggle(2500);
            defeated = true;
                console.log("defeated background is " + defeated);
                $(".cloud").fadeToggle(2500);
                $(".lightning2").fadeToggle(2500);
                lightning2 = true;
            
        }
        if(currentSong !== 4 && defeated == true){
            if(rain == true && totw == true){
                rain = true;
                
            }
            if(rain == false && totw == false){
                rain = false;
                $(".defeated").fadeToggle(2500);
               
                defeated = false;
            console.log("defeated background is " + defeated);
            $(".cloud").fadeToggle(2500);
            }
        }
       
        if(currentSong == 5 && commonsense == false){
            if(lightning1 == true){
                $(".lightning1").fadeToggle(2500);
                lightning1 = false;
            }
            if(lightning2 == true){
                $(".lightning2").fadeToggle(2500);
                lightning2 = false;
            }
            if(rain == true){
                $(".rain").fadeToggle(2500);
                rain = false;
            }
        
            $(".commonsense").fadeToggle(2500);
            commonsense = true;
            console.log("common sense background is " + commonsense);
        }
        if(currentSong !== 5 && commonsense == true){
            $(".commonsense").fadeToggle(2500);
            
            
            commonsense = false;
            console.log("common sense background is " + commonsense);
        }
        
        player.onplay = function () {
            console.log("playing");
            paused = false;
            console.log("paused is " + paused);
            if (currentSong == 1 && rain ==false) {
                $(".rain").fadeToggle(2500);
                
                rain = true;
            }
            
            console.log("rain is " +rain);
        };

        player.onpause = function () {
            console.log("paused");
            paused = true;
            console.log("paused is " + paused);
            if (currentSong == 1) {
                $(".rain").fadeToggle(2500);
                
                rain = false;
            }
           
            console.log("rain is " + rain);
        };
        



    });
}


