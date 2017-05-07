import React from 'react';

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
    const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']
    const selected = this.state.selectedLang
    return (
      <ul className="languages">
        {languages.map((el) => {
          return (
            <li
              key={el}
              className={el === selected ? "selected" : null}
              onClick={this.updateLanguage.bind(null, el)}>
              {el}
            </li>
          )
        })}
      </ul>
    )
  }
}

Popular.propTypes = {
};


module.exports = Popular
