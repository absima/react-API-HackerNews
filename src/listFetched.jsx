import React from 'react';

export default function ListFetched({state}){
  // console.log("I am alive");
  return(
    state.map((item, i) => {
      return (
        <li key={i}>
          <a href={item.url || item.story_url}>{item.title || item.story_title}</a>
        </li>
      )
    }))
}