import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Bohemian Rhapsody", duration: "6:07" },
    { title: "Wish you were here", duration: "5:21" },
    { title: "Brain Damage, Eclipse", duration: "6:00" },
    { title: "Dark Side of The Moon", duration: "7:27" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
