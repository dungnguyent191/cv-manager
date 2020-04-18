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

  onClickInternalLink();
  onScrollToHashElement();
}

function onClickInternalLink() {
  function onClickHandler(event) {
    if (
      window.location.pathname.replace(/^\//, "") ===
      this.pathname.replace(/^\//, "") &&
      window.location.hostname === this.hostname
    ) {
      event.preventDefault();
      autoScrollToElement(this.hash);
    }
  }
  $("a.smooth-scroll")
    .off("click.smoothScroll")
    .on("click.smoothScroll", onClickHandler);
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

function autoScrollToElement(elementSelector) {
  let target = $(elementSelector);
  if (target.length) {
    $("html, body").animate({ scrollTop: target.offset().top }, 250);
    console.log("auto scroll");
  }
}
