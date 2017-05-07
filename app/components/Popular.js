import React from 'react';
import PropTypes from 'prop-types'
import api from '../utils/api'

function SelectLanguageNav (props) {
  const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']
  return (
    <ul className="languages">
      {languages.map((el) => {
        return (
          <li
            key={el}
            className={el === props.selectedLang ? "selected" : null}
            onClick={props.onSelect.bind(null, el)}>
            {el}
          </li>
        )
      })}
    </ul>
  )
}

SelectLanguageNav.propTypes = {
  selectedLang: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

function RepoGrid (props) {
  return (
    <ul className='popular-list'>
      {props.repos.map((repo, index) => {
        return (
          <li key={repo.name} className='popular-item'>
            <div className="popular-rank"># {index + 1}</div>
            <ul className='space-list-items'>
              <li>
                <img
                  className='avatar'
                  src={repo.owner.avatar_url}
                  alt={`Avatar for ${repo.owner.login}`}
                />
              </li>
              <li>
                <a href={repo.html_url}>{repo.name}</a>
              </li>
              <li>@{repo.owner.login}</li>
              <li>{repo.stargazers_count} stars</li>
            </ul>
          </li>)
      })}
    </ul>
  )
}

RepoGrid.propTypes = {
  repos: PropTypes.array.isRequired
}

class Popular extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedLang: 'All'
    }
    this.handleLanguageUpdate = this.handleLanguageUpdate.bind(this);
  }

  componentDidMount() {
    this.handleLanguageUpdate(this.state.selectedLang)
  }

  handleLanguageUpdate (lang) {
    this.setState({
      selectedLang: lang,
      repos: null
    })
    api.fetchPopularRepos(lang)
      .then(repos => {
        this.setState({
          repos: repos
        })
      })
  }

  render() {
    const selected = this.state.selectedLang
    return (
      <div>
        <SelectLanguageNav
          selectedLang={selected}
          onSelect={this.handleLanguageUpdate}
        />
        {!this.state.repos ?
          <p>Loading...</p> :
          <RepoGrid repos={this.state.repos} />
        }
      </div>
    )
  }
}

Popular.propTypes = {
};


module.exports = Popular
