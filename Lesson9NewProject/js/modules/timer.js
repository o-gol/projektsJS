
function returnZero(num) {
    if ((num >= 0) && (num < 10)) {
        return `0${num}`;
    } else {
        return num;
    }
}

function timer(timerSelector,date){


    
    
    const timer = document.querySelector(timerSelector),
        timerDay = timer.querySelector(`#days`),
        timerHours = timer.querySelector(`#hours`),
        timerMin = timer.querySelector(`#minutes`),
        timerSec = timer.querySelector(`#seconds`);



    
    let timerExemple;

    counterMy();
    timerExemple = setInterval(counterMy, 1000);

    

    


    function counterMy() {
        let date1 = new Date();
        //let date2 = new Date("29/10/2020");
        //let date2 = new Date(2020, 10, 29);
        let date2 = new Date(date);

        let timeDiff = Math.abs(date2.getTime() - date1.getTime());
        //let timeDiff1 = (date2.getTime() - date1.getTime());
        let diffDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        let diffHours = Math.floor((timeDiff - diffDays * 86400000) / (1000 * 60 * 60));
        let diffMin = Math.floor((timeDiff - (diffDays * 86400000 + diffHours * 3600000)) / (1000 * 60));
        let diffSec = Math.floor((timeDiff - (diffDays * 86400000 + diffHours * 3600000 + diffMin * 60000)) / (1000));
        timerDay.innerText = returnZero(diffDays);
        timerHours.innerText = returnZero(diffHours);
        timerMin.innerText = returnZero(diffMin);
        timerSec.innerText = returnZero(diffSec);
        //console.log(`${diffDays} ${diffHours} ${diffMin} ${diffSec}`);
        if ((date2.getTime() - date1.getTime()) < 0) {
            clearInterval(timerExemple);
            counterInZero();
        }

        // console.log(diffHours);
        // console.log(diffMin);
        // console.log(diffSec);

    }

    function counterInZero() {
    timerDay.innerText = `00`;
    timerHours.innerText = `00`;
    timerMin.innerText = `00`;
    timerSec.innerText = `00`;
}



}



export default timer;
export {returnZero};