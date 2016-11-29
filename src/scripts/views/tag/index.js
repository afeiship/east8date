export default class extends React.Component {
  render() {
    return (
      <div className="tag-view">
        {this.props.children}
      </div>
    )
  }
}
