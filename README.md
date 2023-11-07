# site-generator
site generator 11ty base for multi page websites

## About
This repository gives you some build tooling to make it easier to build a multi-page website.

## Folders
Here's a quick overview of the folders in this repository:

- `docs` - This folder contains the HTML output of your site. If you are going to host your site on a server, the contents of this folder is what you should upload to the server. If you are going to use GitHub Pages, you can select to deploy from the `docs` directory by default.
- `node_modules` - ignore this folder. This contains the build tooling and any software needed for it.
- `src` - This is the folder you'll be working in. Think of this folder as the new 'base' path of your website. There are a few folders inside `src` that are important:
    - `_includes` - This folder is where the build tool will look for components. Files in this folder should have the extension `.liquid`. This is a special format based on HTML
