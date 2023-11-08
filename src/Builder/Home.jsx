import React from 'react'
import Comps from './Comps'
import Drags from "./Drags";
import Closes from './Closes';

export default function home() {
  return (
    <div>
      <Drags />
      <br></br>
      <br></br>
      <hr></hr>
      <hr></hr>
      <Closes />
      <hr></hr>
      <hr></hr>
      <br></br>
      <br></br>

      <Comps />
    </div>
  );
}
