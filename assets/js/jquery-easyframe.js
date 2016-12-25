/*! jquery-easyframe - v0.3.0 */
(function($) {
    $.fn.easyframe = function(options, callback) {
        callback = $.isFunction(options) ? options : callback;
        var settings = $.extend({
            url: null,
            attribute: "data-src",
            timeout: 0
        }, options), iframe = $(this), currentFramesLoaded = 0;
        $(window).load(function() {
            setTimeout(function() {
                iframe.each(function() {
                    var currentElement = $(this);
                    var iframeURL = settings.url == null ? currentElement.attr(settings.attribute) : settings.url;
                    if (typeof iframeURL !== "undefined" && typeof iframeURL !== "null" && $.trim(iframeURL) !== "") {
                        $(this).attr("src", iframeURL);
                        if ($.isFunction(callback)) {
                            currentElement.on("load", function() {
                                currentFramesLoaded++;
                                //if (currentFramesLoaded == iframe.length) {
                                    callback(currentElement);
                                //}
                            });
                        }
                    } else {
                        console.error("EasyFrame: You must set an url from the options or from the " + settings.attribute + " attribute.");
                    }
                });
            }, settings.timeout);
        });
    };
})(jQuery);