const onSubmit = event => {
  event.preventDefault()

  const queryString = document.getElementById('query-string').value
  const dictionary = document.getElementById('dictionary').value.split(/[[\]', ]/g).filter(string => string.length > 0)

  const queryResult = dictionary.filter(string => queryString === string.substring(0, queryString.length))

  document.getElementById('out-put').innerHTML = `[${queryResult.map(string => `'${string}'`).join(', ')}]`
}

window.addEventListener('load', () => {
  document.getElementById('string-finder').addEventListener('submit', onSubmit)
})