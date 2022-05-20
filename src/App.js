import Header from './components/Header';
import Posts from './components/Posts';
import Users from './components/Users';
import Comments from './components/Comments';
import Photos from './components/Photos';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path="/posts" element={<Posts/>}></Route>
        <Route path="/users" element={<Users/>}></Route>
        <Route path="/comments" element={<Comments/>}></Route>
        <Route path="/profiles" element={<Photos/>}></Route>
      </Routes>
    </Router>
      
    </>
  );
}

export default App;
