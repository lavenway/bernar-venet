   // IIFE - Immediately Invoked Function Expression
(function(bernarvenet) {
  
  // The global jQuery object is passed as a parameter
  'use strict';
  $ = $ || jQuery;

  bernarvenet(window.jQuery, window, document);

  }(function($, window, document) {
      'use strict';
      $ = $ || jQuery;

      // The $ is now locally scoped 
      $(function() {
          // The DOM is ready!
          var getNav = document.querySelector('.js-main-nav'),
              homePage = $('.home'),
              headroom  = new Headroom(getNav, {
                "tolerance": 0,
                "offset": 0,
                "classes": {
                  "initial": "",
                  "pinned": "slideInDown",
                  "unpinned": "slideOutUp"
                }
              }),
              imgsrc = $('#fullpagelanding img'),
              imageArray = [];
              

          // Homepage full image slider
          $(imgsrc).each(function() {
            $(this).addClass("big",500).removeClass("big",500);
            imageArray.push($(this).attr("src"));
          });  

          // Initialise backstretch with array of images
          if(homePage.length){
            $.backstretch(imageArray, {duration: 6000, fade: 750});
          }

          // Initialise headroom nav
          headroom.init();

      });

      // The rest of your code goes here!

  }
));