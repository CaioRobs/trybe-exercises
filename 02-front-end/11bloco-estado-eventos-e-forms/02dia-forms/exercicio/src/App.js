import './App.css';
import AddressInput from './components/AddressInput';
import CityInput from './components/CityInput';
import CPFInput from './components/CPFInput';
import EmailInput from './components/EmailInput';
import HomeTypeInput from './components/HomeTypeInput';
import NameInput from './components/NameInput';
import StatesInput from './components/StatesInput';

function App() {
  return (
    <div className="App">
      <h1>Forms</h1>
      <form>
        <fieldset>
          <NameInput />
          <EmailInput />
          <CPFInput />
          <AddressInput />
          <CityInput />
          <StatesInput />
          <HomeTypeInput />
        </fieldset>
        
        <fieldset>
        </fieldset>
        
        <button></button>
        <button></button>
      </form>
    </div>
  );
}

export default App;
