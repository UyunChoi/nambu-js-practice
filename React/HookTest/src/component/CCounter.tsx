import { Component } from "react";

type Props = {
  count : number;
};

type State = {
  count : number;
};

// 클래스형 컴포넌트로 작성
export default class CCounter extends Component<Props,State> {
  constructor(props:Props){
    super(props)
    this.state = {
      count: props.count,
    }; 
  }
  handleClick = (): void => {
    this.setState((prev) => {
      return { count: prev.count+1};
    });
  };
  render() {
    console.log('render 호출')
    return(
      <>
        <p>{this.state.count}번 클릭했습니다</p>
        <button onClick={this.handleClick}>클릭</button>
      </>
    );
  }
  componentDidMount(): void {
    console.log('componentDidMount 호출');
  }
  componentDidUpdate(): void {
    console.log('componentDidUpdate 호출');
  }
  componentWillUnmount(): void {
    console.log('componentWillUnmount 호출');
  }
}
