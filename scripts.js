// Write your JavaScript code here.
// Remember to pay attention to page loading!
// window.addEventListener("load", function () {
//     this.console.log("window loaded");
// })

let buttonTakeoff = null;
let flightStatus = null;
let shuttleHight = null;
let buttonLand = null;
let buttonAbortMission = null;
let buttonUp = null;
let buttonDown = null;
let buttonRight = null;
let buttonLeft = null;
let rocket = null;

function init () {
    buttonTakeoff = document.getElementById("takeoff");
    flightStatus = document.getElementById("flightStatus");
    shuttleHight = document.getElementById("spaceShuttleHeight");
    buttonLand = document.getElementById("landing");
    buttonAbortMission = document.getElementById("missionAbort");
    buttonUp = document.getElementById("Up");
    buttonDown = document.getElementById("Down");
    buttonRight = document.getElementById("Right");
    buttonLeft = document.getElementById("Left");
    rocket = document.getElementById("rocket");
    rocket.style.position = "absolute";
    rocket.style.bottom = 0;
    rocket.style.left = 0;
    shuttleBackgroundTop = document.getElementById("shuttleBackground");


    buttonTakeoff.addEventListener("click", function (event) {
        if (window.confirm("Confirm that the shuttle is ready for takeoff.")) {
          flightStatus.innerHTML = "Shuttle in flight.";
          document.getElementById("shuttleBackground").style.backgroundColor = "blue";  
          shuttleHight.innerHTML = 10000;
      };
    });
    
    buttonLand.addEventListener("click", function (event) {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        document.getElementById("shuttleBackground").style.backgroundColor = "green";  
        shuttleHight.innerHTML = 0;
        rocket.style.bottom = 0;
        rocket.style.left = 0;
    });

    buttonAbortMission.addEventListener("click", function (event) {
        if (window.confirm("Confirm that you want to abort the mission.")) {
          flightStatus.innerHTML = "Mission aborted.";
          document.getElementById("shuttleBackground").style.backgroundColor = "green";  
          shuttleHight.innerHTML = 0;
          rocket.style.bottom = 0;
          rocket.style.left = 0;
        };
    });

    buttonRight.addEventListener("click", function (event) {
        if ((parseInt(rocket.getBoundingClientRect().right)) < shuttleBackgroundTop.getBoundingClientRect().right) {
            rocket.style.left = parseInt(rocket.style.left) + 10 + "px";
        }

    });

    buttonLeft.addEventListener("click", function (event) {
        if ((parseInt(rocket.getBoundingClientRect().left)) > shuttleBackgroundTop.getBoundingClientRect().left) {
            rocket.style.left = parseInt(rocket.style.left) - 10 + "px";
        }
          
    });

    buttonUp.addEventListener("click", function (event) {
        shuttleHight.innerHTML = Number(shuttleHight.innerHTML) + 10000;
        if ((parseInt(rocket.getBoundingClientRect().top)) > shuttleBackgroundTop.getBoundingClientRect().top) {
            rocket.style.bottom = parseInt(rocket.style.bottom) + 10 + "px";
        }
                  
    });

    buttonDown.addEventListener("click", function (event) {
        shuttleHight.innerHTML = Number(shuttleHight.innerHTML) - 10000;
        if ((parseInt(rocket.getBoundingClientRect().bottom)) <= shuttleBackgroundTop.getBoundingClientRect().bottom) {
            rocket.style.bottom = parseInt(rocket.style.bottom) - 10 + "px";
        }
          
    });


    
    
}


window.onload = init;