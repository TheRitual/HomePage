{
    const image = document.querySelector(".js-animation");
    const offsetX = 32;
    const offsetY = 32;
    let isWalking = false;
    let position = {
        x: 500,
        y: 400,
    }

    let getMargin = () => {return (window.innerWidth - 900) /2 ;}

    let destination = {
        x: getMargin() / 2,
        y: 545,
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

    const setNewDestination = () => {
        destination.x = Math.floor(Math.random() * (getMargin() - 70)) + 70;
        destination.y = Math.floor(Math.random() * (document.body.scrollHeight - 700)) + 600;
        if (Math.random() > 0.5) {
            destination.x += (900 + getMargin());
        }
        console.log("X: " + destination.x + "\nY: " + destination.y + "\nM: " + getMargin());
        setTimeout(walk, 3000);
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