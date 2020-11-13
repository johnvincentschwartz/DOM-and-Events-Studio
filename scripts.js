// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", () => {
    let takeoffButton = document.querySelector("#takeoff");
    let flightStatus = document.querySelector("#flightStatus");
    let shuttleBackground = document.querySelector("#shuttleBackground");
    let shuttleHeight = document.querySelector("#spaceShuttleHeight");
    let landingButton = document.querySelector("#landing");
    let abortButton = document.querySelector("#missionAbort");
    let upButton = document.querySelector("#up");
    let downButton = document.querySelector("#down");
    let leftButton = document.querySelector("#left");
    let rightButton = document.querySelector("#right");
    let rocket = document.querySelector("#rocket");

    takeoffButton.addEventListener('click', (e) => {
        let confirm = window.confirm("Ready for liftoff?");
        
        if (confirm) {
            flightStatus.innerHTML = "Shuttle in flight";
            shuttleBackground.style.backgroundColor = 'blue';
            shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) + 10000
        } 
    })

    landingButton.addEventListener("click", () => {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = 'green';
        shuttleHeight.innerHTML = 0;
        rocket.style.transform = `translateX(0px)`;
    })

    abortButton.addEventListener('click', () => {
        let confirm = window.confirm("Confirm that you want to abort the mission.");
        if (confirm) {
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            shuttleHeight.innerHTML = 0;
            rocket.style.transform = `translateX(0px)`;
        }
    })

    upButton.addEventListener('click', () => {
        shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) + 10000
    })

    downButton.addEventListener('click', () => {
        shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) - 10000
    })

    let currentPixels = 0

    leftButton.addEventListener('click', () => {
        currentPixels -= 10;
        console.log(currentPixels)
        if (currentPixels > 0 - shuttleBackground.clientWidth / 2){
            rocket.style.transform = `translateX(${currentPixels}px)`;
        }
    })

    rightButton.addEventListener('click', () => {
        currentPixels += 10;
        console.log(currentPixels)
        if (currentPixels < shuttleBackground.clientWidth / 2){
            rocket.style.transform = `translateX(${currentPixels}px)`;
        }
    })

})

