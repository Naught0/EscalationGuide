"use strict";

// Copy to clipboard
$(function () {
    $('#prorate-button').click(function () {
        // Set notify informaiton
        $.notify.defaults({
            autoHideDelay: 3000,
            position: 'right',
            showAnimation: 'fadeIn',
            hideAnimation: 'fadeOut'
        });

        // Clear result box to avoid confusion for multiple calculations
        let space = String.fromCharCode(160);
        $('#prorate-result').text(`${space.repeat(16)}`);

        // Get Start, End, and Price
        var startDate = document.getElementById("start-date").valueAsDate,
            endDate = document.getElementById("end-date").valueAsDate,
            price = document.getElementById("calc-amount").value;

        // Sanity checks for user
        if (startDate === null) {
            $('#start-date').notify("Enter a valid Start Date");
            return;
        }
        if (endDate === null) {
            $('#end-date').notify("Enter a valid End Date");
            return;
        }
        if (price === null || price < 1) {
            $('#calc-amount').notify("Enter a valid amount");
            return;
        }

        // There are this many MS in a day
        // Wow
        var DAY_MS = 86400000,
            // Time in MS
            diffTime = endDate.getTime() - startDate.getTime();

        if (diffTime < DAY_MS) {
            $('#end-date').notify("Check your days and try again");
            return;
        }

        // Time in days
        var diffDays = diffTime / (1000 * 3600 * 24),
            // Get price per day
            ppd = price / 365,
            refundAmt = ppd * (365 - diffDays);

        // Set the output
        $('#prorate-result').text(`\$${refundAmt.toFixed(2)}`);

        new ClipboardJS('#prorate-button', {
            text: function () {
                return $('#prorate-result').text();
            }
        })
        $('#prorate-result').notify('Copied', 'success');
    })
})