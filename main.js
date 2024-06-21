import Reveal from 'reveal.js';
import RevealNotes from 'reveal.js/plugin/notes/notes';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight';
import RevealMath from 'reveal.js/plugin/math/math';
import RevealPointer from './plugins/reveal-pointer/pointer.esm.js';
import RevealDrawer from './plugins/reveal-drawer/drawer.esm.js';
import RevealJoyCon from 'reveal.js-joycon-plugin';

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
    plugins: [RevealNotes, RevealHighlight, RevealMath.KaTeX, RevealPointer, RevealDrawer(deck), RevealJoyCon],
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
    },
    joycon: {
        cooldown: 200
    }
});

// Disable Reveal keyboard shortcuts for the car game
deck.configure({
    keyboard: {
        73: null, // i
        74: null, // j
        75: null, // k
        76: null // l
    }
});

// automatically load the initial fragment on a slide if the fragment
// has been defined with the 'preload' class
deck.addEventListener('slidechanged', function (event) {
    if (event.currentSlide.querySelectorAll('.preload[data-fragment-index="0"]').length > 0) {
        deck.nextFragment();
    }
});

// if the initial fragment on a slide has been defined with a 'preload' class
// then transition to the previous slide if the fragment is hidden
deck.addEventListener('fragmenthidden', function (event) {
    if (event.fragment.hasAttribute('data-fragment-index') && event.fragment.classList.contains('preload')) {
        if (event.fragment.attributes['data-fragment-index'].value == '0') {
            deck.prev();
        }
    }
});

/* Specific slides config */

const SLIDE_INDEX_WITH_GAME = '5-12';

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
