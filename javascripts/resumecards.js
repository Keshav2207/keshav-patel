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

$(function () {
  var $track = $('.resume-track');
  var $slides = $track.children('.resume-slide');

  var visible = 3;
  var slideCount = $slides.length;
  if (slideCount <= visible) return;

  var index = visible;
  var autoDelay = 3000;
  var timer;
  var slideWidth = 100 / visible;

  /* Clone slides for infinite loop */
  var $head = $slides.slice(0, visible).clone();
  var $tail = $slides.slice(-visible).clone();
  $track.prepend($tail).append($head);

  var totalSlides = $track.children().length;

  function setPos(noAnim) {
    $track.css('transition', noAnim ? 'none' : 'transform 0.5s ease');
    $track.css(
      'transform',
      'translateX(' + -(index * slideWidth) + '%)'
    );
  }

  setPos(true);

  function next() {
    index++;
    setPos();
  }

  function startAuto() {
    timer = setInterval(next, autoDelay);
  }

  $track.on('transitionend', function () {
    if (index >= totalSlides - visible) {
      index = visible;
      setPos(true);
    }
    if (index <= 0) {
      index = slideCount;
      setPos(true);
    }
  });

  startAuto();
});
