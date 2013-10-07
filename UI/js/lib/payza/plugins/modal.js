/// <reference path="../../jquery/jquery.js" />

// Documentation: https://payza.sharepoint.com/sites/rd/fed/FrontEnd%20JavaScript%20Guide/API/payza/plugins/modal.aspx

$.fn.modal = function (options) {
    /// <summary>
    ///     Displays the selected element on top of an overlay.
    /// </summary>
    /// <param name="options" type="Object" optional="false">
    ///     <para>triggeredBy: '[selector]'</para>
    ///     <para>dismissedBy: '[selector]'</para>
    ///     <para>dismissOnESC: true|false</para>
    ///     <para>backdropColor: '#colorCode|rgb(x,x,x)|rgba(x,x,x,x)'</para>
    ///     <para>backdropOpacity: 0 .. 1.0</para>
    /// </param>

    var $backdrop = $('<div/>'),
        settings = {
            dismissedBy: '.modal-close',
            dismissOnESC: true,
            backdropColor: '#111',
            backdropOpacity: 0.8
        };

    // extend the default settings using the passed-in options
    if (options) {
        $.extend(settings, options);
    }

    this.hide().css({
        position: 'fixed',
        'z-index': 1
    });

    $backdrop.hide().css({
        position: 'fixed',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        background: settings.backdropColor,
        opacity: settings.backdropOpacity,
        filter: 'alpha(opacity=' + (settings.backdropOpacity * 100) + ')'
    });
    $('body').append($backdrop);

    return this.each(function () {
        var $element = $(this);

        if (settings.triggeredBy) {
            $(settings.triggeredBy).on('click.modal', function (event) {
                $backdrop.show();
                $element.show();
                event.preventDefault();
            });
        } else {
            $backdrop.show();
            $element.show();
        }

        $(this).find(settings.dismissedBy).on('click.modal', function (event) {
            $backdrop.hide();
            $element.hide();
            event.preventDefault();
        });

        // dismiss on ESC when requested
        if (settings.dismissOnESC) {
            $(document).keyup(function (event) {
                if (event.keyCode === 27) { // ESC -> 27
                    $backdrop.hide();
                    $element.hide();
                }
            });
        }
    });
};