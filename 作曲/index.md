---
layout: auto_index
---

{% for page in site.pages %}
{% if page.path contains page.dir %}
- [{{ page.basename }}]({{ page.url }})
{% endif %}
{% endfor %}
