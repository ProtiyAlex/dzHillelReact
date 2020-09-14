import React from "react";
import "./css/main.css";
import Content from "./subComponets/content/Content";
import LeftMenu from "./subComponets/leftmenu/Leftmenu";

export default class Main extends React.Component {
  render() {
    return (
      <div className="app-main">
        <LeftMenu />
        <Content />
      </div>
    );
  }
}
