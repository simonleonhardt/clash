$(document).ready(function () {
    cardBtnClick();
    stratBtnClick();
    basicBtnClick();
    createBasicsDom();
    youtubeRef();

});

function youtubeRef(){
    $('#youtube').click(function(){
        window.location.href = 'https://www.youtube.com/watch?v=a15g4wVjzwo&feature=youtu.be';
    })
}

function basicBtnClick() {
    $('#basicBtn').click(function () {
        console.log('you clicked me');
        $('#page').empty();
        createBasicsDom();
    })
}
function cardBtnClick() {
    $('#cardBtn').click(function () {
        console.log('you clicked me');
        $('#page').empty();
        getCardData();
    })
}
function stratBtnClick() {
    $('#stratBtn').click(function () {
        console.log('you clicked me');
        $('#page').empty();
        createAllStrats(stratObjArr);
    })
}

function createBasicsDom() {
    var welcomeImg = $("<img>", {
        src: "images/welcome.jpg"
    });

    var welcomeText = $("<p>", {
        class: "pageText",
        text: "Welcome to Clash Royale!"
    });

    var introText = $("<p>", {
        class: "pageText",
        text: "If you are here than you must want to know how to play Clash Royale. The object of the game is to destroy more towers than your opponent. If you destroy the king tower then you get an automatic win. Each player has two princess towers and one king tower. The princess towers are meant to protect the king tower but you also need to protect your princess towers. This is what the game board looks like."
    });

    var boardImg = $("<img>", {
        src: "images/gameboard.jpeg",
        class: "bigPicture"
    });

    var troopText = $("<p>", {
        class: "pageText",
        text: "So you need to destroy more towers than your opponent while defending your towers. But how do you attack their towers and defend yours? Well, you have cards that do different things. The most common type of card is the troop card. There are also spell cards, and building cards. The troop cards can move and attack. If troop cards loose enough health, they will die and be removed from the game board."
    });

    var trophyText = $("<p>", {
        class: "pageText",
        text: "When you win a battle you get around 30 trophies depending on how many trophies your opponent has. If you lose battles you lose trophies. Once you get enough trophies you can move onto the next arena. Moving to a new arena can unlock more cards for you to use in your deck. There are also graphical changes in the game board."
    });

    var arenaImg = $("<img>", {
        src: "images/bonepit.png",
        class: "squarePicture"
    });

    var chestText = $("<p>", {
        class: "pageText",
        text: "When you win battles, if you have chest slots open, you can earn chests. Click unlock on your chest to start unlocking. After a certain amount of time, the chest will open and you will get gold and cards to use in battle."
    });

    var chestImg = $("<img>", {
        src: "images/chests.jpg",
        class: "widePicture"
    });

    var endText = $("<p>", {
        class: "pageText",
        text: "That's basically the basics to Clash Royale. Good luck, and have fun clashing!"
    });

    $("#page").append(welcomeImg, welcomeText, introText, boardImg, troopText, trophyText, arenaImg, chestText, chestImg, endText);
}


var stratObjArr = [
    {
        title: "Hog Freezer",
        text: "The strategy Hog Freezer uses a Hog Rider to attack their tower and a Freeze Spell tofreeze their defenses so the Hog Rider has more time to attack their towers. You can also use a Ragespell to make Hog Rider attack faster or use a mirror too put down two Hog Riders.",
        img: "hogFreezer.png",
        author: "Simon"
    },
    {
        title: "Skarmy Gobbo Barrels",
        text: "Save up 6 elixir and wait until the enemy has played enough cards to not have enough elixir to counter your army, then unleash skeleton army down the lane and throw gobbo barrel at the tower. The two cards together will quickly destroy any unguarded tower.",
        img: "skarmy.png",
        author: "Bill"
    },
    {
        title: "Elixir Waster",
        text: "A good way to waste your opponent's elixir, is to use troop spawning buildings, like goblin huts, furnaces, or barbarian huts. Put them behind your princess towers, one on each side and the opponent will have to put down troops that cost about 5 elixir while you are not wasting any elixir.",
        img: "elixir2.jpg",
        author: "Simon"
    },
    {
        title: "Piggy Pushing",
        text: "A tricky way to speed up your slow troops is by putting faster troops directly behind the slower ones. The fast pig bumps into your slower troops and pushes them along. This helps your troops reach the opponents tower faster than they normally would.",
        img: "pig.jpg",
        author: "Simon"
    },
    {
        title: "All in Push",
        text: "Place a heavy tank down in the front like a Golem or Giant, and then place a few Area of Effect damaged troops behind him like a dragon or dark prince, and then place a prince or assassin behind them for large single target damage.",
        img: "golem.jpg",
        author: "Simon"
    }

];

function createAllStrats(arr) {
    for (var i = 0; i < stratObjArr.length; i++) {
        createStratDom(stratObjArr[i]);
    }
}


function createStratDom(obj) {
    var cardStrat = $("<div>", {
        class: "cardStrat"
    });
    var titleStrat = $("<div>", {
        class: "titleStrat",
        text: obj.title
    });
    var stratText = $("<div>", {
        class: "stratText",
        text: obj.text
    });
    var stratImg = $("<div>", {
        class: "stratImg",
        css: {
            "background-image": 'url("images/' + obj.img + '")'
        }
    });
    var author = $("<div>", {
        class: "author",
        text: "By: " + obj.author
    });
    $(cardStrat).append(titleStrat, stratText, stratImg, author);

    $("#page").append(cardStrat);
}


// Call api to get card data
function getCardData(){
    $.ajax({
        url:"https://royaleapi.github.io/cr-api-data/json/cards.json",
        success: function(result){
            console.log(result);
            createAllCards(result);
        }
    })
}

// Loop through card Arr and call create card function
function createAllCards(arr) {
    for (var i = 0; i < arr.length; i++) {
        createCardDom(arr[i]);
    }
}


// function that creates dom elems for cards
function createCardDom(obj) {
    var cardCard = $("<div>", {
        class: "cardDiv"
    });
    var titleCard = $("<div>", {
        class: "titleCard",
        text: obj.name
    });
    var cardText = $("<div>", {
        class: "cardText",
        text: obj.description
    });
    console.log(obj.key);
    var cardImg = $("<div>", {
        class: "cardImg",
        css: {
            "background-image": 'url("https://cdn.royaleapi.com/static/img/cards-150/' + obj.key + '.png")'
        }
    });
    var elixir = $("<div>", {
        class: "elixirCount",
        text: obj.elixir
    });
    $(cardCard).append(titleCard, cardText, cardImg, elixir);

    $("#page").append(cardCard);
}