document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = document.querySelector(link.getAttribute('href'));
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});


//form validation
  const myForm = document.getElementById("myForm");
  const alert = document.getElementById("enquiryMessage")

  myForm.addEventListener("submit", function (event) {
    const radioInputs = document.querySelectorAll('input[name="enquiry"]');
    let isAtLeastOneChecked = false;
    for (const radioInput of radioInputs) {
      if (radioInput.checked) {
        isAtLeastOneChecked = true;
        break; 
      }
    }
    if (!isAtLeastOneChecked) {
      alert.style.display = "block"
      event.preventDefault(); 
    }
  });

