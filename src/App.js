import React, { useState, useEffect, Suspense } from 'react';
import LoadingScreen from './components/LoadingScreen/LoadingScreen.jsx';
const Clock = React.lazy(() => import('./components/Clock/Clock.jsx'));
function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Clock />
    </Suspense>
  )
}
export default App;
