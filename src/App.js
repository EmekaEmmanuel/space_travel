import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RocketPage from './Pages/RocketPage';
import MissionPage from './Pages/MissionPage';
import MyProfilePage from './Pages/MyProfilePage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<RocketPage />} />
          <Route path="/MyProfile" element={<MyProfilePage />} />
          <Route path="/Missions" element={<MissionPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
