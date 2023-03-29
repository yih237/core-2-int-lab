
const memesData = [
{
"id": 35,
"Memes": "./memes/banksecurity.png",
"Title": "bank security cameras",
"Year": 2022,
"Language": "English",
"Category": "Photo",
"Score (1-5)": 5,
"Type": "Facts",
"From": "9gag",
"Why I like it": "This is so funny because for many different reasons the security cameras cannot be that clear, and someone that close from the camera would be bluured. The camera quality, lighting, and motion of security cameras often result in blurry footage. Astrology photos, on the other hand, are typically taken under controlled conditions using high-quality equipment."
},
{
"id": 36,
"Memes": "./memes/conspiracy.png",
"Title": "a conspiracy theory",
"Year": 2023,
"Language": "English",
"Category": "Twitter",
"Score (1-5)": 5,
"Type": "Cute",
"From": "9gag",
"Why I like it": "This meme is just too cute! I love how it makes the pyramid make sense all of a sudden. It's so cute how it takes something as ancient and mysterious as pyramids and adds a little whimsy with a cat.I love cats, they are the rightful gods lol."
},
{
"id": 37,
"Memes": "./memes/protection.png",
"Title": "protection",
"Year": 2023,
"Language": "English",
"Category": "Photo",
"Score (1-5)": 3,
"Type": "Cold joke",
"From": "9gag",
"Why I like it": "This meme is an ironic meme that has nothing and everything to do with deodorants. It plays around with the \"full-protection\" tag on deororants and juxtaposes it with a police/gangster situation at school, saying \"those bastards lied to me\". This left me wondering - many deodorant companies promise \"full protection\" as a way to convince us they'll keep us comfortable and safe. However, real-world challenges and dangers can make such promises seem empty."
},
{
"id": 38,
"Memes": "./memes/geiyepa.png",
"Title": "gei ye pa",
"Year": 2021,
"Language": "Chinese",
"Category": "Cartoon",
"Score (1-5)": 2,
"Type": "Cold joke",
"From": "Instagram",
"Why I like it": "This is related to a Hong Kong cartoon character called Mai Dou. Mai Dou is a cute little pig who has captured the hearts of many with his mischievous adventures and adorable antics. This meme is based on a scene in the show where Mai Dou does something funny or outrageous. It's captioned with a witty or funny comment, juxtaposing Mai Dou and the ironic or absurd message."
},
{
"id": 39,
"Memes": "./memes/cheesy.png",
"Title": "cheesy",
"Year": 2020,
"Language": "English",
"Category": "Photo",
"Score (1-5)": 3,
"Type": "Cold joke",
"From": "Instagram",
"Why I like it": "This is purely a homophonic meme, but I always laugh while looking at it. What I got from this is that we can connect with each other in new and unexpected ways by playing with the nuances and quirks of our words and phrases."
},
{
"id": 40,
"Memes": "./memes/gemini.jpg",
"Title": "gemini",
"Year": 2023,
"Language": "English",
"Category": "Movie",
"Score (1-5)": 5,
"Type": "Facts",
"From": "Instagram",
"Why I like it": "I used to be kinda into gemini boys, and this meme is about how geminis are either oversharing or not talking at all. My experience with geminis is that they can be both outgoing and communicative, sharing their thoughts and feelings readily, or quiet and reserved, guarding their inner worlds tightly. There is little in between - either all in or all out. There is no sign that is capable of capturing the complexity of human personality, of course. Although I gave this meme a 5, I gotta say that speculation about traits associated with different zodiac signs can be fun, but we should always avoid stereotypes."
},
{
"id": 41,
"Memes": "./memes/twinsis.jpg",
"Title": "twin sisters with completely different aethetics",
"Year": 2023,
"Language": "English",
"Category": "Photo",
"Score (1-5)": 5,
"Type": "Dirty",
"From": "Instagram",
"Why I like it": "...one says father, the other says daddy. This is a dirty meme that reminds me of my friend's boyfriend, who really likes my friend to dress up as a nun when they make love."
},
{
"id": 42,
"Memes": "./memes/thanksforthefood.jpg",
"Title": "thank you jesus for the food",
"Year": 2022,
"Language": "English",
"Category": "Photo",
"Score (1-5)": 3,
"Type": "Thought provoking",
"From": "9gag",
"Why I like it": "This is quite ironic since the food are provided farmers. rom a young age, I was taught to appreciate and honor farmers' hard work. The food on our table is made possible by their sweat and dedication. In spite of being a Christian, I find this lesson to be valuable and meaningful, reminding me of the importance of humility, gratitude, and respect.\n\nThe challenges farmers face don't always result from natural forces or market fluctuations. It can be difficult for farmers to make ends meet and support their families due to political and economic factors."
}
];


const memes = document.querySelectorAll('.cell img');

memes.forEach(meme => {
  meme.addEventListener('click', () => {
    const memeId = meme.getAttribute('data-id');
    const memeData = memesData.find(meme => meme.id == memeId);
    
    const title = memeData.Title;
    const year = memeData.Year;
    const language = memeData.Language;
    const category = memeData.Category;
    const score = memeData['Score (1-5)'];
    const type = memeData.Type;
    const from = memeData.From;
    const whyILikeIt = memeData['Why I like it'];
    
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
      <div class="modal-content">
        <h2>${title}</h2>
        <ul>
          <li><strong>Year:</strong> ${year}</li>
          <li><strong>Language:</strong> ${language}</li>
          <li><strong>Category:</strong> ${category}</li>
          <li><strong>Score:</strong> ${score}</li>
          <li><strong>Type:</strong> ${type}</li>
          <li><strong>From:</strong> ${from}</li>
          <li><strong>Why I like it:</strong> ${whyILikeIt}</li>
        </ul>
        <button class="close-modal">Close</button>
      </div>
    `;
    
    document.body.appendChild(modal);
    
    const closeModal = document.querySelector('.close-modal');
    closeModal.addEventListener('click', () => {
      modal.remove();
    });
  });
});

// const memesContainer = document.getElementById("memes-container");

// memesData.forEach(meme => {
//   const memeElement = document.createElement("div");
//   memeElement.classList.add("cell");

//   const imgElement = document.createElement("img");
//   imgElement.classList.add("responsive-image");
//   imgElement.setAttribute("src", meme.Memes);

//   memeElement.appendChild(imgElement);

//   const infoButton = document.createElement("button");
//   infoButton.textContent = "Click to show more information";

//   const infoElement = document.createElement("div");
//   infoElement.textContent = `Title: ${meme.Title}\nYear: ${meme.Year}\nLanguage: ${meme.Language}\nCategory: ${meme.Category}\nScore: ${meme["Score (1-5)"]}\nType: ${meme.Type}\nFrom: ${meme.From}\nWhy I like it: ${meme["Why I like it"]}`;
//   infoElement.style.display = "none";

//   infoButton.addEventListener("click", () => {
//     infoElement.style.display = infoElement.style.display === "none" ? "block" : "none";
//   });

//   memeElement.appendChild(infoButton);
//   memeElement.appendChild(infoElement);

//   memesContainer.appendChild(memeElement);
// });
