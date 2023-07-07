import 'reveal.js/dist/reveal.css';
// https://revealjs.com/themes/
import 'reveal.js/dist/theme/blood.css'; 
import './styles/hljs/atom-one-dark.min.css';
import './styles/style.css';

import Reveal from 'reveal.js';
import RevealNotes from 'reveal.js/plugin/notes/notes';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight';
import RevealMath from 'reveal.js/plugin/math/math';

const deck = new Reveal();
deck.initialize({
    hash: true,
    slideNumber: false,
    plugins: [
        RevealNotes,
        RevealHighlight,
        RevealMath.KaTeX
    ]
});