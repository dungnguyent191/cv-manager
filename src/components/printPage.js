import * as React from "react";

const printDocument = () => {
  window.print();
};

export const PrintPage = ({ children }) => {
  return (
    <React.Fragment>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { onClick: printDocument })
      )}
    </React.Fragment>
  );
};
