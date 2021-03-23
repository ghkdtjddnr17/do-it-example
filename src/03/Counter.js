import React, {Component} from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        /* count 초기값 state 정의 (props로 받아서 세팅)*/
        this.state={
            count: props.count
        }

        this.increaseCount = this.increaseCount.bind(this);// increaseCount 함수안에 setState를 사용하면서 this를 bind 하여 활성화
    }
    increaseCount(){
        this.setState(({count})=>({
            count: count + 1
        }));// 증가 함수 setState로 state값 변경
    }
    render() {
        return (
            <div>
                현재 카운트 : {this.state.count}
                <button onClick={this.increaseCount}>카운트 증가</button>
            </div>
        );
    }
}

export default Counter;