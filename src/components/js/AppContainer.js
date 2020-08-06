import React from "react";
import { Form } from "./Form";
import { Cards } from "./Cards";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getPixaBay } from "../../store/actions";

export class AppContainer extends React.Component {
  render() {
    const { cards } = this.props;
    return (
      <div>
        <div>
          <Form />
          <Cards data={cards.payload} />
        </div>
        <div />
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

AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
