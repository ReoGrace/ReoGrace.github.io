import React from "react";

class InterestsCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isModalOpen: false };
  }

  handleClickLesson() {
    this.setState({ isModalOpen: true });
  }

  handleClickClose() {
    this.setState({ isModalOpen: false });
  }

  render() {
    let modal;
    if (this.state.isModalOpen) {
      modal = (
        <div className="modal">
          <div className="modal-inner">
            <div className="modal-header"></div>
            <div className="modal-introduction">
              <h2  style={{color: this.props.color}}>{this.props.name}</h2>
              <p>{this.props.introduction}</p>
            </div>
            <button
              className="modal-close-btn"
              onClick={() => this.handleClickClose()}
            >
              Close
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="InterestsCard">
        <div
          className="InterestsCard-inner"
          onClick={() => {
            this.handleClickLesson();
          }}
        >
          <img className="InterestsCard-inner-image" src={this.props.image} />
          <p className="InterestsCard-inner-name" style={{color: this.props.color}}>{this.props.name}</p>
          <p className="InterestsCard-inner-text">{this.props.text}</p>
        </div>
        {modal}
      </div>
    );
  }
}

export default InterestsCard;
