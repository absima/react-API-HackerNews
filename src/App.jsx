import React, { useState, useEffect } from 'react';
import LoadingSpin from "react-loading-spin";

import Searcher from './headerSearch';
import ListFetched from './listFetched';
import tryFetching from './tryFetch'
import Pagination from "./paginate"


export default function App() {
  // // for the fetched data
  const [state, setState] = useState([]); 
  // // for the search text
  const [text, setText] = useState(" "); //
  // // for error message
  const [merror, setMerror] = useState(""); 
  // // for loading spinner
  const [spin, setSpin] = useState(true);
  // // for pagination
  // const [numHits, setNumHits] = useState(0)
  const [page, setPage] = useState(0)
  // const [hitspp, setHitspp] = useState(80)
  const [hitsPerPage, setHitsPerPage] = useState(12);
  // const [localPerPage, setLocalPerPage] = useState(5);

  // useEffect(()=>{},[state,text, merror, spin, page, hitsPerPage])

  useEffect(() => { 
    triggerSearch()
  }, [page, hitsPerPage])

  // // don't know why I need this.
  useEffect(() => { setPage(0)}, [text, hitsPerPage]);

  const triggerSearch = () => {
    tryFetching(text, page, hitsPerPage, setState, setText, setSpin, setMerror)
  }
  


  
  // The following is lame; to be modified.
    return (        
      <>
        <Searcher text = {text} setText = {setText} triggerSearch = {triggerSearch}/>
          {
            spin? (  
              <>
                <h3>Fetching with keyword:</h3> 
                <h4>"{text}"</h4>
                <div className="loading_spin">
                  <LoadingSpin />
                </div>
              </>): 
            !state.length? (
              <>
                <h3>No items found with keyword:</h3> 
                <h4>"{text}"</h4>
              </>): 
            (
              <>
              <h2>Search results for "{text}"</h2>
              <ul>
                <ListFetched state={state}/>
              </ul>
              <Pagination state={state} page={page} setPage={setPage} />
              </>
            )
          }
      </>
    )
}










// import { useState, useEffect } from "react";

// // fetch in a react component with useState, useEffect
// export default () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // its very important to use useEffect when fetching data in a react component
//     // because it will cause an infinite loop if you dont, and it will keep fetching data - which may get you banned from the api

//     fetch("https://jsonplaceholder.typicode.com/todos/1")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         // setData(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         setError(error);
//         setLoading(false);
//       });
//   }, []);
//   // the empty array at the end of useEffect is very important
//   // it tells react to only run the useEffect once, when the component mounts
//   // if you dont include it, it will run the useEffect every time the component re-renders
//   // which will cause an infinite loop

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error!</p>;

//   return (
//     <div>
//       <p>{JSON.stringify(data)}</p>
//     </div>
//   );
// };
