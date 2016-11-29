export default class extends React.Component {
  render() {
    return (
      <div className="option-view">
        {this.props.children}
      </div>
    )
  }
}
