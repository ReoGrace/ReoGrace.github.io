import React from "react";
import SnakeImg from "../assets/images/loadingsnake.png";

class Contact extends React.Component {
  render() {
    return (
      <div className="Contact">
        <div className="Contact-inner">
          Please send me a message via Email, LINE, or Instagram DM.
        </div>
        <img src={SnakeImg} className="Contact-Snake" />
      </div>
    );
  }
}

export default Contact;