export default function CountdownTimer({ selector, targetDate }) {
    
    const refs = {
        timerRef: document.querySelector(`${selector}`),
        daysValue: document.querySelector(`${selector} [data-value=days]`),
        hoursValue: document.querySelector(`${selector} [data-value=hours]`),
        minsValue: document.querySelector(`${selector} [data-value=mins]`),
        secsValue: document.querySelector(`${selector} [data-value=secs]`),
    }

    const updateValue = (days, hours, mins, sec) => {
        refs.daysValue.textContent = days;
        refs.hoursValue.textContent = hours;
        refs.minsValue.textContent = mins;
        refs.secsValue.textContent = sec;
    }

    function pad (number) {
        return String(number).padStart(2, '0');
    }

    window.onload = function () {
        setInterval(() => {
            const time = targetDate - Date.now();
             if (time < 0) {
                clearInterval(window.onload)
                return
            };
        const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
        updateValue(days,hours,mins,secs);
        }, 1000);
        refs.timerRef.insertAdjacentHTML('afterend', `<div class='until'><p>Until ${targetDate.toLocaleString('en-Gb', )}</p></div>`)
    }
};