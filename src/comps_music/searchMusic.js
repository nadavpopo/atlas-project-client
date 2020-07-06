import React,{Component} from "react";

class SearchMusic extends Component
{
  inputSearch = React.createRef();
  
  onSearchClick = () =>
  {
    let userSearch = this.inputSearch.current.value;
    this.props.searchmusic(userSearch);
  }

  render()
  {
    return(
      <div className="col-lg-6 d-flex p-3">
        <input ref={this.inputSearch} type="text" className="form-control w-50"/>
        <button onClick={this.onSearchClick} className="btn btn-primary">Search</button>
      </div>  
    )
  }
}

export default SearchMusic;