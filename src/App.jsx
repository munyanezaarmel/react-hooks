

import React from 'react';
import  useDataLoading  from './useDataLoading';
import  useWindowSize  from './useWindowSize';
function App() {
  const { loading, data, error } = useDataLoading('https://api.imgflip.com/get_memes');
  const { height, width } = useWindowSize();
  return (
    <div className="app-container">
    <div className="window">
      <p>Window Height: {height}</p>
      <p>Window Width: {width}</p>
    </div>
  
    <div className='data-loading'>
      <p>Loading: {loading.toString()}</p>
      <p>Data: {JSON.stringify(data)}</p>
      <p>Error: {JSON.stringify(error)}</p>
    </div>
    </div>
  );
}

export default App;