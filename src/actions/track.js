import {ActionTypes} from '../core/constants';

export function setTracks(tracks) {
  return {
    type: ActionTypes.TRACKS_SET,
    tracks
  };
};

export function addTrack(track){
  return{
    type: ActionTypes.TRACKS_ADD,
    payload: track
  }
}
