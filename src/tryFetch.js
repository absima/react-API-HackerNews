const tryFetching = (text, page, hitsPerPage, setState, setText, setSpin, setMerror) => {
  
  // const maxHits = 100;
  
  return(
    // const timer = setTimeout(fetch(urll), 5000)//
    fetch(`https://hn.algolia.com/api/v1/search?query=${text}&page=${page}&hitsPerPage=${hitsPerPage}`)
    .then((response) => response.json())
    .then((output)=> output.hits)
    .then((wanted) => {
      setState(wanted);
      setSpin(false)
      // setText(" ")
      // return wanted;
    })
    .catch(() => {
      setMerror("Error: Fetching Failed");
  }))
}

export default tryFetching;