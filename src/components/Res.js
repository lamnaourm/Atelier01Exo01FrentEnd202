// Le composant Resultat
const Res = ()=> {
    return (
      <div className='form_control'>
        <label htmlFor='res'>Resultat : </label>
        <input type='number' id='res' readOnly/>
      </div>
    );
  }

export default Res;
