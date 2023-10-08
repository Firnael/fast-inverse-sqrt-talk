import Reveal from 'reveal.js';
import RevealNotes from 'reveal.js/plugin/notes/notes';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight';
import RevealMath from 'reveal.js/plugin/math/math';
import RevealPointer from './plugins/reveal-pointer/pointer.esm.js';
import RevealDrawer from './plugins/reveal-drawer/drawer.esm.js';

import 'reveal.js/dist/reveal.css';
// https://revealjs.com/themes/
import 'reveal.js/dist/theme/blood.css';
import './plugins/reveal-pointer/pointer.css';
import './plugins/reveal-drawer/drawer.css';
import './styles/hljs/atom-one-dark.min.css';
import './styles/style.css';

const deck = new Reveal();

deck.initialize({
    hash: true,
    slideNumber: false,
    plugins: [RevealNotes, RevealHighlight, RevealMath.KaTeX, RevealPointer, RevealDrawer(deck)],
    pointer: {
        key: 'q',
        color: 'red',
        opacity: 0.8,
        pointerSize: 24,
        alwaysVisible: false
    },
    drawer: {
        toggleDrawKey: 'd',
        toggleBoardKey: 't',
        colors: ['#C878E1', '#66ABE1', '#9CC281', '#DCBD87'],
        pathSize: 8
    }
});

// Disable Reveal keyboard shortcuts for the car game
deck.configure({
    keyboard: {
        73: null, // i
        74: null, // j 
        75: null, // k
        76: null  // l
    }
});

/* Specific slides config */

const SLIDE_INDEX_WITH_GAME = '7-15';

/**
 * Listen for the 'slideChanged' Reveal event, and dispatch events for specific slides
 * - slideChanged is fired when the slide is '1-1' (car mini-game slide)
 * - ...
 */
const slideChangedEvent = new Event('slideChanged');
deck.addEventListener('slidechanged', (event) => {
    const slideIndex = `${event.indexh}-${event.indexv}`;
    console.log('Slide Index: ', slideIndex);

    if (slideIndex === SLIDE_INDEX_WITH_GAME) {
        slideChangedEvent.active = true;
    } else {
        slideChangedEvent.active = false;
    }
    document.dispatchEvent(slideChangedEvent);
});
