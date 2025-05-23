import React from "react";
import Greeting from "./Greeting";
import { useState } from "react";

const Main = () => {
  //let name = "CJ"
  const [name, setName] = useState("Anurag");


//Arrow function
//const fetchName = () => {}.
//https://www.w3schools.com/js/js_arrow_function.asp

const fetchName = () => {
 const name = ["Done", "Anurag", "CJ", "Shalah", "Ruth"];
    const n = Math.floor(Math.random() * 5);
    return setName(name[n]);

};



//Old Function Declaration
//function fetchName() {}

/*
  function fetchName() {
   
  }
*/







  return (
    <div>
      <Greeting user={name} />
      <button onClick={fetchName}>Click ME</button>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet doloremque
        deserunt cum praesentium harum, sint quis magni assumenda aliquam nihil
        iusto nesciunt fugiat non nemo quibusdam est in labore quam architecto
        eaque at id tenetur dolor? Perspiciatis maxime, amet labore repellendus
        nobis est at itaque nemo in fugit corporis reiciendis!
      </p>
    </div>
  );
};

export default Main;
