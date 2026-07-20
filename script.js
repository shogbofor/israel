// FAQ Accordion

const accordion = document.querySelectorAll(".accordion");

accordion.forEach((item) => {

item.addEventListener("click", function () {

this.classList.toggle("active");

const panel = this.nextElementSibling;

if (panel.style.display === "block") {
panel.style.display = "none";
} else {
panel.style.display = "block";
}

});

});


// Newsletter Form

const newsletter = document.querySelector(".newsletter form");

if(newsletter){

newsletter.addEventListener("submit", function(e){

e.preventDefault();

alert("Thank you for subscribing to IIFY GLOBAL SERVICES!");

newsletter.reset();

});

}


// Contact Form

const contactForm = document.querySelector(".contact form");

if(contactForm){

contactForm.addEventListener("submit", function(e){

e.preventDefault();

alert("Your message has been sent successfully. We will contact you shortly.");

contactForm.reset();

});

}
