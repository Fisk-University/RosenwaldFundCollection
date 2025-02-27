(function($) {
    function fixIframeAspect() {
        $('iframe').each(function () {
            var aspect = $(this).attr('height') / $(this).attr('width');
            $(this).height($(this).width() * aspect);
        });
    }

    function framerateCallback(callback) {
        var waiting = false;
        callback = callback.bind(this);
        return function () {
            if (!waiting) {
                waiting = true;
                window.requestAnimationFrame(function () {
                    callback();
                    waiting = false;
                });
            }
        }
    }

    $(document).ready(function() {
        
        $('header nav').addClass('closed');

        $('header nav').click(function() {
            $(this).toggleClass('open').toggleClass('closed');
        });
        
        var expandString = Omeka.jsTranslate('Expand');
        var collapseString = Omeka.jsTranslate('Collapse');

        $('header nav ul ul').each(function(){
          var childMenu = $(this);
          var parentItem = childMenu.parent('li');
          var toggleButton = $('<button type="button" class="child-toggle"></button>');
          toggleButton.attr('aria-label', expandString);
          parentItem.addClass('parent');
          parentItem.children('a').first().wrap('<div class="parent-link"></div>');
          parentItem.find('.parent-link').append(toggleButton);
        });
        
        $('header nav').on('click', '.child-toggle', function(e) {
          e.stopPropagation();
          var childToggle = $(this);
          var childMenu = childToggle.parents('.parent').first().find('ul').first();
          childMenu.toggleClass('open');
          if (childMenu.hasClass('open')) {
            childToggle.attr('aria-label', collapseString);
          } else {
            childToggle.attr('aria-label', expandString);
          }
        });
        
        // Maintain iframe aspect ratios
        $(window).on('load resize', framerateCallback(fixIframeAspect));
        fixIframeAspect();
        
        // ---- ---- Const ---- ---- //
        let inputBox = document.querySelector('.input-box'),
        navSearch = document.querySelector('.navicon'),
        searchIcon = document.querySelector('.navicon'),
        closeIcon = document.querySelector('.close-icon');

        // ---- ---- Toggle Input (Open/Close) ---- ---- //
        searchIcon.addEventListener('click', () => {
            if (inputBox.classList.contains('open')) {
                inputBox.classList.remove('open');
                navSearch.classList.remove('open');
            } else {
                inputBox.classList.add('open');
                navSearch.classList.add('open');
            }
        });
                
        // ---- ---- Close Input ---- ---- //
        // closeIcon.addEventListener('click', () => {
        // inputBox.classList.remove('open');
        // navSearch.classList.remove('open');
        // });
        
    });
})(jQuery);
