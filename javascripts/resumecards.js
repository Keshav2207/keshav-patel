$(document).ready(function () {

  var $body = $('body');
  var $themeMenu = $('.resume-dropdown-menu > li > a');
  var $themeBtn = $('#theme-toggle-btn');

  $themeMenu.on('click', function (event) {

    $body.removeClass(function (i, c) {
      return (c.match(/(^|\s)theme-\S+/g) || []).join(' ');
    });

    var themeColor = $(this).attr('id');
    var themeColorClass = "theme-" + themeColor;
    $body.addClass(themeColorClass);

    $themeBtn.html(
      themeColor.charAt(0).toUpperCase() + themeColor.slice(1) +
      ' <span class="caret"></span>'
    );

    event.preventDefault();
  });

});
