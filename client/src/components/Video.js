import React, { Component } from "react";
import video1 from "./vd1.mp4";


class Video extends Component {
  render() {
    return (
      <div>
        <video src={video1}  width="600" height="300" controls="controls" autoplay="true"/>
      </div>
    );
  }
}

export default Video;