import React from "react";
import { bindActionCreators } from "redux";
import { Button } from "@antd";
import { connect } from "react-redux";
import { AppDispatch, AppState } from "./store";
import { Note } from "./store/types/note";
import { addNote } from "./store/actions/note";

export interface NotesOwnProps {
  name?: string;
}

interface NotesMappedState {
  list: Note[];
}
interface NotesMappedMethod {
  addNote: (note: Note) => void;
}

export interface NotesState {}

export type NotesProps = NotesMappedState & NotesMappedMethod & NotesOwnProps;

class Notes extends React.PureComponent<NotesProps, NotesState> {
  handleAdd = () => {
    this.props.addNote({
      id: new Date().getTime(),
      title: "Untitled",
      content: ""
    });
  };
  render() {
    const { list } = this.props;
    return (
      <div>
        <Button onClick={this.handleAdd}>新建</Button>
        <div>
          {list.map(item => (
            <div key={item.id}>
              <div>{item.title}</div>
              <div>{item.content}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default connect<NotesMappedState, NotesMappedMethod, NotesOwnProps>(
  (state: AppState) => ({
    list: state.note.list
  }),
  (dispatch: AppDispatch) => ({
    addNote: bindActionCreators(addNote, dispatch)
  })
)(Notes);
