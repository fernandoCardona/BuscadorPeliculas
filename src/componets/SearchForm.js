import React, { Component } from 'react'
const searchForm = () => {
    return ( 
        
            <div class="field has-addons">
                <div className="control">
                    <input className="input" type="text" placeholder="Find a Movie"></input>
                </div>
                <div class="control">
                    <button className="button is-info">
                    Search
                    </button>
                </div>
            </div>
        
    );
}
 
export default searchForm;