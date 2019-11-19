function prorateClick() {
    "use strict";
    // Get Start, End, and Price
    var startDate = document.getElementById("start-date").valueAsDate,
        endDate = document.getElementById("end-date").valueAsDate,
        price = document.getElementById("calc-amount").value;

    // Sanity checks for user
    if (startDate === null) {
        alert("Enter a valid Start Date");
        return;
    }
    if (endDate === null) {
        alert("Enter a valid End Date");
        return;
    }
    if (price === null || price < 1) {
        alert("Enter a valid amount");
        return;
    }

    // There are this many MS in a day
    // Wow
    var DAY_MS = 86400000,
        // Time in MS
        diffTime = endDate.getTime() - startDate.getTime();

    if (diffTime < DAY_MS) {
        alert("Check your days and try again");
        return;
    }

    // Time in days
    var diffDays = diffTime / (1000 * 3600 * 24),
        // Get price per day
        ppd = price / 365,
        refundAmt = ppd * (365 - diffDays);

    // Set the output
    document.getElementById("prorate-result").innerHTML = "$" + refundAmt.toFixed(2);
}