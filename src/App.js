import React, { useEffect, useState } from 'react';
import date from 'date-and-time';
import Items from './components/items';
import './Css/styles.css';

const App = () => {
  const [items, setItems] = useState([]);
  const [time, setTime] = useState();

  useEffect(() => {
    const fetchData = async() => {
      const now = new Date();
      setTime(date.format(now, 'h:mm A'))
      await fetch('/api')
        .then(res => res.json())
        .then(data => setItems(data));
    }
    fetchData();
    setInterval(() => {
      fetchData();
    }, 60000);
  }, []);

  console.log(items)
  return (
    <div className="App">
      <div className="header-container">
        <h1 className="header-title">ColourLovers. <span className="header-title-live">Live.</span></h1>
        <p className="last-updated bold">Last Updated at {time}</p>
      </div>
      <div className="items-container">
      {items ? <Items items={items} /> : null}
      </div>
    </div>
  );
};

export default App;
