import React,{Component} from "react";
import { doApiGet } from "../service.js/apiService";
import SearchMusic from "./searchMusic";
import MusicItem from "./musicItem";

class AppMusic extends Component{

  state = {music_ar:[]}

  componentDidMount()
  {
    let url = "https://deezerdevs-deezer.p.rapidapi.com/search?rapidapi-key=0553c29e4bmsh3a239d5a07dbdb4p1e9ae1jsnc9399dacde13&q=abba"
    doApiGet(url)
    .then(data => 
    {
      this.setState({music_ar:data.data})
    })
  }

  

  searchmusic = (_val) =>
  {
    let url = `https://deezerdevs-deezer.p.rapidapi.com/search?rapidapi-key=0553c29e4bmsh3a239d5a07dbdb4p1e9ae1jsnc9399dacde13&q=${_val}`;
    doApiGet(url)
    .then(data => {
      this.setState({music_ar:data.data})
    })
  }

  searcResult = () =>
  {
    return (
      <div className="row">
      {this.state.music_ar.map(item =>
      {
        return(
          <MusicItem key={item.id} item={item}/>
        )
      })}
    </div>
    )
  }

  render()
  {
    return(
      <div className="container">
        <h2>Cartoon search</h2>
        <SearchMusic searchmusic={this.searchmusic} />
        {(this.state.music_ar.length > 0) ? this.searcResult() : "There is 0 results"}       
      </div>
    
    )
  }
}

export default AppMusic;
