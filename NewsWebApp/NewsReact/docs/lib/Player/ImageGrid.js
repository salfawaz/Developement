import 'style-scss';

import React, { Component } from 'react';
import { Player } from 'video-react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import jsonResponse from './content';
import BasicExample from '../player/import-basic';

export default class PlayerEx extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      currentIndex: 0,
      currentVideoURL: jsonResponse.data.shortFormVideos[0].content.videos[0].url,
      currentTitle: jsonResponse.data.shortFormVideos[0].title,
      currentShortDesc: jsonResponse.data.shortFormVideos[0].shortDescription
    };

    this.renderImageContent = this.renderImageContent.bind(this);
  }

  renderImageContent(src, thumb_title, index) {
    return (
      <div onClick={(e) => this.playThumb(e, index)}>
          <img src={src} key={src}/>
          <p>{thumb_title}</p>
      </div>
    )
  }
  playThumb(e, index) {
    this.state.currentShortDesc = jsonResponse.data.shortFormVideos[index-1].shortDescription;
    this.state.currentTitle = jsonResponse.data.shortFormVideos[index-1].title;
    this.state.currentVideoURL = jsonResponse.data.shortFormVideos[index-1].content.videos[0].url;
    this.setState ({ currentIndex: 0 });
  }

   render() {
    return (
      <div>
        <BasicExample brand = {this.state.currentVideoURL}/>
        <div className="gallery-container">
          <h4>{this.state.currentTitle} </h4>
            <p className="small-title">{this.state.currentShortDesc}</p>
              <h5>ALL EPISODES</h5>
            <div className="gallery-grid">
              {jsonResponse.data.shortFormVideos.map((a) => {
                  this.state.currentIndex += 1;
                  if(this.state.currentIndex > 30) return;
                  return this.renderImageContent(a.thumbnail, a.title, this.state.currentIndex);
                  this.state.currentIndex = 0;
                })}
            </div>
          </div>
      </div>
      )
  }
}
