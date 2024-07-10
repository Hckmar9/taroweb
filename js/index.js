const tarotCards = [
    { name: "The Fool", description: "Beginnings, innocence, spontaneity, a free spirit", imageUrl: "../images/00.png" },
    { name: "The Magician", description: "Manifestation, resourcefulness, power, inspired action", imageUrl: "../images/01.png" },
    { name: "The High Priestess", description: "Intuition, sacred knowledge, divine feminine, the subconscious mind", imageUrl: "../images/02.png" },
    { name: "The Empress", description: "Femininity, beauty, nature, nurturing, abundance", imageUrl: "../images/03.png" },
    { name: "The Emperor", description: "Authority, establishment, structure, a father figure", imageUrl: "../images/04.png" },
    { name: "The Hierophant", description: "Spiritual wisdom, religious beliefs, conformity, tradition, institutions", imageUrl: "../images/05.png" },
    { name: "The Lovers", description: "Love, harmony, relationships, values alignment, choices", imageUrl: "../images/06.png" },
    { name: "The Chariot", description: "Control, willpower, success, action, determination", imageUrl: "../images/07.png" },
    { name: "Strength", description: "Strength, courage, patience, control, compassion", imageUrl: "../images/08.png" },
    { name: "The Hermit", description: "Soul-searching, introspection, being alone, inner guidance", imageUrl: "../images/09.png" },
    { name: "Wheel of Fortune", description: "Good luck, karma, life cycles, destiny, a turning point", imageUrl: "../images/10.png" },
    { name: "Justice", description: "Justice, fairness, truth, cause and effect, law", imageUrl: "../images/11.png" },
    { name: "The Hanged Man", description: "Pause, surrender, letting go, new perspectives", imageUrl: "../images/12.png" },
    { name: "Death", description: "Endings, change, transformation, transition", imageUrl: "../images/13.png" },
    { name: "Temperance", description: "Balance, moderation, purpose, meaning, alignment", imageUrl: "../images/14.png" },
    { name: "The Devil", description: "Addiction, materialism, playfulness, bondage", imageUrl: "../images/15.png" },
    { name: "The Tower", description: "Sudden change, upheaval, chaos, revelation, awakening", imageUrl: "../images/16.png" },
    { name: "The Star", description: "Hope, faith, purpose, renewal, spirituality", imageUrl: "../images/17.png" },
    { name: "The Moon", description: "Illusion, fear, anxiety, subconscious, intuition", imageUrl: "../images/18.png" },
    { name: "The Sun", description: "Positivity, fun, warmth, success, vitality", imageUrl: "../images/19.png" },
    { name: "Judgment", description: "Judgment, rebirth, inner calling, absolution", imageUrl: "../images/20.png" },
    { name: "The World", description: "Completion, integration, accomplishment, travel", imageUrl: "../images/21.png" }
];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

document.getElementById('drawButton').addEventListener('click', function() {
    shuffle(tarotCards);
    const cardsDrawn = tarotCards.slice(0, 3);
    const cardsContainer = document.getElementById('cardsContainer');
    cardsContainer.innerHTML = ''; // Clear previous cards

    cardsDrawn.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.innerHTML = `<img src="${card.imageUrl}" alt="${card.name}"><h3>${card.name}</h3><p>${card.description}</p>`;
        cardsContainer.appendChild(cardElement);
    });
});
