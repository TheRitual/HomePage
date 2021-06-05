{
    let isMenuHidden = true;
    const arrow = document.querySelector(".js-arrow");
    const menu = document.querySelector(".js-menu");
    const menuAboutMe = document.querySelector(".js-menuAboutMe");
    const menuLinks = document.querySelectorAll(".js-menuLink");

    const showMenu = () => {
        arrow.innerHTML = "▲";
        menu.classList.add("menu--displayed");
    }

    menuAboutMe.addEventListener("mouseenter", () => {
        document.querySelector(".js-menuAboutMeList").classList.remove("menu__subList--hidden");
    });

    menuAboutMe.addEventListener("mouseleave", () => {
        document.querySelector(".js-menuAboutMeList").classList.add("menu__subList--hidden");
    });

    menuAboutMe.addEventListener("focusin", () => {
        showMenu();
        document.querySelectorAll(".js-menuSubList").forEach(element => {
            element.classList.add("menu__subList--hidden");
        });
        document.querySelector(".js-menuAboutMeList").classList.remove("menu__subList--hidden");
    });

    document.querySelector(".js-menuCode").addEventListener("mouseenter", () => {
        document.querySelector(".js-menuCodeList").classList.remove("menu__subList--hidden");
    });

    document.querySelector(".js-menuCode").addEventListener("mouseleave", () => {
        document.querySelector(".js-menuCodeList").classList.add("menu__subList--hidden");
    });

    document.querySelector(".js-menuCode").addEventListener("focusin", () => {
        document.querySelectorAll(".js-menuSubList").forEach(element => {
            element.classList.add("menu__subList--hidden");
        });
        document.querySelector(".js-menuCodeList").classList.remove("menu__subList--hidden");
    });

    document.querySelector(".js-menuFreeTime").addEventListener("mouseenter", () => {
        document.querySelector(".js-menuFreeTimeList").classList.remove("menu__subList--hidden");
    });

    document.querySelector(".js-menuFreeTime").addEventListener("mouseleave", () => {
        document.querySelector(".js-menuFreeTimeList").classList.add("menu__subList--hidden");
    });

    document.querySelector(".js-menuFreeTime").addEventListener("focusin", () => {
        document.querySelectorAll(".js-menuSubList").forEach(element => {
            element.classList.add("menu__subList--hidden");
        });
        document.querySelector(".js-menuFreeTimeList").classList.remove("menu__subList--hidden");
    });

    document.querySelector(".js-menuProjects").addEventListener("mouseenter", () => {
        document.querySelector(".js-menuProjectsList").classList.remove("menu__subList--hidden");
    });

    document.querySelector(".js-menuProjects").addEventListener("mouseleave", () => {
        document.querySelector(".js-menuProjectsList").classList.add("menu__subList--hidden");
    });

    document.querySelector(".js-menuProjects").addEventListener("focusin", () => {
        document.querySelectorAll(".js-menuSubList").forEach(element => {
            element.classList.add("menu__subList--hidden");
        });
        document.querySelector(".js-menuProjectsList").classList.remove("menu__subList--hidden");
    });

    document.querySelector(".js-menuPhilosophy").addEventListener("mouseenter", () => {
        document.querySelector(".js-menuPhilosophyList").classList.remove("menu__subList--hidden");
    });

    document.querySelector(".js-menuPhilosophy").addEventListener("mouseleave", () => {
        document.querySelector(".js-menuPhilosophyList").classList.add("menu__subList--hidden");
    });

    document.querySelector(".js-menuPhilosophy").addEventListener("focusin", () => {
        document.querySelectorAll(".js-menuSubList").forEach(element => {
            element.classList.add("menu__subList--hidden");
        });
        document.querySelector(".js-menuPhilosophyList").classList.remove("menu__subList--hidden");
    });

    const scrollUp = () => {
        if (window.innerWidth > 1024) {
            window.scrollTo(0, window.scrollY - 100);
        } else {
            window.scrollTo(0, window.scrollY - 210);
        }
    }

    menuLinks.forEach(element => {
        element.addEventListener("click", () => {
            setTimeout(scrollUp, 10);
        });
    });

    arrow.addEventListener("click", () => {
        if (isMenuHidden) {
            showMenu();
        } else {
            arrow.innerHTML = "▼";
            menu.classList.remove("menu--displayed");
        }
        isMenuHidden = !isMenuHidden;
    });
}