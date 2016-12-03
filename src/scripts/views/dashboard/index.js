import {Editor, EditorState,RichUtils} from 'draft-js';

export default class extends React.Component {
  state={
    editorState: EditorState.createEmpty()
  }
  onChange(editorState){
    console.log(editorState);
    this.setState({editorState})
  }
  handleKeyCommand(command){
    const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  }
  _onBoldClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'CODE'));
  }
  render() {
    return (
      <div className="dashboard-view">
        dashbard-view ...
        <button onClick={this._onBoldClick.bind(this)}>Bold</button>
        <Editor
          editorState={this.state.editorState}
          handleKeyCommand={this.handleKeyCommand.bind(this)}
          onChange={this.onChange.bind(this)} />
      </div>
    );
  }
}
