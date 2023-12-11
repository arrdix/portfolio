import '../scss/index.scss';

import * as bootstrap from 'bootstrap';
import {SmoothScroll} from './features/smoothScroll';
import {DynamicHeight} from './features/DynamicHeight';
import {DisposableHeader} from './features/DisposableHeader';
import {DisposableContent} from './features/DisposableContents';

document.addEventListener('DOMContentLoaded', initPages);

function initPages() {
  // SmoothScroll.init();
  DynamicHeight.init();
  DisposableHeader.init();
  DisposableContent.init();
}
