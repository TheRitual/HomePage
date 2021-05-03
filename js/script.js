console.log("Hello Dev How Ya Doin'?");

let topImage = document.querySelector(".js-topImage");
let toggleMenuButton = document.querySelector(".js-toggleTopMenu");
let topMenu = document.querySelector(".js-topMenu");

let menuButtonBiography = document.querySelector(".js-buttonBiography");
let menuButtonProgramming = document.querySelector(".js-buttonProgramming");
let menuButtonStorytelling = document.querySelector(".js-buttonStorytelling");
let menuButtonSport = document.querySelector(".js-buttonSport");
let menuButtonMusic = document.querySelector(".js-buttonMusic");
let menuButtonLanguages = document.querySelector(".js-buttonLanguages");
let menuButtonNerd = document.querySelector(".js-buttonNerd");
let menuButtonFavorites = document.querySelector(".js-buttonFavorites");

let buttonFavoriteMusicAlbums = document.querySelector(".js-buttonFavoriteMusicAlbums");
let buttonFavoriteMovies = document.querySelector(".js-buttonFavoriteMovies");
let buttonFavoriteMusicals = document.querySelector(".js-buttonFavoriteMusicals");
let buttonFavoriteAnimations = document.querySelector(".js-buttonFavoriteAnimations");
let buttonFavoriteBooks = document.querySelector(".js-buttonFavoriteBooks");

let infoSetBiography = { article: ".js-articleBiography", image: "ja", alt: "Uśmiechnięty Marcin Kawczyński" };
let infoSetProgramming = { article: ".js-articleProgramming", image: "programming", alt: "Logo JS na kubku wylewającym kawę" };
let infoSetStorytelling = { article: ".js-articleStorytelling", image: "storytelling", alt: "Ekipa planu filmowego w kostiumach z XVII wieku" };
let infoSetSport = { article: ".js-articleSport", image: "sport", alt: "Marcin Kawczyński z przyjaciółmi na siłowni w Glasgow" };
let infoSetMusic = { article: ".js-articleMusic", image: "music", alt: "Marcin Kawczyński gra na ukulele" };
let infoSetLanguages = { article: ".js-articleLanguages", image: "languages", alt: "Marcin Kawczyński ze znajomymi z Turcji, Korei, Brazylii i Austrii" };
let infoSetNerd = { article: ".js-articleNerd", image: "nerd", alt: "Grupa Cosplayerów w kostiumach superbohaterów siedzi na tronie z Gry o Tron" };
let infoSetFavorites = { article: ".js-articleFavorites", image: "fav", alt: "Abstrakcyjny obrazek z serduszkami" };

for (let content of document.querySelectorAll(".js-articles")) {
    content.classList.add("article__articles--hidden");
}

showArticle(infoSetBiography);

toggleMenuButton.addEventListener("click", (e) => {
    topMenu.classList.toggle("topMenu__list--hidden");
});

menuButtonBiography.addEventListener("click", (e) => {
    e.preventDefault();
    showArticle(infoSetBiography);
});
menuButtonProgramming.addEventListener("click", (e) => {
    e.preventDefault();
    showArticle(infoSetProgramming);
});
menuButtonStorytelling.addEventListener("click", (e) => {
    e.preventDefault();
    showArticle(infoSetStorytelling);
});
menuButtonSport.addEventListener("click", (e) => {
    e.preventDefault();
    showArticle(infoSetSport);
});
menuButtonMusic.addEventListener("click", (e) => {
    e.preventDefault();
    showArticle(infoSetMusic);
});
menuButtonLanguages.addEventListener("click", (e) => {
    e.preventDefault();
    showArticle(infoSetLanguages);
});
menuButtonNerd.addEventListener("click", (e) => {
    e.preventDefault();
    showArticle(infoSetNerd);
});
menuButtonFavorites.addEventListener("click", (e) => {
    e.preventDefault();
    showArticle(infoSetFavorites);
    showTable(".js-tableAlbums");
});

buttonFavoriteMusicAlbums.addEventListener("click", (e) => {
    e.preventDefault();
    showTable(".js-tableAlbums");
});

buttonFavoriteMovies.addEventListener("click", (e) => {
    e.preventDefault();
    showTable(".js-tableMovies");
});

buttonFavoriteMusicals.addEventListener("click", (e) => {
    e.preventDefault();
    showTable(".js-tableMusicals");
});

buttonFavoriteAnimations.addEventListener("click", (e) => {
    e.preventDefault();
    showTable(".js-tableAnimations");
});

buttonFavoriteBooks.addEventListener("click", (e) => {
    e.preventDefault();
    showTable(".js-tableBooks");
});

function showTable(tableName) {
    for (let table of document.querySelectorAll(".favoritesTable__table")) {
        table.classList.add("favoritesTable__table--hidden");
    }
    document.querySelector(tableName).classList.remove("favoritesTable__table--hidden");
}

function showArticle(articleInfoSet) {
    topImage.src = "http://dev.theritual.eu/homepage/img/" + articleInfoSet.image + ".jpg";
    topImage.setAttribute("alt", articleInfoSet.alt);
    for (let content of document.querySelectorAll(".js-articles")) {
        content.classList.add("article__articles--hidden");
    }
    document.querySelector(articleInfoSet.article).classList.remove("article__articles--hidden");
}

let date = new Date();
let messageOfTheDay = "Wiadomość dnia!!!";

switch (date.getDay()) {
    case 0: messageOfTheDay = "Jaka piękna dziś niedziela!"; break;
    case 1: messageOfTheDay = "Miłego dnia! Nawet jeśli to Poniedziałek!"; break;
    case 2: messageOfTheDay = "Wtorek to już prawie środek tygodnia"; break;
    case 3: messageOfTheDay = "Środa minie - tydzień zginie!"; break;
    case 4: messageOfTheDay = "Dzisiaj Czwartek a to taki mały Piątek!"; break;
    case 5: messageOfTheDay = "Piątek! Piąteczek! Piątunio!"; break;
    case 6: messageOfTheDay = "Mam nadzieję, że wypoczywasz skoro jest Sobota!"; break;
}

let welcomeMessage = "Wiadomość Powitalna";

if (date.getHours() === 0) {
    welcomeMessage = "Tak późno a Ty nie śpisz?";
} else if (date.getHours() < 7) {
    welcomeMessage = "Przyznaj się... wciągnęło Cię programowanie i zarywasz nockę?";
} else if (date.getHours() < 12) {
    welcomeMessage = "Programowanie z Rana jak śmietana!";
} else if (date.getHours() === 12) {
    welcomeMessage = "Hej! Programistyczny Cowboyu! Nie ma to jak kod w samo południe!";
} else if (date.getHours() < 18) {
    welcomeMessage = "Mam nadzieję, że dobrze Ci leci to popołudnie! Programowałeś/łaś dzisiaj... prawda?";
} else if (date.getHours() <= 23) {
    welcomeMessage = "Pora się zbierać spać. Jutro też jest dzień. A każdy dzień jest dobry na programowanie! Wypocznij!"
}
document.querySelector(".js-welcomeMessage").innerText = welcomeMessage
document.querySelector(".js-messageOfTheDay").innerText = messageOfTheDay;