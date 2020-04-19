export const debounce = (() => {
  // delay executation of a function if it's invoked multi times.
  // if function's flow named as unique string, others can not affect it's executation
  // in case function's flow have not been named, newer function overwrite old one in executation queue.
  let flowsTimeoutvariable = { genericFlow: null };
  return function (func, wait, flowName) {
    let args = arguments;
    if (!flowName) flowName = 'genericFlow';
    if (flowsTimeoutvariable[flowName]) { clearTimeout(flowsTimeoutvariable[flowName]); }
    flowsTimeoutvariable[flowName] = setTimeout(function () {
      func(args);
    }, wait);
  };
})();