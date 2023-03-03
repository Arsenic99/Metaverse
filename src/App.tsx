import { Route, Routes } from 'react-router-dom';
import './App.css';
import { HeaderContainer } from './components/layout/headerContainer';
import Main from './pages/main';
import { PersonalContainer } from './pages/personalContainer';

function App() {
  return (
    <div className="App bg-[#171719] text-white">
      <HeaderContainer />
      <div className="mycontainer">
        <Routes>
          <Route path='/TestFront' element={<Main />} />
          <Route path='/personal/:id' element={<PersonalContainer />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
