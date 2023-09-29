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
// container for all the cards
const cardContainer = document.getElementById('team-grid-container');

//this creates 1 card
function createMemberCard(img, alt, fullName,role,quote) {
  const memberCard = document.createElement('div');
  memberCard.className = "team-member center";
  const memberImage = document.createElement('img');
  memberImage.setAttribute('src', img);
  memberImage.alt = alt;
  const memberName = document.createElement('p');
  memberName.innerHTML= fullName;
  memberName.className = "light member-name";
  const memberRole = document.createElement('p');
  memberRole.innerHTML= role;
  memberRole.className = "light member-role";
  const memberQuote = document.createElement('q');
  memberQuote.innerHTML= quote;
  memberQuote.className = "light member-role";
  //append each part of the card to the card
  memberCard.append(memberImage,memberName,memberRole,memberQuote);

  // append each card to the container div
  cardContainer.append(memberCard);
};

const members = [
  {
    img: './images/bearded-man.jpeg',
    alt: "Black and white image of an old man sitting on a wooden chair with a very long, braided beard.",
    fullName:'John Beard',
    role: 'Head of Talent Acquisition',
    quote: 'A diligent worker, especially at Christmas'
  },
  {
    img: "./images/chicken-man.jpeg",
    alt: "Black and white image of a man dressed as a hen.",
    fullName: "Ed Hendrix",
    role: "Account Manager",
    quote: 'A diligent worker, especially at Christmas'
  },
  {
    img: "./images/egg-lady.jpeg",
    alt: "Black and white image of a woman encased in an egg costume sitting on a wall",
    fullName: "Susie Wall",
    role: "Office Manager",
    quote: 'A diligent worker, especially at Christmas'
  },
  {
    img: "./images/man-crocodile.jpeg",
    alt: "Black and white image of a man in a swimming costume holding a crocodile in the air with one arm.",
    fullName:  "Albert Strong", 
    role:'Compliance Officer',
    quote: 'A diligent worker, especially at Christmas'
  },
  {
    img: "./images/mushroom-woman.jpeg",
    alt: "Black and white image of a woman standing under a giant spotted mushroom. She has flowers in her hair." ,
    fullName: "Edna Shroom", 
    role:'Head of Communications',
    quote: 'A diligent worker, especially at Christmas'
  },
  {
    img: "./images/woman-scales.jpeg",
    alt: "A black and white image of a woman dressed as a pair of silver balance scales", 
    fullName: "Belinda Scales",
    role:'CEO',
    quote: 'A diligent worker, especially at Christmas'
  }

];

for (const member of members) {
  createMemberCard(member.img, member.alt, member.fullName, member.role, member.quote);
}

