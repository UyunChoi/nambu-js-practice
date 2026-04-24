import { Component } from "react";

type State = {
  count: number;
};

type Props = {
  init : number;
};

class classCounter extends Component<Props,State>{ //제네릭 순서 오류
  constructor(p:Props) {
    super(p);
    this.state = {
      count: p.init,
    };
  }
}

export default classCounter;