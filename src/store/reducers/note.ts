import { ADD_NOTE, NoteState, NoteActionTypes } from "../types/note";

const initialState: NoteState = {
  list: [],
  selected: null
};

export const noteReducer = (state = initialState, action: NoteActionTypes) => {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        list: [action.payload, ...state.list]
      };
    default:
      return state;
  }
};
