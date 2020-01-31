import React, { Component } from 'react';
import Radium from 'radium';

 class Button extends Component {
    render() 
    {
        const style = {
            border : '1px solid black',
            backgroundColor : 'white',
            borderRadius : '2rem',
            fontSize : '1.2rem',
            width : '9rem',
            padding : '1rem',
            display : 'inline-block',
            margin : '2rem',
            cursor : 'pointer',
            boxShadow : '3px 3px #D5DBDB',
            ':hover' : 
            {
                backgroundColor : '#45B39D',
                color : 'white',
                border : '1px solid white',
                boxShadow : null,
            }
        }
        return (
            <div style={style} onClick={this.props.click}>
                {this.props.name}
            </div>
        )
    }
}

export default Radium(Button);
