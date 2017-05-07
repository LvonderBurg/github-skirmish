// we use fetch. TODO: Add a polyfill?

function fetchPopularRepos (language) {
  const encodedURI = window.encodeURI(
    `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`
  )

  return fetch(encodedURI)
    .then(response => response.json())
    .then(data => data.items)
    .catch((err) => console.log('Error when fetching language data! Err: ', err))
}

function getProfile (username, auth = null) {
  return fetch(`https://api.github.com/users/${username}${auth ? '?'+auth : ''}`)
    .then((response) => response.json())
}

function getRepos (username, auth = null) {
  return fetch(`https://api.github.com/users/${username}/repos${auth ? '?'+auth : ''}`)
    .then((response) => response.json())
}

function getStarCount (repos) {
  return repos.reduce((count, repo) => count + repo.stargazers_count, 0)
}

function calculateScore (profile, repos) {
  const followers = profile.followers
  const totalStars = getStarCount(repos)

  return (followers * 3) + totalStars
}

function handleError (err) {
  console.warn(err)
  return null
}

function getUserData (player) {
  return Promise.all([
    getProfile(player),
    getRepos(player)
  ]).then(([profile, repos]) => {
    let temp = {
      profile: profile,
      score: calculateScore(profile, repos)
    }
    return temp
  })
}

function sortPlayers (players) {
  return players.sort((a, b) => a.score - b.score )
}

module.exports = {
  fetchPopularRepos,
  faceOff: (players) => {
    return Promise.all(players.map(getUserData))
      .then((players) => sortPlayers(players) )
      .catch(handleError)
  }
}
