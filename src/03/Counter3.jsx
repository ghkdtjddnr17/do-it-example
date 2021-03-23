import React, {Component} from 'react';

class Counter3 extends Component {
    constructor(props) {
        super(props);
        this.state={
            count: 0
        };

        this.increateCount = this.increateCount.bind(this);// this를 bind
        this.resetCount = this.resetCount.bind(this);// this를 bind
    }
    increateCount(){
        this.setState(({count})=>({
            count : count + 1
        }));// 증가 함수 setState로 state값 변경
    }
    resetCount(){
        this.setState({count:0});
    } // state값의 count를 0으로 초기화
    render() {
        return (
            <div>
                현재 카운트: {this.state.count}
                <button onClick={this.increateCount} onMouseOut={this.resetCount}>카운트 증가</button>
                버튼 밖으로 나가면 카운트 0으로 초기화
            </div>
        );
    }
}

export default Counter3;