import $ from "jquery";
import AOS from "aos";

let scroll_distance = 500;
let transparent = true;
const nowuiKit = {
  misc: {
    navbar_menu_visible: 0,
  },

  checkScrollForTransparentNavbar: debounce(function () {
    if ($(document).scrollTop() > scroll_distance) {
      if (transparent) {
        transparent = false;
        $(".navbar[color-on-scroll]").removeClass("navbar-transparent");
      }
    } else {
      if (!transparent) {
        transparent = true;
        $(".navbar[color-on-scroll]").addClass("navbar-transparent");
      }
    }
  }, 17),
};

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.

function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    }, wait);
    if (immediate && !timeout) func.apply(context, args);
  };
}

export function init() {
  $(document).ready(function () {
    AOS.init({
      // uncomment below for on-scroll animations to played only once
      // once: true
    }); // initialize animate on scroll library

    scroll_distance =
      $(".navbar[color-on-scroll]").attr("color-on-scroll") || 500;

    // Check if we have the class "navbar-color-on-scroll" then add the function to
    // remove the class "navbar-transparent" so it will transform to a plain color.
    if ($(".navbar[color-on-scroll]").length !== 0) {
      nowuiKit.checkScrollForTransparentNavbar();
      $(window).on("scroll", nowuiKit.checkScrollForTransparentNavbar);
    }
  });

  $(document).on("click", ".navbar-toggler", function () {
    let $toggle = $(this);
    if (nowuiKit.misc.navbar_menu_visible === 1) {
      $("html").removeClass("nav-open");
      nowuiKit.misc.navbar_menu_visible = 0;
      $("#bodyClick").remove();
      setTimeout(function () {
        $toggle.removeClass("toggled");
      }, 550);
    } else {
      setTimeout(function () {
        $toggle.addClass("toggled");
      }, 580);
      let div = '<div id="bodyClick"></div>';
      $(div)
        .appendTo("body")
        .click(function () {
          $("html").removeClass("nav-open");
          nowuiKit.misc.navbar_menu_visible = 0;
          setTimeout(function () {
            $toggle.removeClass("toggled");
            $("#bodyClick").remove();
          }, 550);
        });

      $("html").addClass("nav-open");
      nowuiKit.misc.navbar_menu_visible = 1;
    }
  });

  // Smooth scroll for links with hashes
  $("a.smooth-scroll").click(function (event) {
    // On-page links
    if (
      window.location.pathname.replace(/^\//, "") ===
        this.pathname.replace(/^\//, "") &&
      window.location.hostname === this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          1000,
          function () {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
              // Checking if the target was focused
              return false;
            } else {
              $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            }
          }
        );
      }
    }
  });
}
