# ToursJS

A vanilla JS plugin that gives users a tutorial like feature tour elements/features of a webpage. TourJS is responsive an will work at any screen size and/or resize.

## Install

Download the plugin files and simply inlcude the ToursJS script in the head of your document:

<pre>
<script src="./path/to/downloaded/files/js-tours.js"></script>
</pre>

Once TourJS has been included you want to instantiate the plugin with:
<pre>
new TourJS();
</pre>

Once ToursJS has been included and instantiated, we distribute the following data attribute:

<pre>data-tour-description</pre>

on any page elements you wish to be part of a touring experince, like so:

<pre>
	<div data-tour-description="This is element one, and is our first element.">Element One</div>
	<div data-tour-description="This is element two, and is our second element.">Element Two</div>
	<div data-tour-description="This is element three, and is our third element.">Element Three</div>
</pre>

And that is it! You should now have a responsive feature / element touring experince on your site.

## Options
debouce = Controls how long of a delay before performing responsive re-calculations / re-measure after a screen resize. Default is 260ms.