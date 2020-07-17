import React, { Component } from 'react'


class SeachBar extends Component {
     
   state={term:''};
    
     HandleSubmit = (event) => {
         event.preventDefault();
         this.props.onSumbit(this.state.term);
     }


    render() {
        return (
          <div className="ui segment">
            <form className="ui form" onSubmit={(event)=>this.HandleSubmit(event)}>
              <div className="field">
                <label>Image Search</label>

                <input type="text" value={this.state.term} onChange={e=>this.setState({term:e.target.value.toLowerCase()})} />
              </div>
            </form>
          </div>
        );
    }
}

export default SeachBar;