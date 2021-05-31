{
    const image = document.querySelector(".js-animation");
    const offsetX = 32;
    const offsetY = 32;
    let isFiestMessage = true;

    let getMargin = () => { return (window.innerWidth - 900) / 2; }

    let position = {
        x: window.innerWidth / 2,
        y: 400,
    }

    let destination = {
        x: getMargin() / 2,
        y: 545,
    }


    const hideInformation = () => {
        const bubble = document.querySelector(".js-bubble");
        bubble.classList.add("bubble--hidden");
        bubble.classList.remove("bubble--left");
        bubble.classList.remove("bubble--right");
    }

    document.querySelector(".js-bubble").addEventListener("click", () => {
        hideInformation();
    });

    const getNewText = () => {
        const texts = [
            "Marcin can play the guitar.",
            "Marcin comes from Poland but has lived in Germany, Scotland, England, the Netherlands and France.",
            "Marcin started learning programming when he was 7 years old.",
            "Marcin knows how to play the guitar and learns to play the violin and keyboards.",
            "Marcin speaks Polish natively, but he can also communicate in English, German and basic Spanish and Japanese.",
            "Marcin started learning programming with Turbo Pascal",
            "Marcin learned programming in C, C ++, C #, Java, JS, PHP, Bash as a hobby.",
            "Marcin has experience in working with Adobe software such as Photoshop, Audition, Premiere and After Effects",
            "Marcin loves to run and train calisthenics.",
            "Marcin's favorite bands are Thirty Seconds to Mars and Twenty One Pilots",
        ];
        const random = Math.floor(Math.random() * texts.length);
        return texts[random];
    }

    const showNewInformation = () => {
        if (isFiestMessage) {
            isFiestMessage = !isFiestMessage;
        } else {
            const bubble = document.querySelector(".js-bubble");
            bubble.classList.remove("bubble--hidden");
            if (position.x > window.innerWidth / 2) {
                bubble.classList.add("bubble--right");
                bubble.style.left = position.x - 215 + "px";
            } else {

                bubble.classList.add("bubble--left");
                bubble.style.left = position.x - 15 + "px";
            }
            document.querySelector(".js-bubble__text").innerHTML = getNewText();
            bubble.style.top = position.y - bubble.clientHeight - 60 + "px";
            console.log(bubble.clientHeight);
        }
    }

    const getSprite = (direction = "B", doTheStep = false) => {
        let url = "img/frames/";
        switch (direction) {
            case "B":
                url += "b";
                break;
            case "T":
                url += "t";
                break;
            case "L":
                url += "l";
                break;
            case "R":
                url += "p";
                break;
            default:
                url += "b";
        }

        let frame = 0;

        const d = new Date();
        const ms = d.getMilliseconds();
        const moduloForFrame = ms % 400;

        if (doTheStep) {
            switch (true) {
                case moduloForFrame < 100:
                    frame = 0;
                    break;
                case moduloForFrame < 200:
                    frame = 1;
                    break;
                case moduloForFrame < 300:
                    frame = 0;
                    break;
                case moduloForFrame < 400:
                    frame = 2;
                    break;
            }
        }
        return url + frame + ".png";
    }

    const walk = () => {
        isWalking = true;
        let doTheStep = true;
        let direction = "B";
        if (position.y === destination.y) {
            if (position.x === destination.x) {
                isWalking = false;
                showNewInformation();
                setNewDestination();
                doTheStep = false;
                direction = "B";

            } else {
                if (position.x > destination.x) {
                    position.x--;
                    direction = "L";
                } else {
                    position.x++;
                    direction = "R";
                }
            }
        } else {
            if (position.y > destination.y) {
                position.y--;
                direction = "T";
            } else {
                position.y++;
                direction = "B";
            }
        }
        image.src = getSprite(direction, doTheStep);
        if (doTheStep) {
            image.style.top = position.y - offsetY + "px";
            image.style.left = position.x - offsetX + "px";
            setTimeout(walk, 10);
        }
    }

    const initiateNextMove = () => {
        hideInformation();
        walk();
    }

    const setNewDestination = () => {
        destination.x = Math.floor(Math.random() * (getMargin() - 90)) + 45;
        destination.y = Math.floor(Math.random() * (document.body.scrollHeight - 700)) + 700;
        if (Math.random() > 0.5) {
            destination.x += (900 + getMargin());
        }
        console.log("X: " + destination.x + "\nY: " + destination.y + "\nM: " + getMargin());
        setTimeout(initiateNextMove, 60000);
    }

    const init = () => {
        image.style.top = position.y - offsetY + "px";
        image.style.left = position.x - offsetX + "px";
        walk();
    }

    if (window.innerWidth > 767) {
        init();
    }


}