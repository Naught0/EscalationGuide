$(function() {
    $(document).find('.mac-wrapper').hide();

    $('.btn-icon').click(function() {
        // Toggle icon
        var t = $(this).find('.is-toggle');

        // Icons for win & mac
        var winIcon = $(this).find('.fa-windows');
        var macIcon = $(this).find('.fa-apple');

        // Win vs mac content
        var win = $(this).siblings('.windows-wrapper');
        var mac = $(this).siblings('.mac-wrapper');

        // Change to Mac
        if (t.hasClass('fa-toggle-off')) {
            t.addClass('fa-toggle-on');
            t.removeClass('fa-toggle-off');
            
            win.fadeOut();
            mac.fadeIn();
            // win.addClass('hidden');
            // mac.removeClass('hidden');
        }
        // Change to Windows
        else {
            t.addClass('fa-toggle-off');
            t.removeClass('fa-toggle-on');

            win.fadeIn();
            mac.fadeOut();
            // win.removeClass('hidden');
            // mac.addClass('hidden');
        }
    });
});