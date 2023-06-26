import React from "react";

const Main = ({ img, title, name, date, description }) => {
  return (
    <>
     <article>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h6>
        <a>{name}</a> | {date}
      </h6>
      <p>{description}</p>
    </article>
 
    
    </>
   
  );
};
export default Main;
