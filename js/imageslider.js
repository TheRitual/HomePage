{
    const linkAboutMe = document.querySelector(".js-linkAboutMe");
    const linkContact = document.querySelector(".js-linkContact");
    const linkBiogram = document.querySelector(".js-linkBiogram");
    const linkCode = document.querySelector(".js-linkCode");
    const linkExperience = document.querySelector(".js-linkExperience");
    const linkGitHub = document.querySelector(".js-linkGitHub");

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

    
    linkAboutMe.addEventListener("click", () => { changeTop("monk.jpg", "About Me"); });
    linkContact.addEventListener("click", () => { changeTop("monk.jpg", "Contact"); });
    linkBiogram.addEventListener("click", () => { changeTop("monk.jpg", "Biogram"); });
    linkCode.addEventListener("click", () => { changeTop("monk.jpg", "Coding"); });
    linkExperience.addEventListener("click", () => { changeTop("monk.jpg", "Experience"); });
    linkGitHub.addEventListener("click", () => { changeTop("monk.jpg", "Coding"); });

}