import { onCloseButtonClick, onOpenButtonClick } from './js/handlers';
import recepies from './js/recepies.json';
import { refs } from './js/refs';

import { renderRecepiesMarkup } from './js/render-functions';

console.log(recepies);
renderRecepiesMarkup(refs.recepiesList, recepies);
refs.openModalButton.addEventListener('click', onOpenButtonClick);
refs.closeModalButton.addEventListener('click', onCloseButtonClick);
