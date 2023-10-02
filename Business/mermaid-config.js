// mermaid-config.js
window.addEventListener('DOMContentLoaded', (event) => {
    fetch('./Funnel.mmd')
        .then(response => response.text())
        .then(data => {
            mermaid.initialize({startOnLoad:true});
            mermaid.render('mermaid-diagram', data, (svgCode) => {
                document.getElementById('mermaid-diagram').innerHTML = svgCode;
            });
        })
        .catch(error => console.error('Error fetching the diagram file:', error));
});
