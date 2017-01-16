$(function() {
  console.log('hello');
  var box = null;
  var count = null;

  $('button').on('click', function() {
    box = $(this);
    $colorBox = $('<div class="color-cube"></div>');
    $colorBox.addClass("" + box.data('color') + "");
    $($colorBox).appendTo('.container');
    count = Number($('#' + box.data('color')).text());
    count += 1;
    $('#' + box.data('color')).text('' + count + '');
  })

})
