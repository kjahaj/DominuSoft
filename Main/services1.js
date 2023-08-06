 let answers = document.querySelectorAll(".accordion");
        answers.forEach((event) => {
            const toggleBtn = event.querySelector(".accordion__toggle-btn");
            event.addEventListener("click", () => {
                if (event.classList.contains("active")) {
                    event.classList.remove("active");
                    toggleBtn.innerHTML = '<i class="fas fa-angle-up"></i>';
                } else {
                    event.classList.add("active");
                    toggleBtn.innerHTML = '<i class="fas fa-angle-down"></i>';
                }
            });
        });
		
		document.addEventListener("DOMContentLoaded", function() {
  const pillButtons = document.querySelectorAll(".pill-button");
  const tabContents = document.querySelectorAll(".tab-content");

  function showTabContent(tab) {
    tabContents.forEach(content => {
      if (content.getAttribute("data-tab") === tab) {
        content.classList.add("active");
      } else {
        content.classList.remove("active");
      }
    });
  }

  pillButtons.forEach(button => {
    button.addEventListener("click", function() {
      const tab = this.getAttribute("data-tab");
      pillButtons.forEach(btn => btn.classList.remove("active"));
      this.classList.add("active");
      showTabContent(tab);
    });
  });
});


 var modal = document.getElementById("myModal");


  var btn = document.getElementById("selectServiceButton");

  var closeBtn = document.getElementsByClassName("close")[0];

  btn.onclick = function () {
    modal.style.display = "block";
  };

  closeBtn.onclick = function () {
    modal.style.display = "none";
    document.body.style.filter = "none"; 
  };
  
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
      document.body.style.filter = "none";
    }
  };
  
  
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