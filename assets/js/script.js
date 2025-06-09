document.addEventListener('DOMContentLoaded', () => {
  console.log('Site LightVerse prêt');
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

setInterval(plusSlides, 6000, 1);



//sen mail
$('#contact-form').on('submit', function(e) {
    e.preventDefault(); // Empêche le rechargement de la page

    $.ajax({
      type: 'POST',
      url: 'send-mail.php',
      data: $(this).serialize(),
      success: function(response) {
        $('#form-response').html('<p style="color:green;">' + response + '</p>');
        $('#contact-form')[0].reset(); // Réinitialiser le formulaire
      },
      error: function() {
        $('#form-response').html('<p style="color:red;">Une erreur est survenue. Veuillez réessayer.</p>');
      }
    });
  });