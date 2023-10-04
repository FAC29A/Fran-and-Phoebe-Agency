//Background image fades in on page load

function loadHero() {
  const background = document.getElementById('home');
  background.style.opacity = '1';
};

loadHero();

// Page scrolls smoothly when nav links are clicked
function scrollSmoothly() {
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
          e.preventDefault();
          const targetSection = document.querySelector(link.getAttribute('href'));
          targetSection.scrollIntoView({ behavior: 'smooth' });
      });
    });
  };

scrollSmoothly();

// Page scrolls smoothly when enter button clicked:
  function eventSmoothScroll(){
     const enter = document.getElementById('enter');
     enter.addEventListener('click', (e) => {
          e.preventDefault();
          const targetSection2 = document.getElementById('about');
          targetSection2.scrollIntoView({ behavior: 'smooth' });
      });
  }
   
eventSmoothScroll();

//Function to ensure at least 1 radio option selected: 
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

// This section creates member cards!

// Gets element container for all the cards
const cardContainer = document.getElementById('team-grid-container');
  
//This function creates 1 card
function createMemberCard(img, alt, fullName,role,quote) {
  const memberCard = document.createElement('div');
  memberCard.className = "team-member center";
  const memberImage = document.createElement('img');
  memberImage.setAttribute('src', img);
  memberImage.alt = alt;
  const memberName = document.createElement('p');
  memberName.innerHTML= fullName;
  memberName.className = " member-name";
  const memberRole = document.createElement('p');
  memberRole.innerHTML= role;
  memberRole.className = " member-role";
  const memberQuote = document.createElement('q');
  memberQuote.innerHTML= quote;
  memberQuote.className = " member-role member-quote hover-appear";
  // This appends each part of the card to the card
  memberCard.append(memberImage,memberName,memberRole,memberQuote);

  // This appends each card to the container div
  cardContainer.append(memberCard);
};

// This is the members info for each card (used in the function above)
const members = [
  {
    img: "./images/woman-scales.jpeg",
    alt: "A black and white image of a woman dressed as a pair of silver balance scales", 
    fullName: "Belinda Scales",
    role:'CEO',
    quote: 'Always scaling up'
  },
  {
    img: "./images/chicken-man.jpeg",
    alt: "Black and white image of a man dressed as a hen.",
    fullName: "Ed Hendrix",
    role: "Account Manager",
    quote: 'Helping you develop your own little nest-egg'
  },
  {
    img: "./images/egg-lady.jpeg",
    alt: "Black and white image of a woman encased in an egg costume sitting on a wall",
    fullName: "Susie Wall",
    role: "Office Manager",
    quote: 'Keeping the office sunny-side updated'
  },
  {
    img: "./images/man-crocodile.jpeg",
    alt: "Black and white image of a man in a swimming costume holding a crocodile in the air with one arm.",
    fullName:  "Albert Gator", 
    role:'Compliance Officer',
    quote: 'See you later!'
  },
  {
    img: "./images/mushroom-woman.jpeg",
    alt: "Black and white image of a woman standing under a giant spotted mushroom. She has flowers in her hair." ,
    fullName: "Edna Shroom", 
    role:'Head of Communications',
    quote: 'Our competitors are complete shitake!'
  },
  
  {
    img: './images/bearded-man.jpeg',
    alt: "Black and white image of an old man sitting on a wooden chair with a very long, braided beard.",
    fullName:'John Beard',
    role: 'Head of Talent Acquisition',
    quote: 'A diligent worker, especially at Christmas'
  },

];

//For...of loop loops through the members object and creates a member card for each person
for (const member of members) {
  createMemberCard(member.img, member.alt, member.fullName, member.role, member.quote);
}


