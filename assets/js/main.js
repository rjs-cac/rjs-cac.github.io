/*
	Striped by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$document = $(document);
        //pop-up window
        // Get the modal
        var modal = document.getElementById("myModal");

        // Get the button that opens the modal
        var btn = document.getElementById("button");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks on the button, open the modal
        btn.onclick = function() {
          modal.style.display = "block";
        }

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
          modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
          if (event.target === modal) {
            modal.style.display = "none";
          }
        } 
        //collapsible 
                var coll = document.getElementsByClassName("collapsible");
                var i;

                for (i = 0; i < coll.length; i++) {
                  coll[i].addEventListener("click", function() {
                    this.classList.toggle("active");
                    var content = this.nextElementSibling;
                    if (content.style.display === "block") {
                      content.style.display = "none";
                    } else {
                      content.style.display = "block";
                    }
                  });
                } 
	// Breakpoints.
		breakpoints({
			desktop:   [ '737px',   null     ],
			wide:      [ '1201px',  null     ],
			narrow:    [ '737px',   '1200px' ],
			narrower:  [ '737px',   '1000px' ],
			mobile:    [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Nav.

		// Height hack.
		/*
			var $sc = $('#sidebar, #content'), tid;

			$window
				.on('resize', function() {
					window.clearTimeout(tid);
					tid = window.setTimeout(function() {
						$sc.css('min-height', $document.height());
					}, 100);
				})
				.on('load', function() {
					$window.trigger('resize');
				})
				.trigger('resize');
		*/

		// Title Bar.
			$(
				'<div id="titleBar">' +
					'<a href="#sidebar" class="toggle"></a>' +
					'<span class="title">' + $('#logo').html() + '</span>' +
				'</div>'
			)
				.appendTo($body);

		// Sidebar
			$('#sidebar')
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'sidebar-visible'
				});

})(jQuery);