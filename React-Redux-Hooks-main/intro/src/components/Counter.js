import React, { Component } from 'react'
import {connect} from "react-redux"

class Counter extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.counter}</h1>
            </div>
        )
    }
}

function mapStateToProps(state){
    //state bilgisini counterReducer dan çek
    return {counter:state.counterReducer}
}

//counter ın roplarına state i bağla 
export default connect(mapStateToProps)(Counter);
