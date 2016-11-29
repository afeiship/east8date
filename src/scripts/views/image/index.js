export default class extends React.Component {
  render() {
    return (
      <div className="image-view">
        {this.props.children}
      </div>
    )
  }
}
