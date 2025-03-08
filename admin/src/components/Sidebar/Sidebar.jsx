// import React from 'react'
// import './Sidebar.css'
// import { NavLink, useNavigate } from 'react-router-dom'

// const Sidebar = ({ isAuthenticated, setIsAuthenticated }) => {
//   const navigate = useNavigate()

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     setIsAuthenticated(false);
//     navigate('/login');
//   };

//   return (
//     <div className='sidebar'>
//       <div className="sidebar-options"> 
//         <NavLink to='/menu' className="sidebar-option">
//           <p>Menu</p>
//         </NavLink>
//         <NavLink to='/deliveries' className="sidebar-option">
//           <p>Deliveries</p>
//         </NavLink>

//         {isAuthenticated ? (
//           <NavLink className="sidebar-option" onClick={handleLogout}>
//             <p>Logout</p>
//           </NavLink>
//         ) : (
//           <NavLink to='/login' className="sidebar-option">
//             <p>Login</p>
//           </NavLink>
//         )}
//       </div>
//     </div>
//   );

//   // return (
//   //   <div className='sidebar'>
//   //     <div className="sidebar-options">
//   //       <NavLink to='/login' className="sidebar-option">
//   //         <p>Login</p>
//   //       </NavLink>
//   //       <NavLink to='/menu' className="sidebar-option">
//   //         <p>Menu</p>
//   //       </NavLink>
//   //       <NavLink to='/deliveries' className="sidebar-option">
//   //         <p>Deliveries</p>
//   //       </NavLink>
//   //     </div>
//   //   </div>
//   // )
// }

// export default Sidebar


import React from 'react';
import './Sidebar.css';
import { NavLink, useNavigate } from 'react-router-dom';

const Sidebar = ({ isAuthenticated, setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    navigate('/login');
  };

  return (
    <div className='sidebar'>
      <div className="sidebar-options">
        <NavLink to='/menu' className="sidebar-option">
          <p>Menu</p>
        </NavLink>
        <NavLink to='/deliveries' className="sidebar-option">
          <p>Deliveries</p>
        </NavLink>
        <NavLink to='/carts' className="sidebar-option">
          <p>Carts</p>
        </NavLink>

        <div className="sidebar-login">
          {isAuthenticated ? (
            <NavLink to='/login' className="sidebar-option" onClick={handleLogout}>
              <p>Logout</p>
            </NavLink>
          ) : (
            <NavLink to='/login' className="sidebar-option">
              <p>Login</p>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;