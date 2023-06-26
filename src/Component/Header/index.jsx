import React from "react";
import { IoChevronDown } from 'react-icons/io5';




const Header=()=>{
    return(
        <div>
              <header>
        <div className="first-item">
          <h1>edyoda</h1>
          <p><i>Stories</i></p>
        </div>
        <div className="second-item">
          <p>Explore Categories<i ><IoChevronDown/></i></p>
        </div>
        <div className="third-item">
          <p>EdYoda is a learning and knowledge</p>
          <p>sharing platform for techies</p>
        </div>
        <div className="fourth-item">
          <button>Go to main websites</button>
        </div>
      </header>
        </div>
    )
}
export default Header;