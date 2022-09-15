import './App.css';

// Le composant Pht
const Pht = ()=> {
  return (
    <div className='form_control'>
      <label htmlFor='pht'>Prix Hors taxe : </label>
      <input type='number' id='pht' placeholder='pht....'/>
    </div>
  );
}

// Le composant TVA
const TVA = ()=> {
  return (
    <div className='form_control'>
      <label htmlFor='tva'>Taux TVA : </label>
      <input type='number' id='tva' placeholder='tva....'/>
    </div>
  );
}

// Le composants buttons
const Buttons = ()=> {
  return (
    <div className='form_button'>
      <button>Calculer</button>
      <button>Initialiser</button>
    </div>
  );
}

// Le composant Resultat
const Res = ()=> {
  return (
    <div className='form_control'>
      <label htmlFor='res'>resultat : </label>
      <input type='number' id='res' readOnly/>
    </div>
  );
}

const CalculPTTC = ()=> {
  return (
      <fieldset>
        <legend>Calcul de PTTC</legend>
        <Pht />
        <TVA />
        <Buttons />
        <Res />
      </fieldset>
  );
}

function App() {
  return (
    <CalculPTTC />
  );
}

export default App;
