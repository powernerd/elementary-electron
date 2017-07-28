//The first line should require our cat picture, and
//also assign it to a variable:
var picture = require('cat-picture')

//We actually just want the source data for the picture, so get it, then
//remove the image from the page.
var src = picture.src
picture.remove()

/* Now install a visualization module for drawing polygons by typing npm
install lightning-image-poly --save. Double check that your package.json has a new entry!
Require the module by adding the line: */
var image = require('lightning-image-poly')

//Then render the image data we stored above by creating a new image
//visualization.
var viz = new image('#visualization', null, [src], {hullAlgorithm: 'convex'})

//If you run electron app.js you should see a cat, and be able to draw
//polygons on it with the mouse!
