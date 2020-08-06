import React from "react";
import "../styles/Form.css";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getPixaBay } from "../../store/actions";

export class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        "fashion",
        "nature",
        "backgrounds",
        "science",
        "education",
        "people",
        "feelings",
        "religion",
        "health",
        "places",
        "animals",
        "industry",
        "food",
        "computer",
        "sports",
        "transportation",
        "travel",
        "buildings",
        "business",
        "music"
      ]
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
  }

  componentDidMount() {
    // default call
    const { getPixaBay } = this.props;
    getPixaBay("cat", "nature");
  }

  handleSubmit = e => {
    const { getPixaBay } = this.props;
    getPixaBay(this.fullName.value, this.category.value);
    e.preventDefault();
  };

  render() {
    const { items } = this.state;
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-title">PIXABAY</div>
          <input
            className="form-input"
            type="text"
            placeholder="Keyword"
            ref={input => (this.fullName = input)}
          />
          <select
            className="form-select"
            ref={select => (this.category = select)}
          >
            <option>Category...</option>
            {items.map((val, i) => {
              return (
                <option key={i} value={val}>
                  {val.charAt(0).toUpperCase() + val.substr(1)}
                </option>
              );
            })}
          </select>
          <input className="form-button" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getPixaBay
    },
    dispatch
  );
}

Form = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
