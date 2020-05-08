$(function () {
    $('#escyCopyBtn').click(function () {
        let container = document.getElementById('escy-formatter')
            inputs = container.querySelectorAll('input,select,textarea')
            results = []

        for (let i = 0; i < inputs.length; i++) {
            results.push(inputs[i].value.trim());
        }

        let lmiToCopy =
            `*Description of Issue:*
${results[0]}

*Expected Results:* 
${results[1]}

*Affected Account(s):* 
- User email: ${results[2]} 
- Date/Time/Time zone: ${results[3]} 

*Environment:*
- Product build: ${results[4]} 
- OS: ${results[5]}
- Browser Version: ${results[6]}

*Steps to Recreate:*\n- \
${results[7].split('\n').join("\n- ")}

*Troubleshooting Done:*\n- \
${results[8].split('\n').join('\n- ')}

*Additional detail:*
Is the issue impacting a single user or multiple?
- ${results[9]}
When did the problem start?
- ${results[10]}
Does it happen every time or intermittent?
- ${results[11]}
Can you recreate?
- ${results[12]}
Did the user (or you) find a workaround? What is it?
- ${results[13]}
Anything else important involving this issue?
- ${results[14]}

*Salesforce Case #:*
- ${results[15]}
`
        let _ = new ClipboardJS('#escyCopyBtn', {
            text: function() {
                return lmiToCopy;
            }
        })

        $(this).notify('Copied', {
            className: 'success',
            position: 'left',
            autoHideDelay: 2000
        });
    })

    // Clear button
    $('#escyClearBtn').click(function() {
        if (confirm("Are you sure?"))

        container = document.getElementById('escy-formatter');
        inputs = container.querySelectorAll('input,select,textarea');
        inputs.forEach(element => {
            element.value = "";
        })

        $(this).notify('Cleared', {
            className: 'success',
            position: 'right',
            autoHideDelay: 2000
        })
    })
})