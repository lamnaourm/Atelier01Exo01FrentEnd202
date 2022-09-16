// Le composant Pht
/*const Pht = ()=> {
    return (
      <div className='form_control'>
        <label htmlFor='pht'>Prix Hors taxe : </label>
        <input type='number' id='pht' placeholder='pht....'/>
      </div>
    );
  }*/

import { Component } from "react";

class Pht extends Component {
  render() {
    return (
      <div className="form_control">
        <label htmlFor="pht">Prix Hors taxe : </label>
        <input type="number" id="pht" placeholder="pht...." />
      </div>
    );
  }
}

export default Pht;
