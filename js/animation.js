{
    const image = document.querySelector(".js-animation");
    const offsetX = 32;
    const offsetY = 32;
    let isWalking = false;
    let position = {
        x: 50,
        y: 50,
    }

    let destination = {
        x: 100,
        y: 100,
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
        if (position.x === destination.x) {
            if (position.y === destination.y) {
                isWalking = false;
                setNewDestination();
                doTheStep = false;
                direction = "B";

            } else {
                if (position.y > destination.y) {
                    position.y--;
                    direction = "T";
                } else {
                    position.y++;
                    direction = "B";
                }
            }
        } else {
            if (position.x > destination.x) {
                position.x--;
                direction = "L";
            } else {
                position.x++;
                direction = "R";
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
        let availableWidth = window.innerWidth - 100;
        let availableHeight = window.innerHeight + window.pageYOffset - 100;
        destination.x = Math.floor(Math.random() * availableWidth) + 50;
        destination.y = Math.floor(Math.random() * availableHeight) + 50;
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