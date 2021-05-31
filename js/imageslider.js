{
    const linkBiogram = document.querySelector(".js-linkBiogram");
    const linkAboutMe = document.querySelector(".js-linkAboutMe");
    const linkContact = document.querySelector(".js-linkContact");
    const links = document.querySelectorAll(".js-menuLink");

    const topImageCover = document.querySelector(".js-topImageCover");
    const topImage = document.querySelector(".js-topImage");
    let useCover = true;

    links.forEach(element => {
        element.addEventListener("click", () => {
            topImageCover.classList.toggle("topImage__cover--on");
        });
    });

    const changeTop = (image, text) => {
        const topText = document.querySelector(".topImage__text");
        topText.innerHTML = text;
        if (useCover) {
            topImageCover.style.backgroundImage = `url('img/top/${image}')`;
        } else {
            topImage.style.backgroundImage = `url('img/top/${image}')`;
        }
        useCover = !useCover;
    }

    linkBiogram.addEventListener("click", () => { changeTop("dummy3.jpg", "Biogram"); });
    linkAboutMe.addEventListener("click", () => { changeTop("monk.jpg", "About Me"); });
    linkContact.addEventListener("click", () => { changeTop("dummy4.jpg", "Contact"); });

}