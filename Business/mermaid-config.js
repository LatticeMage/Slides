// Ensure Mermaid is configured before trying to render diagrams
mermaid.initialize({
    startOnLoad: true,
    theme: 'default',  // or dark, forest, etc.
});

window.addEventListener('DOMContentLoaded', (event) => {
    fetch('./Funnel.mmd')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            const diagram = mermaid.mermaidAPI.render('mermaid-diagram', data, (svgCode) => {
                document.getElementById('mermaid-diagram').innerHTML = svgCode;
            });
        })
        .catch(error => console.error('Error fetching the diagram file:', error));
});
