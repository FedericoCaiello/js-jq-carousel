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
 var imageActive = $('img.active');
 var imageNext = imageActive.next();
 if(imageActive.hasClass('last') == true) {
   $('img.first').addClass('active');
 }
 else {
   imageActive.removeClass('active');
   imageNext.addClass('active');
 }
}

function clickRight() {
alert('click prev');
}
