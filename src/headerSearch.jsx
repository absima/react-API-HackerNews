import React from 'react';

export default function Searcher({text, setText, triggerSearch}){
 
  return (
    <>
      <header>
        <div>
          <h1> Searching from the Hacker News </h1>
        </div>  

        <div className="search-container">
          <form className="example" onSubmit={
            (event) => {
              event.preventDefault();
              setText(event.target.elements[0].value);
              triggerSearch();
              // setText("")
            }
          }> {/* onSubmit={funcSubmit} */}
            <input id='search__input' value={text} type="text" placeholder="Search..." name="search" 
            style={{padding:10}}
            onChange={
              (e)=>setText(e.target.value)
            }
            />   
            {/* onKeyUp={isEnter} onChange={funcChange}  */}
            <button type="submit"> 
              <i className="fa fa-search">Search</i>
            </button>
          </form>
        </div>
      </header>
    </>
  )

}

