import './App.css'
import Notes from './components/Notes'
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import CreateNoteForm from './components/CreateNoteForm';
import { useSelector } from 'react-redux';

function App() {
  
  const { darkMode } = useSelector((state) => state.notes);

  return (
    <div className={`${darkMode ? "dark-mode" : "default-mode"}`}>
      <div className='container'>
        <Header />
        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="/createNote" element={<CreateNoteForm />} />
        </Routes>
      </div>
    </div>
  )
}

export default App