import * as mdc from 'material-components-web';

// TopAppBar
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new mdc.topAppBar.MDCTopAppBar(topAppBarElement);

// Icon Buttons
const iconButtonRipple = new mdc.ripple.MDCRipple(document.querySelector('.mdc-icon-button'));
iconButtonRipple.unbounded = true;

// Textfield
const textField = new mdc.textField.MDCTextField(document.querySelector('.mdc-text-field'));

// List
const list = new mdc.list.MDCList(document.querySelector('.mdc-list'));

// Checkbox
const checkbox = new mdc.checkbox.MDCCheckbox(document.querySelector('.mdc-checkbox'));
const formField = new mdc.formField.MDCFormField(document.querySelector('.mdc-form-field')); // BUG SOLVED
formField.input = checkbox;

// Ripple for List
const listItemRipples = list.listElements.map((listItemEl) => new mdc.ripple.MDCRipple(listItemEl));


// Tab
const tabs = [].map.call(document.querySelectorAll('.mdc-tab'), function (el) {
    return new mdc.tab.MDCTab(el);
});

// Tab Bar
const tabBar = new mdc.tabBar.MDCTabBar(document.querySelector('.mdc-tab-bar'));

// Tab Indicator
const tabIndicators = [].map.call(document.querySelectorAll('.mdc-tab-indicator'), function (el) {
    return new mdc.tabIndicator.MDCTabIndicator(el);
});

// Tab Scroller
const tabScroller = new mdc.tabScroller.MDCTabScroller(document.querySelector('.mdc-tab-scroller'));


// Cards
/*const selector = '.mdc-button, .mdc-icon-button, .mdc-card__primary-action';
const ripples = [].map.call(document.querySelectorAll(selector), function (el) {
    return new mdc.ripple.MDCRipple(el);
});*/

// FAB
const fabRipple = new mdc.ripple.MDCRipple(document.querySelector('.mdc-fab'));