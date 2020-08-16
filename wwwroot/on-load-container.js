function onLoadDo() {
    var script = document.createElement('script');

    script.setAttribute("src", "./dist/bundle.js");
    script.setAttribute("async", "");

    document.body.appendChild(script);
}