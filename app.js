const secondHand = document.querySelectorAll('.hand')[2];
const minuteHand = document.querySelectorAll('.hand')[1];
const hourHand = document.querySelectorAll('.hand')[0];

setInterval(clock, 1000);
function clock(){
    const date = new Date();
    const second = date.getSeconds()/60 ;
    const minute =(second + date.getMinutes()) / 60 ;
    const hour = (minute + date.getHours()) / 12 ;


    secondHand.style.transform = `translateX(-50%) rotate(${second * 360}deg)`;

    minuteHand.style.transform = `translateX(-50%) rotate(${minute * 360}deg)`;
    hourHand.style.transform = `translateX(-50%) rotate(${hour * 360}deg)`;
}

clock();