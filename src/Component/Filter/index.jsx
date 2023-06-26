import React from "react";
import { RiFilter2Fill } from 'react-icons/ri';

const Filter=()=>{
    return (
        
            
      <div className="content">
        <h1>Trending Posts</h1>
        <p><i><RiFilter2Fill/></i> <span>Filter by Category</span></p>
        <button id="all">All</button>
        <button id="artificial">Artificial Intelligance</button>
        <button id="cloud">Cloud Computing</button>
        <button id="devops">DevOps</button>
        <button id="programming">Programming Languages</button>
        <button id="mobile">Mobile Application Development</button>
        <button id="technology">Technology and Tools</button>
        <button id="company">Get a Job in a Tech Company</button>
        <button id="others">Others</button>
      </div>

        
    )
}
export default Filter;