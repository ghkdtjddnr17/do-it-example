import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Counter from "./03/Counter";
import NewCounter from "./03/NewCounter";
import ListExample from "./03/ListExample";
import Todolist from "./03/Todolist";
import ScrollSpy from "./03/ScrollSpy";
import Counter3 from "./03/Counter3";
import Input from "./03/Input";
import './sass/materialize.scss';
import Debounce from './02/debounce';
import Throttle from './02/Throttle';
import HomePageComponent from './06/HomePageComponent';
import { Route } from 'react-router';
import Home from './Home';
import About from './About';
import { Link } from 'react-router-dom';
import Profile from './Profile';
import Coin from './Coin'

class MyComponent extends React.Component{
  componentDidUpdate() {
    console.log('MyComponent 새로고침');
  }
  render() {
    return(
        <div></div>
    )
  }
}
class MyPureComponents extends React.PureComponent{
  componentDidUpdate() {
    console.log('MyPureComponents 새로고침');
  }
  render() {
    return(
        <div></div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.listValue = [{name:'Park'}, {name:'Lee'}];
    this.state={count: 1 ,version : 0};
    this.handleClick = this.handleClick.bind(this);
    this.resetCount = this.resetCount.bind(this);
  }
  handleClick(){
    setTimeout(()=>{
      this.listValue[0].name = 'Justin';
      this.setState({version: 1});
    },100);
    setTimeout(()=>{
      this.listValue=[{name: 'Justin'}, {name:'Lee'}];
      this.setState({version: 2});
    },200);
  }

  resetCount(){
    this.setState(({count})=>({
      count : count + 10
    }));
  }
  render() {
    return (
      <div className="App">
        <Counter count={this.state.count}></Counter>
        <NewCounter count={this.state.count}></NewCounter>
        <button onClick={this.resetCount}>{this.state.count + 10}으로 초기화</button>
        <MyComponent value={this.listValue}></MyComponent>
        <MyPureComponents value={this.listValue}></MyPureComponents>
        <button onClick={this.handleClick}>버튼</button>
        <ListExample></ListExample>
        <Todolist></Todolist>
        <ScrollSpy></ScrollSpy>
        <Counter3></Counter3>
        <Input name={'황성욱'}></Input>
      </div>
    );
  }
}
class App2 extends Component{
    render() {
        return(
            <div>
               <HomePageComponent></HomePageComponent>
            </div>
        )
    }
}

class App3 extends Component{
  render(){
    return(
      <>
      <div>
        <ul>
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/about">어바웃</Link>
          </li>
        </ul>
      </div>
      <Route exact={true} path="/" component={Home}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/profiles/:username" component={Profile} />

      </>
    )
  }
}

class App4 extends Component{
  render(){
    return(
      <>
      <div>
       <Coin></Coin>
      </div>
      </>
    )
  }
}
export default App4;
