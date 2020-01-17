// Se clicchiamo sulle icone next e prev andiamo avanti o indietro con le visualizzazioni. Il giro deve ripartire se siamo sull'ultima o la prima.
// I cerchietti devono cambiare colore contemporaneamente.
$(document).ready(
  function () {
    $('.next').click(
      function () {
        clickNext();
      }
    );
    $('.prev').click(
      function () {
        clickRight ();
      }
    );
  }
);
function clickNext() {
// alert('click next');
// immagini
 var imageActive = $('img.active');
 var imageNext = imageActive.next();
 // icone cerchio
 var circleActive = $('i.active');
 var circleNext = circleActive.next();

 if(imageActive.hasClass('last') == true) {
   imageActive.removeClass('active');
   $('img.first').addClass('active');
   circleActive.removeClass('active');
   $('i.first').addClass('active');
 }
 else {
   imageActive.removeClass('active');
   imageNext.addClass('active');
   circleActive.removeClass('active');
   circleNext.addClass('active');
 }
}

function clickRight() {
// alert('click prev');
// immagini
 var imageActive = $('img.active');
 var imageNext = imageActive.next();
 // icone cerchio
 var circleActive = $('i.active');
 var circleNext = circleActive.next();

 if(imageActive.hasClass('last') == true) {
   imageActive.removeClass('active');
   $('img.first').addClass('active');
   circleActive.removeClass('active');
   $('i.first').addClass('active');
 }
 else {
   imageActive.removeClass('active');
   imageNext.addClass('active');
   circleActive.removeClass('active');
   circleNext.addClass('active');
 }
}
