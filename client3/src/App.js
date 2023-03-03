import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Edit from './pages/Edit';
import CreatePlayer from './pages/CreatePlayer';
import PageNotFound from './pages/PageNotFound';
import Navigation from './components/Navigation';



function App() {
  return (
    <>
    <Navigation/>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/createplayer' element={<CreatePlayer />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/edit/:id' element={<Edit />} />
        <Route path='*' element={<PageNotFound />} />

    </Routes>
    </>
  );
}

export default App;
