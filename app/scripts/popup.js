$(document).ready(function() {
  var createMarkticleButton = function() {
    var styles = 'position: fixed; z-index: 9999; bottom: 20px; left: 0; background: red; color: white; font-family: arial; font-size: 12px; text-decoration: none; padding: 10px 30px; border-radius: 0 7px 7px 0;';
    $('body').append('<a href="#markticle" id="markticle_button" style="'+styles+'">Markticle!</a>');
  };
  $(document).on('click', '#markticle_button', function(evt) {
    evt.preventDefault();
    var title = document.title;
    var url = window.location.href;
    console.log(title + ': ' + url);
  });
  createMarkticleButton();
});
