import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Cart from './pages/Cart';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './pages/home/Home';
import AddTask from './pages/addTask/AddTask';
import MyTasks from './pages/myTasks/MyTasks';
import CompletedTasks from './pages/completedTasks/CompletedTasks';
import Login from './pages/login/Login';
import SignUp from './pages/signUp/SignUp';

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Main />} >
      <Route path='/' element={<Home />} />
      <Route path='/addTask' element={<AddTask />} />
      <Route path='/mytasks' element={<MyTasks />} />
      <Route path='/completedTasks' element={<CompletedTasks />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signUp' element={<SignUp />} />

    </Route>
  ))
  return (
    <div className="App">
      <RouterProvider router={router} />

    </div>
  );
}

export default App;
