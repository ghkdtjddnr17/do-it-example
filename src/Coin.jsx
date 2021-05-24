import React, { Component } from 'react'
import './coin.css'
class Coin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      commissionNum: 0,
      sellNum: 0,
      allNum: 0,
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleCoinNum = this.handleCoinNum.bind(this)
  }
  handleClick(e) {
    console.log(e.target.value)
    this.setState({ sellNum: e.target.value })
  }
  handleCoinNum(e) {
    let num = e.target.value
    let commission = num / 1000
    this.setState({ commissionNum: num - commission })
  }

  render() {
    console.log(this.state.sellNum)
    return (
      <div>
        <div class="text">
          <div>코인 갯수</div>
          <div>매입 가격</div>
          <div>평단</div>
        </div>
        <div class="inputBox">
          <input
            id="coinNum1"
            onChange={this.handleCoinNum}
            type="number"
          ></input>
          <input
            id="coinNum2"
            onChange={this.handleClick}
            type="number"
          ></input>
        </div>
        <div class="avgNum">115</div>
        <div>
          <div class="lastNum">{this.state.commissionNum}</div>
          <div class="lastNum">{this.state.sellNum}</div>
          <div class="lastNum">{this.state.sellNum}</div>
        </div>
      </div>
    )
  }
}

export default Coin
