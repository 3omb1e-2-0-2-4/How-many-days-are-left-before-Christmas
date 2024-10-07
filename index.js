function christmasCountdown() {
    const christmas = new Date("December 25, 2024 00:00");
    const now = new Date();
    const diff = christmas - now;

    const msInSecond = 1000;
    const msInMinute = 60 * 1000;
    const msInHour = 60 * 60 * 1000;
    const msInDay = 24 * 60 * 60 * 1000;

    const displayDay = Math.floor(diff/msInDay);
    document.querySelector('.DAYS').textContent = displayDay;

    const displayHour = Math.floor((diff%msInDay) / msInHour);
    document.querySelector('.HOURS').textContent = displayHour;

    const displayMinute = Math.floor((diff%msInHour) / msInMinute);
    document.querySelector('.MINUTES').textContent = displayMinute;
    
    const displaySecond = Math.floor((diff%msInMinute) / msInSecond);
    document.querySelector('.SECONDS').textContent = displaySecond;



    if (diff <= 0) {
        document.querySelector(".DAYS").textContent = 0;
        document.querySelector(".HOURS").textContent = 0;
        document.querySelector(".MINUTES").textContent = 0;
        document.querySelector(".SECONDS").textContent = 0;
        clearInterval(timerId);
        MerryChristmas()
    }
}




let timerId = setInterval(christmasCountdown, 1000);



function MerryChristmas() {
    const heading = document.querySelector("h1");
    heading.textContent = "MERY CHRISTMAS!!! HO-HO-HO!"
    heading.classList.add("red")
}

const button = document.querySelector("#MyButton");
button.addEventListener('click', function() {
    document.querySelector("#MyAudio").play();
})