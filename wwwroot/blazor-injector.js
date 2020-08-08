window.blazorInjector = () => {

    // Se obtiene el elemento del HTML suponiendo q no haya que MDCTabBar se pueda acceder sin ruta mdc...
    const sideTab = new mdc.tabBar.MDCTabBar(document.querySelector('.mdc-tab-bar'));

    sideTab.listen('MDCTabBar:activated', (e) => {
        console.log("Hello Friend. Index of the tab activated: " + e.detail.index);
    });
}