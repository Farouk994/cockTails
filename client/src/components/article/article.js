import React, { useState, useEffect } from "react";

const post = {
  title: "WE ARE ALL WRONG",
  description:
    "Researchers studying human remains from Pompeii have extracted genetic secrets from the bones of a man and a woman who were buried when the Roman city was engulfed in volcanic ash.",
  like: 7065756765,
  unlike: 0
};

const story = {
  reel: "Dancing Mirrors",
  comments: "",
  countdown: 0,
  submission: true
};

function Article() {
  const [state, setState] = useState({});
  // const [value, setValue] = useState({});
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setState(post);
    setCounter(post.like);
    // setState(story);
  }, []);

  // console.log("this is post", state);
  // console.log("this is counter", counter);

  function increase() {
    return setCounter(counter + 1);
  }

  function decrease() {
    return setCounter(counter - 1);
  }
  console.log(state.like);

  return (
    <div>
      <div>
        <strong>
          <h1>{state.title}</h1>
        </strong>
        <h3>{state.description}</h3>
        <p></p>
        <button onClick={increase}>❤️</button>
        <h1>{counter}</h1>
        <br></br>
        <button onClick={decrease}>😡</button>
        {/* <h1>{counter}</h1> */}
        <br></br>

        {/* <button className="btn btn-primary" >Signup</button> */}
      </div>
    </div>
  );
}

export default Article;

// <h1>Counter</h1>
//       <button onClick={Increase}> Increase</button>
//       <br />
//       <br />
//       <button onClick={decrease}> decrease</button>
//       <h1>{counter}</h1>
//       <br />
//       <hr />
