import $ from "jquery";
import AOS from "aos";

const nowuiKit = {
  transparent: true,
  scroll_distance: 500,
  navbar_menu_visible: 0,
  checkScrollForTransparentNavbar: debounce(function () {
    if ($(document).scrollTop() > nowuiKit.scroll_distance) {
      if (nowuiKit.transparent) {
        nowuiKit.transparent = false;
        $(".navbar[color-on-scroll]").removeClass("navbar-transparent");
      }
    } else {
      if (!nowuiKit.transparent) {
        nowuiKit.transparent = true;
        $(".navbar[color-on-scroll]").addClass("navbar-transparent");
      }
    }
  }, 17),
};

const startAOSLibrary = (function () {
  let inited = false;
  return function () {
    if (inited) {
      AOS.refresh();
    } else {
      inited = true;
      AOS.init({
        // uncomment below for on-scroll animations to played only once
        // once: true
      }); // initialize animate on scroll library
    }
  };
})();

export function init() {
  startAOSLibrary();
  checkAndChangeNavbarState();
  handleNavbarTogglerClick();
  handleInternalLinkClick();
}

function debounce(func, wait, immediate) {
  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
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

function checkAndChangeNavbarState() {
  nowuiKit.scroll_distance =
    $(".navbar[color-on-scroll]").attr("color-on-scroll") || 500;
  if ($(".navbar[color-on-scroll]").length !== 0) {
    nowuiKit.checkScrollForTransparentNavbar();
    handleWindowOnScroll();
  }
}

function handleWindowOnScroll() {
  $(window)
    .off("scroll.window")
    .on("scroll.window", nowuiKit.checkScrollForTransparentNavbar);
}

function handleNavbarTogglerClick() {
  function onClickHandler() {
    let $toggle = $(this);
    if (nowuiKit.navbar_menu_visible === 1) {
      $("html").removeClass("nav-open");
      nowuiKit.navbar_menu_visible = 0;
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
          nowuiKit.navbar_menu_visible = 0;
          setTimeout(function () {
            $toggle.removeClass("toggled");
            $("#bodyClick").remove();
          }, 550);
        });

      $("html").addClass("nav-open");
      nowuiKit.navbar_menu_visible = 1;
    }
  }
  $(".navbar-toggler")
    .off("click.NavbarToggler")
    .on("click.NavbarToggler", onClickHandler);
}

function handleInternalLinkClick() {
  // Smooth scroll for links with hashes
  function onClickHandler(event) {
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
          800,
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
  }
  $("a.smooth-scroll")
    .off("click.internalLink")
    .on("click.internalLink", onClickHandler);
}
