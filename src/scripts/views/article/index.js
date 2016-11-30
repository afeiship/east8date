export default class extends React.Component {
  render() {
    return (
      <div className="article-view">
        {this.props.children}
      </div>
    )
  }
}
