const clockContainer = document.querySelector(".js-clock"),
clockTitle = clockContainer.querySelector("span");
function getTime(){
    const date = new Date();
    const Minutes = date.getMinutes();
    const Hours = date.getHours();
    const Seconds = date.getSeconds();
    clockTitle.innerText = `${Hours < 10 ? `0${Hours}` : Hours}:${Minutes < 10 ? `0${Minutes}` : Minutes}`;
    
}


function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();