let game = {

    lockMode: false,
    firstCard: null,
    secondCard: null,

    setCard: function(id) {

        let card = this.cards.filter(card => card.id === id)[0];

        if (card.flipped || this.lockMode) {
            return false
        }

        if (!this.firstCard) {
            this.firstCard = card;
            this.firstCard.flipped = true;
            return true;
        } else {
            this.secondCard = card;
            this.secondCard.flipped = true;
            this.lockMode = true;
            return true;
        }

    },

    checkMatch: function() {
        if (!this.firstCard || !this.secondCard) {
            return false;
        }
        return this.firstCard.icon === this.secondCard.icon;

    },

    clearCards: function() {
        this.firstCard = null;
        this.secondCard = null;
        this.lockMode = false;

    },
    figures: [
        'candle',
        'bat',
        'cat',
        'finger',
        'ghost',
        'pumpkin',
        'sinister-eyes',
        'skull',
        'vamp',
        'zombie'
    ],

    unflipCards: function() {
        this.firstCard.flipped = false;
        this.secondCard.flipped = false;
        this.clearCards();
    },

    checkGameOver: function() {

        return this.cards.filter(card => !card.flipped).length == 0;
    },




    cards: null,

    createCardsFromFigures: function() {

        this.cards = [];

        this.figures.forEach((figure) => {
            this.cards.push(this.createPairFromFigures(figure));
        })

        this.cards = this.cards.flatMap(pair => pair);
        this.shuffleCards();

        return this.cards
    },

    createPairFromFigures: function(figure) {
        return [{
            id: this.createIdFromFigure(figure),
            icon: figure,
            flipped: false,
        }, {
            id: this.createIdFromFigure(figure),
            icon: figure,
            flipped: false,
        }]
    },

    createIdFromFigure: function(figure) {
        return figure + parseInt(Math.random() * 1000);
    },

    shuffleCards: function(cards) {

        let currentIndex = this.cards.length;
        let randomIndex = 0;

        while (currentIndex !== 0) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [this.cards[randomIndex], this.cards[currentIndex]] = [this.cards[currentIndex], this.cards[randomIndex]]

        }

    }
}