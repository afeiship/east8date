export default class extends React.Component {
  render() {
    return (
      <div className="qa-view">
        {this.props.children}
      </div>
    )
  }
}
