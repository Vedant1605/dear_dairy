import { useState } from 'react';
import Layout from './Layout/Layout';
import DairyDataContext from './store/DairyData-context';
const MONTH = ["January","February","March","April","May","June","July","August","September","October","November","December"];
function App() {
  const [data,setData]=useState('Hello')
  const onchangeHandler=(e)=>{
    setData(e.target.value);
  }
  return (
    <DairyDataContext.Provider
      value={
        {
          text_data: data,
          typed:onchangeHandler,
          date:MONTH[new Date().getMonth()]
        }
      }
    >
      <div className="App">
        <Layout />
      </div>
    </DairyDataContext.Provider>
  );
}

export default App;
