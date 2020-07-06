import React, { Component } from "react";

class MusicItem extends Component
{
  render()
  {
    let {title , name , preview , artist , link } = this.props.item;
    return (
      <div className="col-lg-6 p-2">
        <div className="border p-2 overflow-hidden">
            <img src={artist.picture} className="float-left w-25 mr-2 "></img>
                <h2>{artist.name}</h2>
            <div>Title: {title}</div>
            <audio controls>
                <source src= {preview} type="audio/mpeg"/>
            </audio>
            <a className="btn btn-info" href={link} target="_balnk">More info</a>
        </div>
      </div>
    )
  }
}

export default MusicItem;