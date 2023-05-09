dayjs.extend(dayjs_plugin_duration);

function activateCountdown(element, dateString) {
    const targetDate = dayjs(dateString);

    element.querySelector(".until__event").textContent = `Until ${targetDate.format("MMMM D YYYY")}`;

    // function calculates difference between now and target date
    setInterval(() => {
        const now = dayjs();
        // .diff method calculates difference in times
        // creating a duration object of the amount of time
        const duration = dayjs.duration(targetDate.diff(now));

        if (duration.asMilliseconds() <= 0) return;

        // padStart method ensures two digit number like "01" instead of "1"; first parameter is number of max length then second is the "filler number"
        element.querySelector(".until__numeric--seconds").textContent = duration.seconds().toString().padStart(2, "0");
        element.querySelector(".until__numeric--minutes").textContent = duration.minutes().toString().padStart(2, "0");
        element.querySelector(".until__numeric--hours").textContent = duration.hours().toString().padStart(2, "0");
        element.querySelector(".until__numeric--days").textContent = duration.asDays().toFixed(0).toString().padStart(2, "0");

        // updating every quarter of a second (250 ms)
    }, 250);
}

activateCountdown(document.getElementById("myCountdown"), "2023-12-31");