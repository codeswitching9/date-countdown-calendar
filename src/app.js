//variables
let startBtn = document.getElementById("startBtn");
let clearBtn = document.getElementById("clearBtn");
let eventDate = document.getElementById("eventDate");

let dayTxt = document.getElementById("until-numeric-days"); 
let hourTxt = document.getElementById("until-numeric-hours"); 
let minuteTxt = document.getElementById("until-numeric-minutes");  
let secondTxt = document.getElementById("until-numeric-seconds");

let tomorrow;
let counter;

function setMinTomorrow() {
    let today = new Date();
    let dd = today.getDate()+1; // + tomorrow
    let mm = today.getMonth(); // January is 0
    let yyyy = today.getFullYear();

    tomorrow = yyyy + "-" + checkZero(mm) + "-" +checkZero(dd);
    eventDate.setAttribute("min", tomorrow);

    startBtn.addEventListener("click", startCounting);
    clearBtn.disabled = true;
}

function checkZero(i) {
    if(i<10) {
        i="0"+i;
    }
    return i;
}

function startCounting() {
    let findDate = eventDate.value;
    if(findDate == "") {
        demo.innerHTML = "Choose date!";
        return false;
    }
    else {
        demo.innerHTML = "";
        startBtn.disabled = true;
        clearBtn.disabled = false;
        clearBtn.addEventListener("click", clearAll)
    }
            let findDx = findDate.split("-");
            let year = findDx[0];
            let month = findDx[1];
            let day = findDx[2];
        
        let deadlineDate = month + " " + day + ", " + year + " 00:00:00";
        let deadline = new Date(deadlineDate).getTime();
    
    counter = setInterval(function() {
        let now = new Date().getTime();

        let t = deadline - now;

        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        let hours = Math.floor((t % (1000 * 60 * 60 * 24))/(1000 * 60 * 60));
        let minutes = Math.floor((t % (1000 * 60 * 60))/(1000 * 60));
        let seconds = Math.floor((t % (1000 * 60))/(1000));

        dayTxt.innerHTML = days;
        hourTxt.innerHTML = hours;
        minuteTxt.innerHTML = minutes;
        secondTxt.innerHTML = seconds;

        if (t < 0) {
            clearInterval(counter);
            demo.innerHTML = "Event is here!";
            dayTxt.innerHTML = '0';
            hourTxt.innerHTML = '0';
            minuteTxt.innerHTML = '0';
            secondTxt.innerHTML = '0';
        }
    }, 1000);
}

function clearAll() {
    clearInterval(counter);
    dayTxt.innerHTML = "";
    hourTxt.innerHTML = "";
    minuteTxt.innerHTML = "";
    secondTxt.innerHTML = "";
    clearBtn.disabled = true;
    startBtn.disabled = false;
}