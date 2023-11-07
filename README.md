# site-generator
site generator 11ty base for multi page websites

## About
This repository gives you some build tooling to make it easier to build a multi-page website.

## Quick Start
In the terminal, type the following command and press Enter.
`npm start`
This will start the dev server. A window should pop up in the bottom right corner of the screen with the text 'Your application running on port 8080 is available.' or something similar. Click the 'Open in Browser' button to open your site in a new tab.
Now try editing `index.html` in the `src` folder and save it. You should see the site preview update.

## Folders
Here's a quick overview of the folders in this repository:

- `docs` - This folder contains the HTML output of your site. If you are going to host your site on a server, the contents of this folder is what you should upload to the server. If you are going to use GitHub Pages, you can select to deploy from the `docs` directory by default. This folder is set up to not be committed to Git by default. If you want to publish your site on Pages without a deploy system, remove `docs` from the `.gitignore` file.
- `node_modules` - ignore this folder. This contains the build tooling and any software needed for it.
- `src` - This is the folder you'll be working in. Think of this folder as the new 'base' path of your website. There are a few folders inside `src` that are important:  
    - `_includes` - This folder is where the build tool will look for components. Files in this folder should have the extension `.liquid`. This is a special format based on HTML with some extra features. This folder includes a few sample components:
        - `footer.liquid` and `header.liquid` - These components could be used for setting up consistent navigation across your website.
        - `head.liquid` - This component contains a `<head>` element. You can link all your stylesheets, fonts, scripts, etc. in this file so they will be available on every page.
    - `assets` - Use this folder for any files that are not HTML. This folder should contain all your CSS, images, scripts, etc. 
    **Important: Because of the way that static site generators work, your images, CSS, scripts will need to be in this folder! If they are not placed in this folder, they will not be copied over to the build directory**

## Using includes
One of the cool parts of using a static site generator is the ability to set up repeatable components.
To create an include:
### 1. Create a template in the `_includes` folder.
This should be a `.liquid` file. Place whatever HTML content you would like to be in the component in this file.
### 2. Use the component in your HTML files
To place the component in an HTML file, we use a special Liquid tag:

`{% include 'filename' %}`

'filename' should be inside single quotes, and should be the same as the filename of your template you created in step 1.

### 3. Adding custom properties to components (advanced)

Sometimes, you might want to place a component multiple times with the same HTML elements, but different content. For example you might have a repeated 'tile' element with a specific layout and styling. You can add custom properties to your `include` tags as follows:

`{% include 'myComponent', title:'My Title', description:'some description text' %}`

This set up 2 properties: one for a title and one for a description. To use these properties in our component (the `.liquid` file in `_includes`), you can put the property name surrounded by two squiggly brackets: `{{propertyname}}`

```
_includes/myComponent.liquid

<article class="component-tile">
    <h3>{{title}}</h3>
    <p>{{description}}</p>
</article>
```

In addition to using properties for text (shown above), you can also use them for URLs, image URLs, class names, etc. - basically any piece of text in your component can be turned into a property. 


## Troubleshooting
If you get an error when running `npm start`, try the following steps:
1. In the terminal, type `npm install` and press Enter. This will reinstall the build tools. Once it has finished installing, try `npm start` again.
2. Try deleting the `node_modules` folder (right click and select Delete Permanently), then follow the instructions in step 1 to reinstall the build tools.