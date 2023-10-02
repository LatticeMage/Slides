# Markmap Test

Good

<svg id="mindmap" style="width: 100; height: 100"></svg>

<script src="https://unpkg.com/markmap-lib@0.14.4/dist/browser/index.min.js"></script>
<script src="https://unpkg.com/d3@6.7.0/dist/d3.min.js"></script>
<script src="https://unpkg.com/markmap-view@0.14.4/dist/index.min.js"></script>

<script>
  async function loadMarkdown() {
    try {
      const response = await fetch('./plan.mm.md');
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      const markdown = await response.text();

      const { markmap } = window;
      const { Markmap, loadCSS, loadJS, Transformer } = markmap;
      const transformer = new Transformer();
      const { root, features } = transformer.transform(markdown);
      const { styles, scripts } = transformer.getUsedAssets(features);

      if (styles) loadCSS(styles);
      if (scripts) loadJS(scripts, { getMarkmap: () => markmap });

      Markmap.create("#mindmap", null, root);
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  }

  loadMarkdown();
</script>
