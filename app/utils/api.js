// we use fetch. TODO: Add a polyfill?
module.exports = {
  fetchPopularRepos: (language) => {
    const encodedURI = window.encodeURI(
      `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`
    )

    return fetch(encodedURI)
      .then(response => response.json())
      .then((data) => {
        return data.items
      })
      .catch((err) => console.log('Error when fetching data! Err: ', err))
  }
}
