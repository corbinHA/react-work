import React from 'react'

class SearchBar extends React.Component {
    onInputChange(e) {
        
    }




    render () {
        return (
        <div className="ui segment">
            <form className="ui form">
                <div className="field">
                    <label>Image SearchBar</label>
                    <input type="text" onChange={this.onInputChange} />
                </div>
            </form>
        </div>
        )
    }
    
}

export default SearchBar
