import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import BeforeLogin from './pages/BeforeLogin';
import Login from './pages/Login';
import Join from './pages/Join';
import FindID from './pages/FindID';
import FindPW from './pages/FindPW';
import Main from './pages/Main';
import MyInfo from './pages/MyInfo';
import ChangeInfo from './pages/ChangeInfo';
import AddColth from './pages/AddCloth';
import ClothList from './pages/ClothList';
import Search from './pages/Search';
import Favorite from './pages/Favorite';
import FileUploadTest from './pages/FileUploadTest';
import TestImage from './pages/TestImage';
import AboutCloth from './pages/AboutCloth';
import ChangeCloth from './pages/ChangeCloth';
import TestPage from './pages/TestPage';
import ChangeTest from './pages/ChangeTest';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/changetest' element={<ChangeTest />} />
        <Route path='/printtest' element={<TestPage />} />
        <Route path='/changecloth' element={<ChangeCloth />} />
        <Route path='/aboutcloth' element={<AboutCloth />} />
        <Route path='/testimage' element={<TestImage />} />
        <Route path='/filetest' element={<FileUploadTest />} />
        <Route path='/favorite' element={<Favorite />} />
        <Route path='/search' element={<Search />} />
        <Route path='/clothlist' element={<ClothList />} />
        <Route path='/addcloth' element={<AddColth />} />
        <Route path='/changeinfo' element={<ChangeInfo />} />
        <Route path='/myinfo' element={<MyInfo />} />
        <Route path='/main' element={<Main />} />
        <Route path='/findpw' element={<FindPW />} />
        <Route path='/findid' element={<FindID />} />
        <Route path='/join' element={<Join />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<BeforeLogin />} />
      </Routes>
    </Router>
  );}


export default App;