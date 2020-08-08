window.blazorInjector = () => {

    // Se obtiene el elemento del HTML suponiendo q no haya que MDCTabBar se pueda acceder sin ruta mdc...
    const sideTab = new mdc.tab.MDCTabFoundation(document.querySelector('.mdc-tab-bar'));

    sideTab.init();

    console.log("Listeners loaded.");

    sideTab.handleClick(() => {
        console.log("Hello there!");
    });

}