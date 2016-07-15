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
          var $galleryWrapper = $('.gallery .camera_wrap'),
              $gallery = $('.gallery'),
              getNav = document.querySelector('.js-main-nav'),
              $homePage = $('.home'),
              headroom  = new Headroom(getNav, {
                'tolerance': 0,
                'offset': 0,
                'classes': {
                  'initial': '',
                  'pinned': 'slideInDown',
                  'unpinned': 'slideOutUp'
                }
              }),
              $imgsrc = $('#fullpagelanding img'),
              imageArray = [];
              

          // Homepage full image slider
          $imgsrc.each(function() {
            $(this).addClass('big',500).removeClass('big',500);
            imageArray.push($(this).attr('src'));
          });  

          // Initialise backstretch with array of images
          if($homePage.length){
            $.backstretch(imageArray, {duration: 6000, fade: 750});
          }

          // Initialise headroom nav
          headroom.init();

          // Initialise gallery
          if($gallery.length){
            $galleryWrapper.camera({
              fx: 'simpleFade',
              opacityOnGrid: true,
              navigation: true,
              navigationHover: false,
              pagination: false,
              playPause: false,
              thumbnails: true
            });
          }

      });

      // The rest of your code goes here!
      var $contactPage = $('.contact'),
          $mainNavMenu = $('.navbar-header .menu'),
          $mainNav = $('.navbar-default'),
          handleToggleMainNav = function () {   
            $mainNav.toggleClass('menu-active');
          };

      // Re-structure HTML on the contact page - to fix dynamic code on DEV side 
      if($contactPage.length){
        var $formControlWrap = $('.wpcf7-form-control-wrap'),
            $formFields = $('.form-field'),
            $icons = $('.icons');

        $formFields.each(function() {
          $(this).find($icons).appendTo($(this).find($formControlWrap));
        });
      }

      //LANGUAGE TOGGLE MENU
      $mainNavMenu.on('click', handleToggleMainNav);

  }
));