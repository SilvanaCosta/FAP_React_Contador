import React, { useState } from 'react';


function App (){
  const [count, setCount] = useState(0);

  if (count >= 0){
    return(
      <div>
        <h1> Contador: {count} </h1>
        <button onClick={ () => setCount(count + 1)}> Incrementar </button>
        <button onClick={ () => setCount(count - 1)}> Decrementar </button>
      </div>
    )
    }else{
      return(
      <div>
        <h1> Contador: {setCount(count + 1)} </h1>
      </div>
      )
    }

}

export default App;
