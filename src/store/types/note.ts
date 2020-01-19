export interface Note {
  id: number;
  title: string;
  content?: string;
}

export interface NoteState {
  list: Note[];
  selected: number;
}

export const ADD_NOTE = 'ADD_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const REMOVE_NOTE = 'REMOVE_NOTE';

interface addNoteAction {
  type: typeof ADD_NOTE,
  payload: Note;
}

interface updateNoteAction {
  type: typeof UPDATE_NOTE,
  payload: Note;
}

interface removeNoteAction {
  type: typeof REMOVE_NOTE,
  payload: number;
}

export type NoteActionTypes = addNoteAction | updateNoteAction | removeNoteAction;