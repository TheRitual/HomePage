{
    const image = document.querySelector(".js-animation");
    const offsetX = 32;
    const offsetY = 32;
    let isFirstRun = true;
    let isWalking = true;
    let getMargin = () => { return (window.innerWidth - 900) / 2; }

    let position = {
        x: window.innerWidth / 2,
        y: 400,
    }

    let destination = {
        x: getMargin() / 2,
        y: 545,
    }

    image.addEventListener("click", () => {
        if (!isWalking) {
            showNewInformation();
        }
    });

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
            "Marcin learned programming in C, C++, C#, Java, JS, PHP, Bash and few other programming languages as a hobby.",
            "Marcin has experience in working with Adobe software such as Photoshop, Audition, Premiere and After Effects",
            "Marcin loves running. He also trains calisthenics.",
            "Marcin's favorite bands are Thirty Seconds to Mars and Twenty One Pilots",
            "Marcin likes to read Manga (japanese comics).",
            "Marcin co-organizes Gorcon - a small fantasy convention in Gorzów Wielkopolski",
            "Marcin hitchhiked across Europe many times.",
            "MGIK stands for Marcin Grzegorz Izaak Kawczyński which is full Marcin's name including name from confirmation.",
            "Marcin studied Robotics, Computer Science and Film Production, but for personal reasons he has to leave his studies.",
            "Marcin grew up in the theater environment since childhood, which is why he loves theater with all his heart",
            "Marcin loves musicals. Together with his friends, they founded an online group of musical lovers, which consists of several hundred people.",
            "During his studies, Marcin was a member of I.A.E.S.T.E. - non-profit organizations conducting international exchanges for apprenticeships.",
            "In 2014, Marcin co-organized CaseWeek. A nationwide series of case-study classes conducted by professional companies for students of technical universities.",
            "While in high school, Marcin sang and played guitar in rock bands.",
            "When Marcin was younger, he regularly went to scout camps. However, he never joined the scouting movement.",
            "Marcin loves Storytelling. In his spare time, he writes a fantasy novel, works on screenplays for films and series, and writes songs.",
            "Marcin has worked several times on film sets. Cinematography is his passion.",
            "One of the most important values for Marcin is development and solid education.",
            "Hi! I am Arya! Marcin created me in one day!",
            "You think I can marry my creator?",
            "Have a nice day!",
            "Marcin is not throwing away his shot!",
            "Marcin is a peaceful person who avoids aggression. He is also very patient.",
            "I think you look so pretty today!",
            "What's your favorite dinosaur?",
            "My favorite dinosaur is Triceratops and Marcin's is Velociraptor",
            "Marcin's favorite directors are Taika Waititi, Edgar Wright and Tim Burton.",
            "For a short time, Marcin studied in the UK at Buckinghamshire New University.",
            "Marcin's favorite cartoon is Gravity Falls. He even has a tattoo associated with this animation.",
            "Marcin loves Star Wars since he was a child. I like'em too! But only a \"Star\" part.",
            "Remember to drink water! People drink water!",
            "To understand recursion, you must understand recursion first.",
            "As a real programmer my blood type is C.",
            "If the two telepaths start reading each other's thoughts, they will die of the stack overflow.",
            "People are divided into those who make backups and those who will make backups.",
            "I use gaussian blur to have a beautiful skin complexion",
            "Will you share your Netflix account with me?",
            "I want to change the world but at first, I need its source code",
            "I've got dynamically assigned IQ.",
            "A good programmer is someone who looks both ways before crossing a one-way street",
            "I'm looking for Schrödinger's Cat... Dead or Alive...",
            "A programmer is such a coffee to code converter. Isn't it?",
            "Java programmers wear glasses, because they can't C#."
        ];
        const random = Math.floor(Math.random() * texts.length);
        return texts[random];
    }

    const showNewInformation = () => {
        if (!isFirstRun) {
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
        isWalking = true;
        image.style.cursor = "no-drop";
        hideInformation();
        walk();
        if (isFirstRun) { isFirstRun = !isFirstRun; }
    }

    const setNewDestination = () => {
        destination.x = Math.floor(Math.random() * (getMargin() - 100)) + 35;
        destination.y = Math.floor(Math.random() * (document.body.scrollHeight - 700)) + 700;
        if (Math.random() > 0.5) {
            destination.x += (900 + getMargin());
        }
        console.log("X: " + destination.x + "\nY: " + destination.y + "\nM: " + getMargin());
        isWalking = false;
        image.style.cursor = "help";
        setTimeout(initiateNextMove, isFirstRun ? 10 : 30000);
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