import React from 'react';
import PropTypes from 'prop-types'

function SelectLanguageNav (props) {
  const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']
  return (
    <ul className="languages">
      {languages.map((el) => {
        return (
          <li
            key={el}
            className={el === props.selectedLang ? "selected" : null}
            onClick={props.updateLanguage.bind(null, el)}>
            {el}
          </li>
        )
      })}
    </ul>
  )
}

SelectLanguageNav.propTypes = {
  selectedLang: PropTypes.string.isRequired,
  updateLanguage: PropTypes.func.isRequired
}



class Popular extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedLang: 'All'
    }
    this.updateLanguage = this.updateLanguage.bind(this);
  }
  updateLanguage (lang) {
    this.setState({
      selectedLang: lang
    });
  }

  render() {
    const selected = this.state.selectedLang
    return (
      <div>
        <SelectLanguageNav
          selectedLang={selected}
          updateLanguage={this.updateLanguage}
        />
      </div>
    )
  }
}

Popular.propTypes = {
};


module.exports = Popular
