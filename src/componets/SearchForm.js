import React, { Component, useState } from 'react'


export class searchForm extends Component {
    state = {
        inputMovie: ''
    }

    _handleChange = (event) => {
        this.setState({
            inputMovie: event.target.value
        })
    }
    _handleSubmit = (event) => {
        event.preventDefault();
        alert(this.state.inputMovie);
        //this.props.onSearch(this.state.inputMovie)
    }

    render(){
        return(
            <form onSubmit={this._handleSubmit}>
                <div className="field has-addons">
                    <div className="control">
                        <input className="input" type="text" placeholder="Find a Movie" onChange={this._handleChange}></input>
                    </div>
                    <div className="control">
                        <button className="button is-info">
                        Search
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}
 
export default searchForm;