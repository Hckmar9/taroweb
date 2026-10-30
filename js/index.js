document.addEventListener('DOMContentLoaded', function() {
    const tarotCards = [
        { name: "The Fool", description: "Beginnings, innocence, spontaneity, a free spirit", imageUrl: "images/00.png" },
        { name: "The Magician", description: "Manifestation, resourcefulness, power, inspired action", imageUrl: "images/01.png" },
        { name: "The High Priestess", description: "Intuition, sacred knowledge, divine feminine, the subconscious mind", imageUrl: "images/02.png" },
        { name: "The Empress", description: "Femininity, beauty, nature, nurturing, abundance", imageUrl: "images/03.png" },
        { name: "The Emperor", description: "Authority, establishment, structure, a father figure", imageUrl: "images/04.png" },
        { name: "The Hierophant", description: "Spiritual wisdom, religious beliefs, conformity, tradition, institutions", imageUrl: "images/05.png" },
        { name: "The Lovers", description: "Love, harmony, relationships, values alignment, choices", imageUrl: "images/06.png" },
        { name: "The Chariot", description: "Control, willpower, success, action, determination", imageUrl: "images/07.png" },
        { name: "Strength", description: "Strength, courage, patience, control, compassion", imageUrl: "images/08.png" },
        { name: "The Hermit", description: "Soul-searching, introspection, being alone, inner guidance", imageUrl: "images/09.png" },
        { name: "Wheel of Fortune", description: "Good luck, karma, life cycles, destiny, a turning point", imageUrl: "images/10.png" },
        { name: "Justice", description: "Justice, fairness, truth, cause and effect, law", imageUrl: "images/11.png" },
        { name: "The Hanged Man", description: "Pause, surrender, letting go, new perspectives", imageUrl: "images/12.png" },
        { name: "Death", description: "Endings, change, transformation, transition", imageUrl: "images/13.png" },
        { name: "Temperance", description: "Balance, moderation, purpose, meaning, alignment", imageUrl: "images/14.png" },
        { name: "The Devil", description: "Addiction, materialism, playfulness, bondage", imageUrl: "images/15.png" },
        { name: "The Tower", description: "Sudden change, upheaval, chaos, revelation, awakening", imageUrl: "images/16.png" },
        { name: "The Star", description: "Hope, faith, purpose, renewal, spirituality", imageUrl: "images/17.png" },
        { name: "The Moon", description: "Illusion, fear, anxiety, subconscious, intuition", imageUrl: "images/18.png" },
        { name: "The Sun", description: "Positivity, fun, warmth, success, vitality", imageUrl: "images/19.png" },
        { name: "Judgment", description: "Judgment, rebirth, inner calling, absolution", imageUrl: "images/20.png" },
        { name: "The World", description: "Completion, integration, accomplishment, travel", imageUrl: "images/21.png" },
    ];

    // Seeded PRNG (mulberry32): same seed always gives the same sequence
    function mulberry32(seed) {
        return function() {
            seed |= 0;
            seed = (seed + 0x6D2B79F5) | 0;
            let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
            t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
            return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
        };
    }

    // Fisher-Yates shuffle on a copy, so the original deck is never mutated
    function shuffle(array, seed) {
        const result = [...array];
        const random = mulberry32(seed);
        for (let m = result.length - 1; m > 0; m--) {
            const i = Math.floor(random() * (m + 1));
            [result[m], result[i]] = [result[i], result[m]];
        }
        return result;
    }

    document.getElementById('submitDate').addEventListener('click', function() {
        const birthdate = document.getElementById('birthdate').value;
        if (birthdate) {
            // Birthdate in days + current week number, so the reading changes weekly
            const days = Math.floor(new Date(birthdate).getTime() / 86400000);
            const week = Math.floor(Date.now() / (7 * 86400000));
            const cardsDrawn = shuffle(tarotCards, days * 7919 + week).slice(0, 3);
            const cardsContainer = document.getElementById('cardsContainer');
            cardsContainer.innerHTML = ''; // Clear previous cards

            cardsDrawn.forEach(card => {
                const cardElement = document.createElement('div');
                cardElement.className = 'card';
                cardElement.innerHTML = `<img src="${card.imageUrl}" alt="Image of ${card.name}"><h3>${card.name}</h3><p>${card.description}</p>`;
                cardsContainer.appendChild(cardElement);
            });
        } else {
            alert('Please enter your birthdate.');
        }
    });
});
