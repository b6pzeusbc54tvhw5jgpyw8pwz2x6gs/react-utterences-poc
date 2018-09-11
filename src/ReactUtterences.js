import React, { Component } from 'react'
import PropTypes from 'prop-types'

const getScriptEl = (repo, attrName, attrValue) => {
  const scriptEl = document.createElement('script')
  scriptEl.src = 'https://utteranc.es/client.js'
  scriptEl.async = true
  scriptEl.setAttribute('repo', repo)
  scriptEl.setAttribute('crossorigin', 'anonymous')
  scriptEl.setAttribute(attrName, attrValue)
  return scriptEl
}

class ReactUtterences extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      currentScriptEl: null,
    }
  }

  componentDidMount() {
    const { repo, attrName, attrValue } = this.props
    const scriptEl = getScriptEl( repo, attrName, attrValue )
    this.myRef.current.appendChild(scriptEl)
  }

  render() {
    return (
      <div ref={this.myRef}>
        ddd
      </div>
    )
  }
}

ReactUtterences.propTypes = {
  attrName: PropTypes.string.isRequired,
  attrValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  repo: PropTypes.string.isRequired,
}

export default ReactUtterences
