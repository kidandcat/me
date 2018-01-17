import * as React from "react";
import * as anime from "animejs";
import styled from "styled-components";

export type LeyLineDropProps = {
  tweet: object;
};

export class LeyLineDrop extends React.Component<LeyLineDropProps, {}> {
  private line: HTMLElement;
  private drop: HTMLElement;

  constructor(props) {
    super(props);
    this.top = getRandomArbitrary(5, 95);
  }

  componentDidMount() {
    anime
      .timeline()
      .add({
        targets: this.line,
        opacity: 1,
        duration: 500,
        easing: "linear"
      })
      .add({
        targets: this.drop,
        translateX: 2500,
        translateY: ["-50%", "-50%"],
        duration: 3000,
        delay: 1000,
        easing: "linear"
      })
      .add({
        targets: this.line,
        opacity: [1, 0],
        duration: 500,
        easing: "linear"
      });
  }
  render() {
    return (
      <Line innerRef={el => (this.line = el)} top={this.top}>
        <Drop innerRef={el => (this.drop = el)}>
          <Text>{JSON.stringify(this.props.tweet)}</Text>
        </Drop>
      </Line>
    );
  }
}

const Text = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid red;
  padding: 1.5em 1.5em 1.5em 3em;
  box-sizing: border-box;
`;

const Line = styled.div`
  height: 0px;
  width: 200%;
  position: absolute;
  border: 1px solid skyblue;
  left: -500px;
  top: ${props => `${props.top}vh`};
  opacity: 0;
`;

const Drop = styled.div`
  border: 1px solid skyblue;
  border-radius: 60% / 60%;
  height: 70px;
  width: 400px;
  transform: translateY(-50%);
  background-color: white;
`;

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
