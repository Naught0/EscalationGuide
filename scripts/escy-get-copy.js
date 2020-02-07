$(function () {
    $('#escyCopyBtn').click(function () {
        var inputs, index, resultArr;

        var resultArr = [];

        container = document.getElementById('escy-formatter');
        inputs = container.querySelectorAll('input,select,textarea');

        for (index = 0; index < inputs.length; ++index) {
            resultArr.push(inputs[index].value.trim());
        }

        var lmiToCopy =
            `*Description of Issue:*
${resultArr[0]}

*Expected Results:* 
${resultArr[1]}

*Affected Account(s):* 
- User email: ${resultArr[2]} 
- Date/Time/Time zone: ${resultArr[3]} 

*Environment:*
- Product build: ${resultArr[4]} 
- OS: ${resultArr[5]}
- Browser Version: ${resultArr[6]}

*Steps to Recreate:*\n- \
${resultArr[7].split('\n').join("\n- ")}

*Troubleshooting Done:*\n- \
${resultArr[8].split('\n').join('\n- ')}

*Additional detail:*
Is the issue impacting a single user or multiple?
- ${resultArr[9]}
When did the problem start?
- ${resultArr[10]}
Does it happen every time or intermittent?
- ${resultArr[11]}
Can you recreate?
- ${resultArr[12]}
Did the user (or you) find a workaround? What is it?
- ${resultArr[13]}
Anything else important involving this issue?
- ${resultArr[14]}

*Salesforce Case #:*
- ${resultArr[15]}
`
        var clip = new ClipboardJS('#escyCopyBtn', {
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