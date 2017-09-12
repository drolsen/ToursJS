# ToursJS

A vanilla JS plugin that gives users a tutorial like feature tour elements/features of a webpage. TourJS is responsive an will work at any screen size and/or resize.

## Install

Download and include the plugin files to your document:

<pre>
<script src="./path/to/downloaded/files/js-tours.js"></script>
</pre>

Then instantiate plugin with:
```javascript
new TourJS();
```

Finally, we distribute `data-tour-description` attribute across our document elements, like so:
```html
<div data-tour-description="This is element one, and is our first element.">Element One</div>
<div data-tour-description="This is element two, and is our second element.">Element Two</div>
<div data-tour-description="This is element three, and is our third element.">Element Three</div>
```

And that is it! 
You should now have a responsive feature / element touring experince on your site.

## Options
Options can be passed to the plugin through the instantator:
```javascript
new TourJS({
	...options...
});
```

### Here is a list of available options:

debouce = Controls how long of a delay before performing responsive re-calculations / re-measure after a screen resize. Default is 260ms.

Thanks, and enjoy!
Devin R. Olsen