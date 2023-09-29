import Reveal from 'reveal.js';
import RevealNotes from 'reveal.js/plugin/notes/notes';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight';
import RevealMath from 'reveal.js/plugin/math/math';

import 'reveal.js/dist/reveal.css';
// https://revealjs.com/themes/
import 'reveal.js/dist/theme/blood.css';
import './styles/hljs/atom-one-dark.min.css';
import './styles/style.css';

const deck = new Reveal();

deck.initialize({
    hash: true,
    slideNumber: false,
    plugins: [RevealNotes, RevealHighlight, RevealMath.KaTeX]
});

// deck.configure({
//     keyboard: {
//         83: null, // S
//         88: () => RevealNotes.toggleNotes() // X
//     }
// });

const SLIDE_INDEX_WITH_GAME = '7-13';

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
