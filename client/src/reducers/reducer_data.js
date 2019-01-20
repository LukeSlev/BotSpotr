import { FETCH_TRACKS } from "../actions/index";

export default function (state=[], action) {
  // SpotifyWebApi.getMySavedTracks().then((response) => {
  //   let mySavedTracks = response.items.map(item => {return item.track});
  //   console.log(mySavedTracks);
  //   return mySavedTracks;
  // });
  console.log("payload: ", action.payload);
  switch(action.type){
    case FETCH_TRACKS :
      console.log(action.payload.items.map(item => {return item.track}));
      return action.payload.items.map(item => {return item.track});
  }
  return state;
}