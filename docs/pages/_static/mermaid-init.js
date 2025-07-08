document.addEventListener("DOMContentLoaded", function () {
    window.mermaidInitializer = window.mermaidInitializer || {
        theme: "default",
        startOnLoad: true
    };

    mermaid.initialize(window.mermaidInitializer);

    window.addEventListener("load", function () {
        mermaid.contentLoaded();
    });
});
