import './App.css'

function App ({ friend} ) {

  return (
      <secction>
          <h1>Hola {friend}</h1>
      </secction>
  )
}


const modificar = () => {

  return (
    <div>
      <App friend ="My friend"/>
    </div>
  );
};


export default modificar
