import { ADD_NOTE, REMOVE_NOTE, Note, NoteActionTypes } from "../types/note";

export function addNote(note: Note): NoteActionTypes {
  return {
    type: ADD_NOTE,
    payload: note
  };
}

export function removeNote(id: number): NoteActionTypes {
  return {
    type: REMOVE_NOTE,
    payload: id
  };
}
