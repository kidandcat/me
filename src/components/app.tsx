import * as React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectPayload } from "../State/selectors";
import { TweetActionCreators } from "../State/actions";

const mapStateToProps = createStructuredSelector({
  payload: selectPayload
});

const mapDispatchToProps = {
  getTweets: TweetActionCreators.init
};

@connect(mapStateToProps, mapDispatchToProps)
export class App extends React.Component {
  render() {
    const { payload, getTweets } = this.props;
    return (
      <div>
        <h1>Payload</h1>
        <div>{JSON.stringify(payload, null, 4)}</div>
        <button onClick={getTweets}>Get tweets</button>
      </div>
    );
  }
}
