var GLOBAL = {};
GLOBAL.DotNetReference = null;
GLOBAL.SetDotnetReference = function (pDotNetReference) {
    if (GLOBAL.DotNetReference === null) {
        GLOBAL.DotNetReference = pDotNetReference;
    }
};

window.blazorInjector = () => {

    // Se obtiene el elemento del HTML suponiendo q no haya que MDCTabBar se pueda acceder sin ruta mdc...
    const sideTab = new mdc.tabBar.MDCTabBar(document.querySelector('.mdc-tab-bar'));

    sideTab.listen('MDCTabBar:activated', (e) => {

        console.log("Hello Friend. Index of the tab activated: " + e.detail.index);

            // DotNet.invokeMethod('UpdateIcons', "sended");
            // DotNet.invokeMethod('Letters', 'UpdateIcons', e.detail.index.toString());
        // GLOBAL.DotNetReference.invokeMethod('UpdateIcons', e.detail.index.toString());
            // DotNet.dispose();
    });
}