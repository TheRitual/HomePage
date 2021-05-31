{
    const linkBiogram = document.querySelector(".js-linkBiogram");
    const linkSocialMedia = document.querySelector(".js-linkSocialMedia");
    const links = document.querySelectorAll(".js-menuLink");

    const topImageCover = document.querySelector(".js-topImageCover");
    const topImage = document.querySelector(".js-topImage");
    let useCover = true;

    links.forEach(element => {
        element.addEventListener("click", () => {
            topImageCover.classList.toggle("topImage__cover--on");
        });
    });

    const changeImage = (image) => {
        if(useCover) {
            topImageCover.style.backgroundImage=`url('img/top/${image}')`;
        }else {
            topImage.style.backgroundImage=`url('img/top/${image}')`;
        }
        useCover = !useCover;
    }

    linkBiogram.addEventListener("click", () => { changeImage("dummy3.jpg"); });
    linkSocialMedia.addEventListener("click", () => { changeImage("dummy4.jpg"); });

}