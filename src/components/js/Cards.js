import React from "react";
import "../styles/Cards.css";

export class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave(e, val) {
    let storage = [];
    storage.push(val);
    localStorage.setItem("savedItem", JSON.stringify(storage));
    alert("Saved to local storage");
    e.preventDefault();
  }

  render() {
    const data = this.props.data.hits;
    return (
      <div className="cards-row">
        {data
          ? data.map((val, index) => {
              return (
                <div className="cards-container" key={index}>
                  <div className="cards-body" onClick={this.handleClick}>
                    <div className="cards-header">{val.name}</div>
                    <div className="cards-img">
                      <img src={val.previewURL} alt="" />
                    </div>
                    <button
                      className="cards-description"
                      onClick={e => this.handleSave(e, val)}
                    >
                      Save
                    </button>
                    <div className="cards-tags">
                      Tags: {val.tags.split(",")}
                    </div>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    );
  }
}
