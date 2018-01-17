import * as React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectTweets } from "../State/selectors";

const mapStateToProps = createStructuredSelector({
  tweets: selectTweets
});

const mapDispatchToProps = {};

@connect(mapStateToProps, mapDispatchToProps)
export class App extends React.Component {
  render() {
    const { tweets } = this.props;
    return (
      <div>
        <h1>Tweets</h1>
        <pre>{tweets}</pre>
      </div>
    );
  }
}
