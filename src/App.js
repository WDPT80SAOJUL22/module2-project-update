import { Route, Routes } from 'react-router-dom';
import './App.css';
import EditProject from './pages/EditProject';
import Home from './pages/Home';
import NewProject from './pages/NewProject';
import ProjectDetail from './pages/ProjectDetail';

 const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/new-project' element={<NewProject/>}/>
        <Route path='/project/:id' element={<ProjectDetail/>}/>
        <Route path='/edit-project/:id' element={<EditProject/>}/>
      </Routes>
    </div>
  );
}

export default App;
