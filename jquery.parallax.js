(function ($) {
  $.fn.parallax = function () {
    var window_width = $(window).width();

    return this.each(function(i) {
      // Add parallax class
      var $this = $(this);
      $this.addClass('parallax');

      // Make sure first image is displayed
      var $first = $this.children('img').first();
      $first.css('display', 'block');

      // Function for updating the parallax position
      function updateParallax(initial) {
        // Get container height
        if (window_width < 601) {
          var container_height = ($this.height() > 0) ? $this.height() : $this.children('img').height();
        }
        else {
          var container_height = ($this.height() > 0) ? $this.height() : 500;
        }

        // Get image and make is displayed as a block element
        var $img = $this.children('img').first();

        // Calculate parallax distance
        var img_height = $img.height();
        var parallax_dist = img_height - container_height;
        var bottom = $this.offset().top + container_height;
        var top = $this.offset().top;
        var scrollTop = $(window).scrollTop();
        var windowHeight = window.innerHeight;
        var windowBottom = scrollTop + windowHeight;
        var percentScrolled = (windowBottom - top) / (container_height + windowHeight);
        var parallax = Math.round((parallax_dist * percentScrolled));

        // Translate the parallax position
        if ((bottom > scrollTop) && (top < (scrollTop + windowHeight))) {
          $img.css('transform', 'translate3D(-50%,' + parallax + 'px, 0)');
        }
      }

      // Initialize as soon as the first image has loaded
      var stop = function() {
        clearInterval(wait);
        updateParallax(true);
      }

      var wait = setInterval(function() {
        if ($first.prop('naturalHeight')) {
          stop();
        }
      }, 50);

      // With a 5s timeout
      var timeout = setTimeout(function() {
        stop();
      }, 5000);

      // Update on scroll
      $(window).scroll(function() {
        window_width = $(window).width();
        updateParallax(false);
      });

      // Update on resize
      $(window).resize(function() {
        window_width = $(window).width();
        updateParallax(false);
      });
    });
  };
}(jQuery));
