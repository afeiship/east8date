export default class extends React.Component {
  render() {
    return (
      <div className="wiki-view">
        {this.props.children}
      </div>
    )
  }
}
