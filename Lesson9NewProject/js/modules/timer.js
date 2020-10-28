function timer(){

    
    
    const timerDay = document.querySelector(`#days`),
        timerHours = document.querySelector(`#hours`),
        timerMin = document.querySelector(`#minutes`),
        timerSec = document.querySelector(`#seconds`);



    
    let timerExemple;

    counterMy();
    timerExemple = setInterval(counterMy, 1000);

    

    function returnZero(num) {
        if ((num >= 0) && (num < 10)) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function counterInZero() {
        timerDay.innerText = `00`;
        timerHours.innerText = `00`;
        timerMin.innerText = `00`;
        timerSec.innerText = `00`;
    }

    function counterMy() {
        let date1 = new Date();
        //let date2 = new Date("09/25/2020");
        let date2 = new Date(2020, 9, 2);

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

    



}

export default timer;