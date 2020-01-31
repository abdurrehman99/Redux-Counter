import React, { Component } from 'react';

class Counter extends Component 
{
    render() 
    {
        const style = {
            backgroundColor : '#F1C40F',
            height : '3.5rem',
            fontSize : '2rem',
            padding : '1rem',
        }
        return ( 
            <div>
                <div style={style}>
                    Counter : {this.props.value}
                </div>
            </div>
        )
    }
}

export default Counter;