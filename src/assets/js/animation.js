import $ from "jquery";
import startAOSLibrary from "./aos";
import {
  checkAndChangeNavbarColor,
  handleNavbarTogglerClick,
} from "./nowUIKit";

export function init() {
  startAOSLibrary();
  checkAndChangeNavbarColor();
  handleNavbarTogglerClick();
  onScrollToHashElement();
}



function onScrollToHashElement() {
  $(document).off('scroll.document').on("scroll.document", function (e) {
    $(".section[id]").each(function () {
      if (
        $(this).offset().top < window.pageYOffset + 10 &&
        $(this).offset().top + $(this).height() > window.pageYOffset + 10
      ) {
        window.history.replaceState({}, "", `${window.location.pathname}#${$(this).attr("id")}`);
      }
    });
  });
}

