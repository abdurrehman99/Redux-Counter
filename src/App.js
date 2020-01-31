import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Counter from './components/Counter';
import Button from './components/Button';
import * as actionTypes from './store/actions';

class App extends Component
{

  constructor(props)
  {
    super(props);
    this.state = {
      counter : 0
    }
  }


  btnStyle = {
    padding : '0.8rem',
    fontSize : '1rem',
    backgroundColor : '#dddd',
    borderRadius : '2rem',
    cursor : 'pointer',
    ':hover' : 
            {
                backgroundColor : '#45B39D',
                color : 'white',
                border : '1px solid white',
                boxShadow : null,
            }
  }

  ulStyle = {
    listStyle : 'none',
  }
  
  render() 
  {
    return (
        <div className="App">
          <Counter value={this.props.ctr}/>
          <Button click={ this.props.onIncCounter } name='Increment'/>
          <Button click={ this.props.onDecCounter } name='Decrement'/>
          <Button click={ this.props.onAddCounter } name='Add 10'/>
          <Button click={ this.props.onSubCounter } name='Subtract 10'/>
          <hr/>
          <ul style={ this.ulStyle }>
 
          </ul>

        </div>
    )
  }
}

const mapStateToProps = (state) =>
{
  return {
    ctr :  state.counter,
    storedResult : state.results,
  };

};

const mapDispatchToProps = (dispatch) =>
{
  return {
    onIncCounter : ()=> dispatch ({ type : actionTypes.INC , value : 1}),
    onDecCounter : ()=> dispatch ({ type : actionTypes.DEC , value : -1}),
    onAddCounter : ()=> dispatch ({ type : actionTypes.ADD , value : 10}),
    onSubCounter : ()=> dispatch ({ type : actionTypes.SUB , value : -10}),
    onStoreResult : (id)=> dispatch ({ type : actionTypes.STORE_RESULT , id: id }),
    onDeleteResult : (id)=> dispatch ({ type : actionTypes.DELETE_RESULT , resultId : id }), 

  }
};
 

export default connect(mapStateToProps,mapDispatchToProps)(App);