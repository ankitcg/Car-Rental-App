import {BrowserRouter, Routes, Route } from 'react-router-dom';
import AddCar from './component/AddCar'


function App () {
  return (
      <div>
        <BrowserRouter>
        <Routes>
          <Route path='/addcar' element={<AddCar/>}/>
        </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
