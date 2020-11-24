import AOS from "aos";

function startAOSLibrary() {
  let inited = false;
  return function () {
    if (inited) { AOS.refresh(); } else {
      inited = true;
      AOS.init({
        // once: true
      }); // initialize animate on scroll library
    }
  };
};

export default startAOSLibrary()