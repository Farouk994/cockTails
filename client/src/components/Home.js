import React, { useState } from "react";

// const Home = () => {
//     return (
//         <div>
//             <h1>
//                 This is the Home Page
//             </h1>
//         </div>
//     )
// }


// creating an object with person and details.
const person = {
  name: "Kibuuka",
  age: 44,
  city: "Tas",
  amount: 58700,
};
// setting the state of the object properties
const Home = () => {
  const [age, setAge] = useState(person.age);
  const[city, setCity] = useState(person.city);
  const [value, setValue] = useState(person.name);
  const increase = () => setAge(age + 1);
  const decrease = () => setAge(age - 1);

  const [counter, setCounter] = useState(person.amount);
  console.log(counter)
//   const [state, setState] = setState("Kiiza");

// setting the increase ans decreasing button for the object states in the console.
  return (
    <div>
      {value} Is {age} Years of Age
      <div>
        <button onClick={increase}>Get older! </button>
      </div>
      <div>
        <button onClick={decrease}>Get younger! </button><br></br>
      </div>
      <div>
          The  town {city } is in Kampala
      </div>
    </div>
  );
};

export default Home;


