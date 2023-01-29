// clear input field after submit

const tryFetch = (text, page, hitsPerPage, setState, setText, setSpin, setMerror) => {
  
  // const maxHits = 100;
  if (text === '') {
    setMerror("Error: Please enter a search term");
    return;
  }
  
  return(
    // const timer = setTimeout(fetch(urll), 5000)//
    fetch(`https://hn.algolia.com/api/v1/search?query=${text}&page=${page}&hitsPerPage=${hitsPerPage}`)
    .then((response) => response.json())
    .then((output)=> output.hits)
    .then((wanted) => {
      setState(wanted);
      setSpin(false)
      setText(' ');
    })
    .catch(() => {
      setMerror("Error: Fetching Failed");
  }))
}

export default tryFetch;