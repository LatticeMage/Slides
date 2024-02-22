import os
import re

def replace_layout_in_md_files(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(".md"):
                filepath = os.path.join(root, file)
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                updated_content = re.sub(r'layout: directory', r'layout: page/note/directory', content)
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(updated_content)

# Replace layout in all Markdown files recursively from the current directory
replace_layout_in_md_files('.')
