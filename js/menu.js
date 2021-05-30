{    
    document.querySelector(".js-menuAboutMe").addEventListener("mouseenter", () => {
        document.querySelector(".js-menuAboutMeList").classList.remove("menu__subList--hidden");
    })

    document.querySelector(".js-menuAboutMe").addEventListener("mouseleave", () => {
        document.querySelector(".js-menuAboutMeList").classList.add("menu__subList--hidden");
    })

    document.querySelector(".js-menuCode").addEventListener("mouseenter", () => {
        document.querySelector(".js-menuCodeList").classList.remove("menu__subList--hidden");
    })

    document.querySelector(".js-menuCode").addEventListener("mouseleave", () => {
        document.querySelector(".js-menuCodeList").classList.add("menu__subList--hidden");
    })

    document.querySelector(".js-menuPortfolio").addEventListener("mouseenter", () => {
        document.querySelector(".js-menuPortfolioList").classList.remove("menu__subList--hidden");
    })

    document.querySelector(".js-menuPortfolio").addEventListener("mouseleave", () => {
        document.querySelector(".js-menuPortfolioList").classList.add("menu__subList--hidden");
    })

    document.querySelector(".js-menuProjects").addEventListener("mouseenter", () => {
        document.querySelector(".js-menuProjectsList").classList.remove("menu__subList--hidden");
    })

    document.querySelector(".js-menuProjects").addEventListener("mouseleave", () => {
        document.querySelector(".js-menuProjectsList").classList.add("menu__subList--hidden");
    })

    document.querySelector(".js-menuPhilosophy").addEventListener("mouseenter", () => {
        document.querySelector(".js-menuPhilosophyList").classList.remove("menu__subList--hidden");
    })

    document.querySelector(".js-menuPhilosophy").addEventListener("mouseleave", () => {
        document.querySelector(".js-menuPhilosophyList").classList.add("menu__subList--hidden");
    })
   
}