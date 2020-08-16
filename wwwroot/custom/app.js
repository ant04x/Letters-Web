// Ripple

import { MDCRipple } from '@material/ripple';
const ripple = new MDCRipple(document.querySelector('.foo-button'));

// TopAppBar

import { MDCTopAppBar } from '@material/top-app-bar';

const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);

// Tab

import { MDCTab } from '@material/tab';

const tab = new MDCTab(document.querySelector('.mdc-tab'));

// List

import { MDCList } from '@material/list';

const list = new MDCList(document.querySelector('.mdc-list'));

const listItemRipples = list.listElements.map((listItemEl) => new MDCRipple(listItemEl));

// Checkbox

import { MDCFormField } from '@material/form-field';
import { MDCCheckbox } from '@material/checkbox';

const checkbox = new MDCCheckbox(document.querySelector('.mdc-checkbox'));
const formField = new MDCFormField(document.querySelector('.mdc-form-field'));
formField.input = checkbox;

// FAB

    // import { MDCRipple } from '@material/ripple';

const fabRipple = new MDCRipple(document.querySelector('.mdc-fab'));

// Textfield

import { MDCTextField } from '@material/textfield';

const textField = new MDCTextField(document.querySelector('.mdc-text-field'));

// Register TextField on AutoInit
// import mdcAutoInit from '@material/auto-init';
// mdcAutoInit.register('MDCTextField', MDCTextField);
// mdcAutoInit.register('MDCTabBar', MDCTabBar);
