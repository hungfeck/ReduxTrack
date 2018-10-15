import React, {Component, PropTypes} from 'react';
import * as actions from '../../actions/index'


export default class TrackList extends Component {
  static contextTypes = {
    router: React.PropTypes.object,
    store: React.PropTypes.object,
  }

  constructor(props, context){
    super(props, context)
    this.state= {
      ...this.state,
      trackName: ""
    }
   
  }

  static propTypes = {
    tracks: PropTypes.array
  }

  static defaultProps = {
    tracks: []
  }
  
  addTrack(params) {
    
    var id = this.context.store.getState().tracks.length;
    console.log('tracklist add', id)
    this.context.store.dispatch(actions.addTrack({id: id+1, title: this.state.trackName}))
  }

  updateInputValue (evt) {
    this.setState({
      trackName: evt.target.value
    });
  }

  render() {
    return (
      <div>
      {
        this.props.tracks.map((track, key) => {
          return <div key={key}>ID: {track.id}  ---  Track: {track.title}</div>;
        })
      }
      <input type='text' value={this.state.trackName} onChange={this.updateInputValue.bind(this)} className='trackName' title='trackname' />
      <button onClick={this.addTrack.bind(this)}>Thêm bài hát</button>
      </div>
    )
  }
}
