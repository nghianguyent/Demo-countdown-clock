import React, { useState, useEffect } from 'react';
import Clock from './components/Clock/Clock.jsx';
import LoadingScreen from './components/LoadingScreen/LoadingScreen.jsx';
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => 
    checkToken().then(() => setLoading(false))
  );
  return (
    <>
    {loading === false ? (
        <Clock /> 
    ) : (
      <LoadingScreen />
    )}
  </>
  )
}
export default App;
