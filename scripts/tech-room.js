$(function () {
    $('#techBtnCopy').click(function () {
        let container = document.getElementById('tech-formatter')
        let inputs = container.querySelectorAll('input,select,textarea')
        let results = []

        for (let i = 0; i < inputs.length; i++) {
            results.push(inputs[i].value.trim())
        }

        let toCopy =
            `
Product: ${results[0]}
Email: ${results[1]}
Case: ${results[2]}
Issue: ${results[3]}
Steps Taken: 
- ${results[4].split('\n').join('\n- ')}

`

        let clip = new ClipboardJS('#techBtnCopy', {
            text: function () {
                return toCopy.trim();
            }
        })

        $(this).notify('Copied', {
            className: 'success',
            position: 'left',
            autoHideDelay: 2000
        })
    })

    $('#techBtnClear').click(function() {
        if(confirm("Are you sure?")) {
            let container = document.getElementById('tech-formatter')
            inputs = container.querySelectorAll('input,select,textarea')
            inputs.forEach(e => {
                e.value = ''
            })
        }
    })
})