// import React, { useEffect, useState } from 'react';
// import './Deliveries.css';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Deliveries = ({ url }) => {
//   const [deliveries, setDeliveries] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const updateDeliveryStatus = async (deliveryId, newStatus) => {
//     if (!window.confirm(`Are you sure you want to change the status to ${newStatus}?`)) return;

//     setLoading(true);

//     try {
//       const response = await axios.put(`${url}/api/delivery/update/${deliveryId}`, { status: newStatus });
//       if (response.data.success) {
//         setDeliveries(deliveries.map(delivery =>
//           delivery.delivery_id === deliveryId ? { ...delivery, status: newStatus } : delivery
//         ));
//         toast.success('Status updated successfully!');
//       } else {
//         toast.error('Failed to update status. Please try again.');
//       }
//     } catch (error) {
//       toast.error('Error updating status. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetch(`${url}/api/delivery/get`)
//       .then(response => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then(data => setDeliveries(data))
//       .catch(error => console.error('Error fetching deliveries:', error));
//   }, [url]);

//   const statusClasses = {
//     Pending: 'status-pending',
//     Completed: 'status-completed',
//     Cancelled: 'status-cancelled',
//   };

//   return (
//     <div className="deliveries">
//       {loading && <div className="loading-overlay">Updating status...</div>}
//       <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
//       {deliveries.length === 0 ? (
//         <p>No deliveries available.</p>
//       ) : (
//         <ul>
//           {deliveries.map(delivery => (
//             <li key={delivery.delivery_id} className="delivery-item">
//               <div className="delivery-info">
//                 <p><strong>Delivery ID:</strong> {delivery.delivery_id}</p>
//                 <p><strong>Address:</strong> {delivery.street}, {delivery.city}, {delivery.state}, {delivery.zip}</p>
//                 <p><strong>Contact:</strong> {delivery.phone_num}</p>
//                 <p><strong>Status:</strong> {delivery.status}</p> 
//                 <div className="status-buttons">
//                   <p>Change Status:</p>
//                   {['Pending', 'Completed', 'Cancelled'].map(status => (
//                     <button
//                       key={status}
//                       onClick={() => updateDeliveryStatus(delivery.delivery_id, status)}
//                       className={`status-button ${statusClasses[status]} ${delivery.status === status ? 'active' : ''}`}
//                     >
//                       {status}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Deliveries;


import React, { useEffect, useState } from 'react';
import './Deliveries.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Deliveries = ({ url }) => {
  const [deliveries, setDeliveries] = useState([]);
  const [loading, setLoading] = useState(false);

  const updateDeliveryStatus = async (deliveryId, newStatus) => {
    if (!window.confirm(`Are you sure you want to change the status to ${newStatus}?`)) return;

    setLoading(true);

    try {
      const response = await axios.put(`${url}/api/delivery/update/${deliveryId}`, { status: newStatus });
      if (response.data.success) {
        setDeliveries(deliveries.map(delivery =>
          delivery.delivery_id === deliveryId ? { ...delivery, status: newStatus } : delivery
        ));
        toast.success('Status updated successfully!');
      } else {
        toast.error('Failed to update status.');
      }
    } catch (error) {
      toast.error('Error updating status.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetch(`${url}/api/delivery/get`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setDeliveries(data))
      .catch(error => console.error('Error fetching deliveries:', error));
  }, [url]);

  const statusClasses = {
    Pending: 'status-pending',
    Completed: 'status-completed',
    Cancelled: 'status-cancelled',
  };

  return (
    <div className="deliveries">
      {loading && <div className="loading-overlay">Updating status...</div>}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      {deliveries.length === 0 ? (
        <p>No deliveries available.</p>
      ) : (
        <table className="deliveries-table">
          <thead>
            <tr>
              <th>Delivery ID</th>
              <th>Address</th>
              <th>Contact</th>
              <th>Status</th>
              <th>Change Status</th>
            </tr>
          </thead>
          <tbody>
            {deliveries.map(delivery => (
              <tr key={delivery.delivery_id}>
                <td>{delivery.delivery_id}</td>
                <td>{`${delivery.street}, ${delivery.city}, ${delivery.state}, ${delivery.zip}`}</td>
                <td>{delivery.phone_num}</td>
                <td className={statusClasses[delivery.status]}>{delivery.status}</td>
                <td>
                  <div className="status-buttons">
                    {['Pending', 'Completed', 'Cancelled'].map(status => (
                      <button
                        key={status}
                        onClick={() => updateDeliveryStatus(delivery.delivery_id, status)}
                        className={`status-button ${statusClasses[status]} ${delivery.status === status ? 'active' : ''}`}
                      >
                        {status}
                      </button>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Deliveries;
