jQuery Parallax
===============

A jQuery plugin to enable parallax background images. The code has been extracted
from the [Materialize CSS](https://github.com/Dogfalo/materialize/) project and
improved upon.

## Installation

```bash
npm install jquery.parallax
```

## Usage

Include script then run `parallax()` on an element that contains the images.

```js
$('.hero').parallax();
```

```html
<div class="parallax-container">
    <div class="parallax"><img src="images/parallax1.jpg"></div>
</div>
```

```css
.parallax-container {
  position: relative;
  overflow: hidden;
  height: 500px;
}

.parallax {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}

.parallax img {
    display: none;
    position: absolute;
    left: 50%;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    -webkit-transform: translate3d(0,0,0);
            transform: translate3d(0,0,0);
    transform: translateX(-50%);
}
```

You can easily create a slideshow by adding multiple `img` elements and rotate
with JavaScript.

```js
// Slideshow hero images
$('.parallax-slideshow').exists(function() {
    var slideshow = $(this).children('.parallax');
    slideshow.children('*:gt(0)').hide();

    setInterval(function(){
        slideshow.children().first().fadeOut(1000).next().fadeIn(1000).end().appendTo(slideshow);
    }, 10000);
});
```

## License
MIT
