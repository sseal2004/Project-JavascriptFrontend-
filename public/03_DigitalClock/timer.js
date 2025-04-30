const updateClock = ()=>{
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById('clock').textContent=timeString;

}
setInterval(updateClock,1000);
updateClock();