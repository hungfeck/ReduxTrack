import {ActionTypes} from '../core/constants';

const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.TRACKS_SET:
      return setTracks(state, action);
    case ActionTypes.TRACKS_ADD: 
      let payload = action.payload
      console.log('track_add', payload)
      return [
        ...state,
        action.payload
        
      ]
  }

  return state;
}

function setTracks(state, action) {
  const {tracks} = action;
  return [...state, ...tracks];
}
