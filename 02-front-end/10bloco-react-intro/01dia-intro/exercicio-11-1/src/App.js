import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

const Task = (value, index) => {
  return (
    <li 
      key={index}
    >
      {value}
    </li>
  );
}

const compromissos = ['comprar água', 'colocar água pros dog', 'regar as prantinha', 'cozinhar um miojão'];

function App() {
  return (
    <div className='App'>
      <Header/>
      <Content/>
      <ol className='list'>
        {compromissos.map((tarefa, index) => Task(tarefa, index))}
      </ol>
      <Footer />
    </div>
  )
}

export default App;
