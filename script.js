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

  // create member cards

function createMemberCard(img,fullName,role,quote) {

  const cardContainer = document.getElementById('cardContainer');

  const memberImage = document.createElement('img');
  memberImage.setAttribute('src', img);
  const memberName = document.createElement('p');
  memberName.innerHTML= fullName;
  const memberRole = document.createElement('p');
  memberRole.innerHTML= role;
  const memberQuote = document.createElement('q');
  memberQuote.innerHTML= quote;

  cardContainer.append(memberImage,memberName,memberRole,memberQuote);

}

createMemberCard('./images/bearded-man.jpeg', 'John Beard', 'Head of Talent Acquisiton', 'A diligent worker, especially at Christmas')

// const members = [
//   {
//     img: './images/bearded-man.jpeg',
//     fullName:'John Beard',
//     role: 'Head of Talent Acquisition',
//     quote: 'A diligent worker, especially at Christmas'
//   }
// ]

// for (member in members) {

// }

