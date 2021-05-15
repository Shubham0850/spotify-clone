export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // remove after finished developing...
  token: "BQDdxwqngtLpBi1FkpUo5WvYNfmUDoRcgWE5ruWKIzTFm7_6j9eBZMYJUMpEL2ggz2KelKQUd2WIwREItxoT6g8A8qQBxtuRZY9TrZgHGFNdlyjHoALGZRJHCN673F4C-U75Dr_CQzwBdW5N-LHH-BsI7OEuBEe2vzQSUdzgBYx1hO5hPDDG"
};

const reducer = (state, action) => {

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state, 
        playlists: action.playlists
      }

    default:
      return state;
  }
};

export default reducer;
