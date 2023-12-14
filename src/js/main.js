import '../scss/index.scss';
import './components';

import * as bootstrap from 'bootstrap';
import { DynamicHeight } from './features/DynamicHeight';
import { DisposableHeader } from './features/DisposableHeader';
import { DisposableContent } from './features/DisposableContents';
import { DisposableProjects } from './features/DisposableProjects';

document.addEventListener('DOMContentLoaded', initPages);

function initPages() {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  );

  DynamicHeight.init();
  DisposableHeader.init();
  DisposableContent.init();
  DisposableProjects.init();
}
