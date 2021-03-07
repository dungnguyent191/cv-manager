import $ from "jquery";
import startAOSLibrary from "./aos";
import { debounce } from "./utils";

export function init() {
  startAOSLibrary();
  onScrollToHashElement();
}

function onScrollToHashElement() {
  function changeHashUrl(id) {
    window.history.replaceState(
      {},
      "",
      `${window.location.pathname}${id ? "#" + id : ""}`
    );
  }
  function checkAndChangeUrlHash(e) {
    let hasValue;
    $(".section").each(function () {
      if (
        $(this).offset().top <= window.pageYOffset &&
        $(this).offset().top + $(this).outerHeight() > window.pageYOffset
      ) {
        hasValue = true;
        changeHashUrl(this.id);
      }
    });
    !hasValue && changeHashUrl();
  }
  function checkAndChangeUrlHashWithDebounce() {
    debounce(checkAndChangeUrlHash, 20, "changeHashUrl");
  }
  $(document).off('scroll.document').on("scroll.document", checkAndChangeUrlHashWithDebounce);
  // document.removeEventListener("scroll", checkAndChangeUrlHashWithDebounce);
  // document.addEventListener("scroll", checkAndChangeUrlHashWithDebounce, {passive: true});
}
