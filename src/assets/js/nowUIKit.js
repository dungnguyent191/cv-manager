import $ from "jquery";
import { debounce } from './utils'

const nowuiKit = {
  transparent: true,
  scroll_distance: 500,
  navbar_menu_visible: 0,
  checkAndChangeNavbarColor() {
    nowuiKit.scroll_distance =
      $(".navbar[color-on-scroll]").attr("color-on-scroll") || 500;
    if ($(".navbar[color-on-scroll]").length !== 0) {
      $(window)
        .off("scroll.window")
        .on("scroll.window", function () {
          debounce(function () {
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
          }, 17, 'checkTransparent')
        }).trigger('scroll.window');
    }
  },
  handleNavbarTogglerClick() {
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
};

export const { checkAndChangeNavbarColor, handleNavbarTogglerClick } = nowuiKit
