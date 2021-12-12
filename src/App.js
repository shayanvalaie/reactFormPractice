import './App.css';
import { useState } from 'react';
// import Tabs from './components/Tabs';
import Tab from './components/Tab';



function App() {
  // const [ tabs, setTabs ] = useState([]);

  const tabList = [
    { label: 'Tab 1', content: 'Tab 1 content is showing here' },
    { label: 'Tab 2', content: 'Tab 2 content is showing here' },
    { label: 'Tab 3', content: 'Tab 3 content is showing here' }
  ];

  const [message, setMessage] = useState("");

  return (
    <div className="App">
      {tabList.map((tab, i) => <Tab key={i} tab={tab} setmessage={setMessage} />)}
      <p>{message}</p>
    </div>
  );
}

export default App;