import {
    HTML,
    SASS,
    CSS,
    JAVASCRIPT,
    MATERIALUI,
    BOOTSTRAP,
    REACT,
    REDUX,
    NODEJS,
    MONGODB,
    POSTGRESQL
} from "./constants";

import CHERRY from "./images/cherry";
import CARD from "./images/card";
import REACT_CARD from "./images/react_card";
import PORTFOLIO from "./images/portfolio";
import OLD_PORTFOLIO from "./images/old_portfolio";
import MODERN_PORTFOLIO from "./images/modern_portfolio";
import NATOUR from "./images/natour";
import ORANGE_RABBIT from "./images/orange_rabbit";
import PIXABAY from "./images/pixabay";
import RICK_MORTY from "./images/rick_morty";

const mapCarousel = (objectData) => {
    const carouselArr = Object
        .keys(objectData)
        .map(key => {
            return {label: key, imgPath: objectData[key]};
        });

    return carouselArr;
}
//TODO: Only use Javascript Tags
export default
[
    {
        name: "Robo Friends",
        website: "https://wingchhun.github.io/natour.github.io/",

        github: "https://github.com/WingChhun/natour.github.io",
        img: NATOUR[Object.keys(NATOUR)[0]],
        imgRel: 'NATOUR',
        carouselArr: mapCarousel(NATOUR),
        tags: [
            JAVASCRIPT, REACT, REDUX
        ],

        isPrivate: true,
        inProgress: false,

        description: "A project build in the MERN Stack for the mesmes"
    }, {
        name: "Robo Friends",
        website: "https://wingchhun.github.io/RickandMorty/",

        github: "https://github.com/WingChhun/RickandMorty",
        img: NATOUR,
        imgRel: 'NATOUR',
        carouselArr: [
            {
                label: "NATOUR cover",
                imgPath: NATOUR
            }, {
                label: "NATOUR cover",
                imgPath: NATOUR
            }, {
                label: "NATOUR cover",
                imgPath: NATOUR
            }
        ],
        tags: [
            JAVASCRIPT, REACT, REDUX
        ],

        isPrivate: false,
        inProgress: false,

        description: "A project build in the MERN Stack for the mesmes"
    }, {
        name: "Robo Friends",
        website: "https://wingchhun.github.io/RickandMorty/",

        github: "https://github.com/WingChhun/RickandMorty",
        img: NATOUR,
        imgRel: 'NATOUR',
        carouselArr: [
            {
                label: "NATOUR cover",
                imgPath: NATOUR
            }, {
                label: "NATOUR cover",
                imgPath: NATOUR
            }, {
                label: "NATOUR cover",
                imgPath: NATOUR
            }
        ],
        tags: [
            JAVASCRIPT, REACT, REDUX
        ],

        isPrivate: false,
        inProgress: false,

        description: "A project build in the MERN Stack for the mesmes"
    }, {
        name: "Robo Friends",
        website: "https://wingchhun.github.io/RickandMorty/",

        github: "https://github.com/WingChhun/RickandMorty",
        img: NATOUR,
        imgRel: 'NATOUR',
        carouselArr: [
            {
                label: "NATOUR cover",
                imgPath: NATOUR
            }, {
                label: "NATOUR cover",
                imgPath: NATOUR
            }, {
                label: "NATOUR cover",
                imgPath: NATOUR
            }
        ],
        tags: [
            JAVASCRIPT, REACT, REDUX
        ],

        isPrivate: false,
        inProgress: false,

        description: "A project build in the MERN Stack for the mesmes"
    }, {
        name: "Robo Friends",
        website: "https://wingchhun.github.io/RickandMorty/",
        github: "https://github.com/WingChhun/RickandMorty",

        img: NATOUR,
        imgRel: 'NATOUR',
        carouselArr: [
            {
                label: "NATOUR cover",
                imgPath: NATOUR
            }
        ],
        tags: [POSTGRESQL],

        isPrivate: false,
        inProgress: false,

        description: "A project build in the MERN Stack for the mesmes"
    }, {
        name: "Robo Friends",
        website: "https://wingchhun.github.io/RickandMorty/",

        github: "https://github.com/WingChhun/RickandMorty",
        img: NATOUR,
        imgRel: 'NATOUR',
        carouselArr: [
            {
                label: "NATOUR cover",
                imgPath: NATOUR
            }, {
                label: "NATOUR cover",
                imgPath: NATOUR
            }, {
                label: "NATOUR cover",
                imgPath: NATOUR
            }
        ],
        tags: [
            JAVASCRIPT, REACT, REDUX
        ],

        isPrivate: false,
        inProgress: false,

        description: "A project build in the MERN Stack for the mesmes"
    }

];