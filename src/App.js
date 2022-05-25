import reactLogo from './assets/react-logo.svg';
import ipfsLogo from './assets/ipfs-logo.png';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p> Oliver Thwaites </p>
      </header>
      <div className="App-footer">
        Built with React <img src={reactLogo} className="React-logo" alt="logo" />, Hosted on <img src={ipfsLogo} className="IPFS-logo" alt="logo" />
      </div>
    </div>
  );
}

export default App;
