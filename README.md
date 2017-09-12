# ToursJS

A vanilla JS plugin that gives users a tutorial like feature tour elements/features of a webpage. 
TourJS works with responsive sites, and has edge detection built in to prevent tour decriptions from ever falling off screen.
The plugin also works on any level of nested elements you have on the page, so you should never need to restructure your document.

## Install

Download and include the plugin files to your document:

```html
<script src="./path/to/downloaded/files/js-tours.js"></script>
```

Then instantiate:
```javascript
new TourJS();
```

Finally, distribute `data-tour-description` attribute across our document like so:
```html
<div data-tour-description="This is element one, and is our first element.">Element One</div>
<div data-tour-description="This is element two, and is our second element.">Element Two</div>
<div data-tour-description="This is element three, and is our third element.">Element Three</div>
```

**That is it!** 
You should now have a responsive feature / element touring experince on your site.

Please note that although the plugin works with nested element, each element's styles needs to not have any style dependencies on parent wrappers. If tour elements do have parent element style dependencies, these styles will be lost once that element is opened by ToursJS.

## [See Demo Here](https://jsfiddle.net/wf3o53mc/)

## Options
Options can be passed to the plugin through the instantator:
```javascript
new TourJS({
  ...options...
});
```

### Here is a list of available options:

**debouce** = Controls how long of a delay before performing responsive re-calculations / re-measure after a screen resize. Default is 260ms.

Thanks, and enjoy!
Devin R. Olsen