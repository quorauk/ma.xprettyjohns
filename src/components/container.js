import * as React from "react"

const Container = ({ children, className, ...opts }) => (
  <div className={`container mx-auto ${className ? className : ''}`} {...opts} >
    {children}
  </div>
);

export default Container