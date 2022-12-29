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
import Media from './pages/media/Media';
import PrivateRoute from './route/PrivateRoute';
import UpdateTask, { loader } from './pages/updateTask/UpdateTask';
import NotFound from './pages/notFound/NotFound';
import CompletedTaskComment, { loader as taskLoader } from './pages/completedTaskComments/CompletedTaskComment';

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Main />} >
      <Route path='/' element={<Home />} />
      <Route path='/addTask' element={<PrivateRoute><AddTask /></PrivateRoute>} />
      <Route path='/mytasks' element={<PrivateRoute><MyTasks /></PrivateRoute>} />
      <Route path='/tasks/:taskId' element={<PrivateRoute><UpdateTask /></PrivateRoute>} loader={loader} />
      <Route path='/completedTasks' element={<PrivateRoute><CompletedTasks /></PrivateRoute>} />

      <Route path='/completedTasks/:comTaskId' element={<PrivateRoute><CompletedTaskComment /></PrivateRoute>} loader={taskLoader} />

      <Route path='/media' element={<PrivateRoute><Media /></PrivateRoute>} />
      <Route path='/login' element={<Login />} />
      <Route path='/signUp' element={<SignUp />} />
      <Route path='*' element={<NotFound />} />

    </Route>
  ))
  return (
    <div className="App">
      <RouterProvider router={router} />

    </div>
  );
}

export default App;
