// import React, { useState, useEffect } from 'react';
// import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
// // import './App.css'
// import Navbar from './components/Navbar/Navbar';
// import Sidebar from './components/Sidebar/Sidebar';
// import Menu from './pages/Menu/Menu';
// import Deliveries from './pages/Deliveries/Deliveries';
// import Login from './pages/Login/Login';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// function App() {
//   const url = 'http://localhost:4000';
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const navigate = useNavigate();

//   const ProtectedRoute = ({ isAuthenticated, children }) => {
//     return isAuthenticated ? children : <Navigate to="/login" />;
//   };

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       setIsAuthenticated(true);
//     } else {
//       navigate('/login');
//     }
//   }, [navigate]);

//   return (
//     <div>
//       <ToastContainer />
//       <Navbar />
//       <hr />
//       <div className="app-content">
//         <Sidebar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
//         <Routes>
//           <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
//           <Route path="/menu" element={
//             <ProtectedRoute isAuthenticated={isAuthenticated}>
//               <Menu url={url} />
//             </ProtectedRoute>
//           } />
//           <Route path="/deliveries" element={
//             <ProtectedRoute isAuthenticated={isAuthenticated}>
//               <Deliveries url={url} />
//             </ProtectedRoute>
//           } />
//           <Route path="*" element={<Navigate to="/login" />} />
//         </Routes>
//       </div>
//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Menu from './pages/Menu/Menu';
import Deliveries from './pages/Deliveries/Deliveries';
import Login from './pages/Login/Login';
import Carts from './pages/Customers/Carts';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const url = 'http://localhost:4000';
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // For handling loading state
  const navigate = useNavigate();

  const verifyToken = () => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
    setIsLoading(false); // Set loading to false after verification
  };

  useEffect(() => {
    verifyToken();
  }, []);

  const ProtectedRoute = ({ isAuthenticated, children }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

  if (isLoading) {
    return <div>Loading...</div>; 
  }

  return (
    <div>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
        <Routes>
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/menu" element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Menu url={url} />
            </ProtectedRoute>
          } />
          <Route path="/deliveries" element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Deliveries url={url} />
            </ProtectedRoute>
          } />
          <Route path="/carts" element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Carts url={url} />
            </ProtectedRoute>
          } />
          <Route path="*" element={<Navigate to={isAuthenticated ? "/menu" : "/login"} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
