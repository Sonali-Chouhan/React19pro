//practice  header Design use css
import React from "react";

const Hello = () => {
  return (
    <div className="maindiv">
      <div className="header">
        <div className="clearfix">
          <div className="logo">Logo</div>
          <div className="menu">
            <ul>
              <li>
                <a href="/">Home1</a>
              </li>
              <li>
                <a href="/">Home2</a>
              </li>
              <li>
                <a href="/">Home3</a>
              </li>
              <li>
                <a href="/">Home4</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hello;
