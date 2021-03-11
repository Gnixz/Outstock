$(function() {
  //===== WOW JS =====//
  new WOW().init();

  //===== Owl Carousel =====//
  $(document).ready(function () {
    $(".owl-carousel").owlCarousel();
  });
  $(".owl-trending").owlCarousel({
    loop: true,
    items: 1,
    dots: false,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      576: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });
  $(".owl-sale").owlCarousel({
    loop: true,
    items: 1,
    dots: false,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      576: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1200: {
        items:5,
      },
    },
  });
  $(".owl-client").owlCarousel({
    loop: true,
    items: 1,
    dots: false,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      576: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 4,
      },
      1200: {
        items:5,
      },
    },
  });
  $(".owl-posts").owlCarousel({
    loop: true,
    items: 1,
    dots: false,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });
  $(".owl-related").owlCarousel({
    loop: true,
    items: 1,
    dots: false,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      768: {
        items: 2,
      },
    },
  });
  $(".owl-testimonials").owlCarousel({
    loop: true,
    items: 1,
    dots: true,
    margin: 0,
    center: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      768: {
        items: 2,
        dots: true,
      },
      1200: {
        items: 3,
        dots: true,
      }
    },
  });
  $(".owl-blogDetails").owlCarousel({
    loop: true,
    items: 1,
    dots: false,
    margin: 15,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      768: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });

  //===== Scroll Sticky Menu =====//
  let header = document.querySelector(".header")
  window.addEventListener('scroll', () => {
    header.classList.toggle("sticky", window.scrollY > 0);

  })

  //===== Menu Active =====//
  var cururl = window.location.pathname;
  var curpage = cururl.substr(cururl.lastIndexOf('/') + 1);
  var hash = window.location.hash.substr(1);
  if((curpage == "" || curpage == "/" || curpage == "admin") && hash=="")
      {
      //$("nav .navbar-nav > li:first-child").addClass("active");
      } else {
          $(".header__menu-list li").each(function()
      {
          $(this).removeClass("active");
      });
      if(hash != "")
          $(".header__menu-list li a[href*='"+hash+"']").parents("li").addClass("active");
      else
      $(".header__menu-list li a[href*='"+curpage+"']").parents("li").addClass("active");
  }

  //===== Click Toggle Menu =====//
  let body = document.querySelector("body")
  let menuList = document.querySelector(".header__menu-list")
  let overlay = document.querySelector(".overlay-header")
  let button = document.querySelector(".header__menu-button")
  let icon = document.querySelectorAll(".list__item-icon")
  let close = document.querySelector(".fa-times")
  button.addEventListener("click", () => {
    body.classList.add('overflow-hidden')
    menuList.classList.add('show')
    overlay.classList.add('active')
  })
  overlay.addEventListener("click", () => {
    body.classList.remove('overflow-hidden')
    menuList.classList.remove('show')
    overlay.classList.remove('active')
    $('.submenu').removeClass('show');
		$('.fa-chevron-down').removeClass('rotate');
  })
  close.addEventListener("click", () => {
    close.classList.add('closing')
    body.classList.remove('overflow-hidden')
    menuList.classList.remove('show')
    overlay.classList.remove('active')
    $('.submenu').removeClass('show');
		$('.fa-chevron-down').removeClass('rotate');
  })

  // Click Show Submenu //
  icon.forEach(function(item) {
		item.addEventListener('click', function() {
			this.nextElementSibling.classList.toggle('show');
			this.querySelector('.fa-chevron-down').classList.toggle('rotate');
			$('.list__item-icon').not(this).next().removeClass('show');
			$('.list__item-icon').not(this).find('.fa-chevron-down').removeClass('rotate');
		});
	});

  

  //===== Search =====//
  let iconSearch = document.querySelector(".icon__item-search")
  let search = document.querySelector(".search")
  let overlaySearch = document.querySelector(".overlay-search")
  let closeSearch = document.querySelector(".search__form-close")
  iconSearch.addEventListener('click', () => {
    search.classList.add('open')
    overlaySearch.classList.add('active')
  })
  overlaySearch.addEventListener('click', () => {
    search.classList.remove('open')
    overlaySearch.classList.remove('active')
  })
  closeSearch.addEventListener('click', () => {
    search.classList.remove('open')
    overlaySearch.classList.remove('active')
  })

  //===== NivoSlider =====//
  $("#slider").nivoSlider({
		effect: 'random',                 // Specify sets like: 'fold,fade,sliceDown' 
		slices: 15,                       // For slice animations 
		boxCols: 8,                       // For box animations 
		boxRows: 4,                       // For box animations 
		animSpeed: 1000,                   // Slide transition speed 
		pauseTime: 4000,                  // How long each slide will show 
		startSlide: 0,                    // Set starting Slide (0 index) 
		directionNav: false,               // Next & Prev navigation 
		controlNav: true,                 // 1,2,3... navigation 
		controlNavThumbs: false,          // Use thumbnails for Control Nav 
		pauseOnHover: true,               // Stop animation while hovering 
		manualAdvance: false,             // Force manual transitions 
		// prevText: '<i class="fa fa-angle-left"></i>',   // Prev directionNav text 
		// nextText: '<i class="fa fa-angle-right"></i>',  // Next directionNav text 
		randomStart: true,               // Start on a random slide 
		beforeChange: function () { },       // Triggers before a slide transition 
		afterChange: function () { },        // Triggers after a slide transition 
		slideshowEnd: function () { },       // Triggers after all slides have been shown 
		lastSlide: function () { },          // Triggers when last slide is shown 
		afterLoad: function () { }           // Triggers when slider has loaded 
	});

  //===== Isotope =====//
  var $grid = $(".grid").imagesLoaded(function () {
    // init Isotope after all images have loaded
    $grid.isotope({
      itemSelector: ".grid-item",
      percentPosition: true,
      gutter: 0,
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: ".grid-sizer",
      },
    });
  });
  //===== Isotope click function =====//
  $(".iso-nav a").click(function () {
    $(".iso-nav a").removeClass("active");
    $(this).addClass("active");

    var selector = $(this).attr("data-filter");
    console.log(selector);
    $(".grid").isotope({
      filter: selector,
    });
    return false;
  });

  
  //===== Back to Top =====//
  // Show or hide the sticky footer button
  $(window).on("scroll", function (event) {
    if ($(this).scrollTop() > 600) {
      $(".back-to-top").fadeIn(200);
    } else {
      $(".back-to-top").fadeOut(200);
    }
  });
  // Animate the scroll to top
  $(".back-to-top").on("click", function (event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      400
    );
  });


  //===== Cart JS =====//
  $(".form__quantity-cart").append('<div class="dec cart__button">-</div><div class="inc cart__button">+</div>');
	$(".cart__button").on("click", function () {
		var $button = $(this);
		var oldValue = $button.parent().find("input").val();
		if ($button.text() == "+") {
			var newVal = parseFloat(oldValue) + 1;
		} else {
			// Don't allow decrementing below zero
			if (oldValue > 0) {
				var newVal = parseFloat(oldValue) - 1;
			} else {
				newVal = 0;
			}
		}
		$button.parent().find("input").val(newVal);
	});
  

  //===== Show Password =====//
  $(".toggle-password").click(function() {
    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });


  //===== Range Slider =====//
  $("#slider-range").slider({
		range: true,
		min: 0,
		max: 500,
		values: [75, 300],
		slide: function (event, ui) {
			$("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
		}
	});
	$("#amount").val("$" + $("#slider-range").slider("values", 0) +
		" - $" + $("#slider-range").slider("values", 1));


  //===== Pagination active =====//
  $(document).ready(function () {
    $(".pagination__list li").click(function () {
      $("li").removeClass("active");
      $(this).addClass("active");
    });
  });

  
  
});