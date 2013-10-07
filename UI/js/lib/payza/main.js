/// <reference path='lib/jquery/jquery.js' />
/// <reference path="lib/payza/env/browser.js" />
/// <reference path="lib/payza/plugins/behaviorTrigger.js" />
/// <reference path="lib/payza/plugins/tooltip.js" />


var bindEvents = function () {
    $(document).ready(function () {
        // mark the fact that JavaScript is enabled
        $('body').removeClass('no-js').addClass('js');

        // append browser info (include version for IE)
        var browser = payza.env.browser;
        $('body').addClass(browser.name === 'ie' ? browser.name + browser.version : browser.name);


        // Call the Tooltip plugin to elements that has the class "tooltip" and abbr tags.
        $('.tooltip, abbr').tooltip();
        // -----


        // Initiate Tooltip on form field help
        /* 
        1. Place the help icon inside the label or span.label 
        2. Give the help icon a "tooltip" data-behavior */
        var help = $('.field-help');
        for (var h = 0; h < help.length; h++) {
            var label = $(help[h]).prev();
            label.append($(help[h]));
            $(help[h]).find('.icn-help').attr('data-behavior','tooltip()');
        }
        // -----


        // Manipulate text with icons and insert ui-icon
        var icon16 = $('.icon-16');
        insertIcon(icon16, 'icn', 'icn-txt');

        var flag16 = $('.flag-16');
        insertIcon(flag16, 'icn', 'icn-txt');

        var icon24 = $('.icon-24');
        insertIcon(icon24, 'icn', 'icn-txt');

        var icon36 = $('.icon-36');
        insertIcon(icon36, 'icn', 'icn-txt');

        function insertIcon(icons, icn_class, icn_txt_class) {
            for (var i = 0; i < icons.length; i++) {
                var icn_txt = $(icons[i]).text();
                $(icons[i]).attr('title', icn_txt);
                $(icons[i]).html('<span class="' + icn_class + '"/><span class="' + icn_txt_class + '">' + icn_txt + '</span>');
            }
        }
        // -----

        // Inserts an icon to the country selected in a select
        var countrySelect = $('.select-country select');
        countrySelect.each(function () {
            var selectedCountry = $(this).find('option[selected]'), countryName = $(selectedCountry).text(), countryPrefix = $(selectedCountry).attr('data-prefix'),
                countryContainer = $(this).parent();
            countryContainer.append('<span class="flag-16 fl-' + countryPrefix + ' icon-only" title="' + countryName + '"><span class="icn"></span><span class="icn-txt">' + countryName + '</span></span>');
        });
        // -----

        // Initiate Notably plugin to form fields
        var info = $('.field-notably');
        info.each(function () {
            var label = $(this).parent().find('label, .field-label');

            label.append('<span class="icon-16 icn-info icon-only notably-trigger" title="Note"><span class="icn"></span><span class="icn-txt">Note</span></span>');
            label.find('.icn-info').notably({
                'contentContainer': $(this)
            });

        });
        // -----


        // Initiate sub navigation 
        // Box Table Action Menu
        $('.box-container .container-action').find('> li').filter(':has(ul)').addClass('nav-with-sub');

        $('.nav-with-sub').nav();
        $('.sub-menu').hide();
        // ------

        // run plugins specified by 'data-behavio(u)r' attribute
        $('[data-behavior], [data-behaviour]').behaviorTrigger();

        // make sure form elements have proper tab indexes
        document.tabindex = 1;
        $('form').each(function () {
            $(this).find(':input').not('input:hidden').each(function () {
                var tabnum = $(this).attr("tabindex");
                if (tabnum > 0) {
                    document.tabindex = tabnum;
                } else {
                    $(this).attr("tabindex", document.tabindex);
                }
                document.tabindex += 1;
            });
        });

    });

};

bindEvents();