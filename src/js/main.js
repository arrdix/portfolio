import '../scss/index.scss';

import * as bootstrap from 'bootstrap';
import { DynamicHeight } from './features/DynamicHeight';
import { DisposableHeader } from './features/DisposableHeader';
import { DisposableContent } from './features/DisposableContents';

document.addEventListener('DOMContentLoaded', initPages);

function initPages() {
  DynamicHeight.init();
  DisposableHeader.init();
  DisposableContent.init();
}
