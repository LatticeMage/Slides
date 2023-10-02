// mermaid-config.js
window.addEventListener('DOMContentLoaded', (event) => {
    fetch('./Funnel.mmd')
        .then(response => response.text())
        .then(data => {
            mermaid.mermaidAPI.initialize({
                startOnLoad: true
            });

            const diagram = mermaid.mermaidAPI.render('mermaid-diagram', data);
            document.getElementById('mermaid-diagram').innerHTML = diagram;
        })
        .catch(error => console.error('Error fetching the diagram file:', error));
});
