import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Display from './components/display'


function App() {

  const [tabs, setTabs] = useState([
    {
    message: "hello world", 
    },
    {
    message: "hello earth",
    },
    {
    message: "Yessirr",
    }
  ])


  return (
    <div className="App">
      <Display tabs={tabs} />
    </div>
  );
}

export default App;
