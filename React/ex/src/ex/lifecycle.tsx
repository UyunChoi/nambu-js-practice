import { Component } from "react";

type Props = {
  count : number;
};

type State = {
  count : number;
};

class ClickCounter extends Component<Props,State> {
  constructor(p:Props){
    super(p);
    this.state = {
      count: p.count,
    };
  }
}

export default ClickCounter;

