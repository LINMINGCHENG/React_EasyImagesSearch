import React from 'react';
import SearchBar from './components/SearchBar';
import axios from 'axios';
import ImagesList from './components/ImagesList';

class App extends React.Component {
   state={images:[]};






   HandleSubmit = async (term) =>{
    const response = await axios
    .get("https://api.unsplash.com/search/photos",{
        params:{query:term},
        headers: {
          Authorization:'Client-ID 723OYVQyTH_jRfpDHKamSzcKPRnffJ3JZ9HXStWVX5A'
        }
     })

     this.setState({images:response.data.results})
     console.log(response.data.results)
   }
 
 
 
  render(){
  return (
    <div className="ui container" style={{marginTop:'10px'}}>
      <SearchBar onSumbit={this.HandleSubmit}/>
      <ImagesList images={this.state.images}/>
    </div>
  );
  }
}

export default App;
