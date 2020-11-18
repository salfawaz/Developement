import React, {Component} from 'react';
import ReactPlayer from 'react-player'

export default class ImportBasic extends Component {
  render(){
    return (

      /* for general media file any..
        <Player
          playsInline
          poster="/assets/poster.png"
          src={this.props.brand}
        />
      */

      // only for .m3u8
        <ReactPlayer className='react-player'
          url = {this.props.brand}
          playing
          width='100%'
          controls
          config={{
            file: {
              forceHLS: true,
            }
          }}
        />
    );
  }
}


