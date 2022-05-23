import {React} from 'react'
import { Routes, Route } from "react-router-dom";
import Avatars from './components/avatars';
import { Provider } from 'react-redux';

import store from './store';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Avatars />} />
        {/* <Route path="fingerprint" element={<Fingerprint />} />
        <Route path="about" element={<About />} /> */}
      </Routes>
    </div>
    </Provider>
  );
}

export default App;
