$(function () {
    $('#copy-catalina-fourty').click(function (){
        var toCopy = document.getElementById('cmd-catalina-fourty').innerText;


        var clip = new ClipboardJS('#copy-catalina-fourty', {
            text: function() {
                return toCopy;
            }
        })

        $('#cmd-catalina-fourty').notify('Copied',
        {
            className: 'success',
            position: 'right',
            autoHideDelay: 2000
        });
    })
}
)