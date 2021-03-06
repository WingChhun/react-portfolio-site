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
  POSTGRESQL,
  MERN
} from './constants';

import CHERRY from './images/cherry';
import CARD from './images/card';
import REACT_CARD from './images/react_card';
import PORTFOLIO from './images/portfolio';
import OLD_PORTFOLIO from './images/old_portfolio';
import MODERN_PORTFOLIO from './images/modern_portfolio';
import NATOUR from './images/natour';
import ORANGE_RABBIT from './images/orange_rabbit';
import PIXABAY from './images/pixabay';
import RICK_MORTY from './images/rick_morty';
import REDUX_LUMDB from './images/redux_lumdb';
import GLAMOURBYCHERRY from './images/glamourByCherry';
import NAVISMART from './images/navismart';

const mapCarousel = objectData => {
  const carouselArr = Object.keys(objectData).map(key => {
    return { label: key, imgPath: objectData[key] };
  });

  return carouselArr;
};

export default [
  {
    name: 'Glamour By Cherry ',
    sub: 'Full Stack Web Application | MERN',
    website: 'http://www.glamourbycherry.com',
    github: '',

    img: GLAMOURBYCHERRY[Object.keys(GLAMOURBYCHERRY)[0]],
    imgRel: 'GLAMOURBYCHERRY',
    carouselArr: mapCarousel(GLAMOURBYCHERRY),
    tags: [MERN, REDUX, MATERIALUI, SASS],

    isPrivate: true,
    inProgress: false,

    description:
      'A full stack web application being built for Cherry Estrella; incorporating modern web security practices, and using techniques and tools I learned during my internship over the summer.'
  },
  {
    name: 'NaviSmart ',
    sub: 'Full Stack Web Application | MERN',
    website: 'https://navismart.herokuapp.com/',
    github: '',

    img: NAVISMART[Object.keys(NAVISMART)[0]],
    imgRel: 'NAVISMART',
    carouselArr: mapCarousel(NAVISMART),
    tags: [MERN, REDUX, MATERIALUI, SASS],

    isPrivate: true,
    inProgress: true,

    description:
      "A full stack web application being built for my Software Engineering course. Will use Google Maps's Distance Matrix API, Google Maps places,  Twilio, Nexmo in combination to allow a user to have a SMS notification at a desired time that will query to Google Maps."
  },
  {
    name: 'Glamour By Cherry (old)',
    sub: 'Full Stack Web Application',
    website: 'https://wingchhun.github.io/cherryestrella_html/',
    github: 'https://github.com/WingChhun/cherryestrella_html',

    img: CHERRY[Object.keys(CHERRY)[0]],
    imgRel: 'CHERRY',
    carouselArr: mapCarousel(CHERRY),
    tags: [SASS, JAVASCRIPT, NODEJS, MONGODB],

    isPrivate: true,
    inProgress: false,

    description:
      'A full stack web app built for Cherry Estrella using Node, Express, MongoDB. Thi' +
      's site is currently being rebuilt using the MERN stack and better practices.'
  },
  {
    name: 'Personal Portfolio Site',
    sub: 'Single-Page Web Application',
    website: 'https://wingchhun.github.io/react-portfolio-site/',
    github: 'https://github.com/WingChhun/react-portfolio-site',

    img: PORTFOLIO[Object.keys(PORTFOLIO)[0]],
    imgRel: 'PORTFOLIO',
    carouselArr: mapCarousel(PORTFOLIO),
    tags: [REACT, MATERIALUI, SASS],

    isPrivate: false,
    inProgress: false,

    description:
      'My personal portfolio site. Click below to take a peek under the hood.'
  },
  {
    name: 'Old Portfolio Site',
    sub: 'Single-Page Web Application',
    website: 'https://wingchhun.github.io/portfolio.github.io/',
    github: 'https://github.com/WingChhun/portfolio.github.io',

    img: OLD_PORTFOLIO[Object.keys(OLD_PORTFOLIO)[0]],
    imgRel: 'OLD_PORTFOLIO',
    carouselArr: mapCarousel(OLD_PORTFOLIO),
    tags: [HTML, CSS, SASS],

    isPrivate: false,
    inProgress: false,

    description:
      'Previous version of my portfolio site built usin HTML, CSS, SASS, and GULP. Fair' +
      'ly buggy now and has been dropped and depracated.'
  },
  {
    name: 'Older Portfolio Site',
    sub: 'Single-Page Web Application',
    website: 'https://jameschhun.herokuapp.com/',
    github: 'https://github.com/WingChhun/natour.github.io',

    img: MODERN_PORTFOLIO[Object.keys(MODERN_PORTFOLIO)[0]],
    imgRel: 'MODERN_PORTFOLIO',
    carouselArr: mapCarousel(MODERN_PORTFOLIO),
    tags: [HTML, CSS, SASS],

    isPrivate: false,
    inProgress: false,

    description:
      'A project built using HTML, CSS, SASS to showcase intemediate SASS practices and' +
      ' naming conventions.'
  },
  {
    name: 'Concentration Card Game',
    sub: 'Single-Page Web Application',
    website: 'https://wingchhun.github.io/React-ConcentrationCardgame/',
    github: 'https://github.com/WingChhun/React-ConcentrationCardgame',

    img: REACT_CARD[Object.keys(REACT_CARD)[0]],
    imgRel: 'REACT_CARD',
    carouselArr: mapCarousel(REACT_CARD),
    tags: [REACT, JAVASCRIPT, SASS],

    isPrivate: false,
    inProgress: false,

    description:
      'A web app built using React and SASS to practice state logic and AJAX calls in a' +
      ' react app.'
  },
  {
    name: 'Vanilla Card Game',
    sub: 'Single-Page Web Application',
    website: 'https://wingchhun.github.io/Concentration_Card_Game/',
    github: 'https://github.com/WingChhun/Concentration_Card_Game',

    img: CARD[Object.keys(CARD)[0]],
    imgRel: 'CARD',
    carouselArr: mapCarousel(CARD),
    tags: [JAVASCRIPT, SASS],

    isPrivate: false,
    inProgress: false,

    description:
      'A web app built using vanilla Javascript to practice DOM manipulation with AJAX ' +
      'calls.'
  },
  {
    name: 'Rick and Morty',
    sub: 'Single-Page Web Application',
    website: 'https://wingchhun.github.io/RickandMorty/',
    github: 'https://github.com/WingChhun/RickandMorty',

    img: RICK_MORTY[Object.keys(RICK_MORTY)[0]],
    imgRel: 'RICK_MORTY',
    carouselArr: mapCarousel(RICK_MORTY),
    tags: [REACT, JAVASCRIPT, SASS],

    isPrivate: false,
    inProgress: false,

    description:
      'A web application that I built as soon as I finished my first course involving R' +
      'eact.'
  },
  {
    name: 'Pixabay MUI App',
    sub: 'Single-Page Web Application',
    website: 'https://wingchhun.github.io/react-pixabay-material-ui/',
    github: 'https://github.com/WingChhun/react-pixabay-material-ui',

    img: PIXABAY[Object.keys(PIXABAY)[0]],
    imgRel: 'PIXABAY',
    carouselArr: mapCarousel(PIXABAY),
    tags: [REACT, MATERIALUI],

    isPrivate: false,
    inProgress: false,

    description:
      'A web application built using React and Material UI. A code-along project from B' +
      "rad Traversy's video to leran proper ways to use Material"
  },
  {
    name: 'Orange Rabbit',
    sub: 'Single-Page PSD to HTML',
    website: 'https://wingchhun.github.io/orange_rabbit.github.io/',
    github: 'https://github.com/WingChhun/orange_rabbit.github.io',

    img: ORANGE_RABBIT[Object.keys(ORANGE_RABBIT)[0]],
    imgRel: 'ORANGE_RABBIT',
    carouselArr: mapCarousel(ORANGE_RABBIT),
    tags: [HTML, CSS, SASS],

    isPrivate: false,
    inProgress: false,

    description: 'A basic PSD to HTML conversion.'
  },
  {
    name: 'Redux LUMDB',
    sub: 'Web Application',
    website: 'https://wingchhun.github.io/redux-lumdb/',
    github: 'https://github.com/WingChhun/redux-lumdb',

    img: REDUX_LUMDB[Object.keys(REDUX_LUMDB)[0]],
    imgRel: 'REDUX_LUMDB',
    carouselArr: mapCarousel(REDUX_LUMDB),
    tags: [REACT, REDUX, JAVASCRIPT],

    isPrivate: false,
    inProgress: false,

    description:
      "A application built in React / Redux following along Scott Tolinsky's React / Re" +
      'dux for Everyone course.'
  },
  {
    name: 'Natour',
    sub: 'Single-Page Web Application',
    website: 'https://wingchhun.github.io/natour.github.io/',
    github: 'https://github.com/WingChhun/natour.github.io',

    img: NATOUR[Object.keys(NATOUR)[0]],
    imgRel: 'NATOUR',
    carouselArr: mapCarousel(NATOUR),
    tags: [HTML, CSS, SASS],

    isPrivate: false,
    inProgress: false,

    description:
      'A project built using HTML, CSS, SASS to showcase intemediate SASS practices and' +
      ' naming conventions.'
  }
];
