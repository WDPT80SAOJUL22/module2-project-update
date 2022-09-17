import { Route, Routes } from 'react-router-dom';
import './App.css';
import {EditProject, Home, NewProject, ProjectDetail} from './pages'

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
