$(function () {

    // Init clipboard 
    var clip = new ClipboardJS('.cp-btn');

    // Log success
    clip.on('success', function(e) {
        console.info('Action:', e.action);
        console.info('Text:', e.text);
        console.info('Trigger:', e.trigger);
    
        e.clearSelection();
    });

    // Log fail
    clip.on('error', function(e) {
        console.error('Action:', e.action);
        console.error('Trigger:', e.trigger);
    });

    // Notify copy on click
    $('#copy-catalina-fourty').click(function () {
        $('#cmd-catalina-fourty').notify('Copied!', {
            className: 'success',
            position: 'right',
            autoHideDelay: 2000
        })
    })

    // Notify copy on click
    $('#btn-copy-catalina-kb').click(function() {
        $('#cmd-catalina-kb').notify('Copied!', {
            className: 'success',
            position: 'right',
            autoHideDelay: 2000
        })
    })
})