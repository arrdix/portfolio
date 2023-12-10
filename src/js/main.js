import '../scss/index.scss';

import * as bootstrap from 'bootstrap';
import { SmoothScroll } from './features/smoothScroll';

document.addEventListener('DOMContentLoaded', initPages);

function initPages() {
  SmoothScroll.init();
}
