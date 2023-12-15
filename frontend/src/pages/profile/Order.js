import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import OrderDetail from './OrderDetail';

const Order = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Gọi API để lấy danh sách đơn hàng của người dùng
    axios.get('http://localhost:8080/api/orders')
      .then(response => {
        setOrders(response.data);
      })
      .catch(error => {
        console.error('Lấy danh sách đơn hàng thất bại:', error);
      });
  }, []);
  return (
    <section className="section-content padding-y">
    <div className="container">
    
    <div className="row">
    <aside className="col-md-3">
		<nav className="list-group">
			<a className="list-group-item" href="/profile/main"> Account overview  </a>
			<a className="list-group-item" href="/profile/address"> My Address </a>
			<a className="list-group-item active" href="/profile/order"> My Orders </a>
			<a className="list-group-item" href="/profile/wishlist"> My wishlist </a>
			<a className="list-group-item" href="/profile/seller"> My Selling Items </a>
			<a className="list-group-item" href="/profile/setting"> Settings </a>
            <a className="list-group-item" href="/"> Log out </a>
	
		</nav>
	</aside> 
        <main className="col-md-9">
    
            <article className="card mb-4">
            <header className="card-header">
                <a href="#" className="float-right"> <i className="fa fa-print"></i> Print</a>
                <strong className="d-inline-block mr-3">Order ID: 6123456789</strong>
                <span>Order Date: 16 December 2018</span>
            </header>
            <div className="card-body">
                <div className="row"> 
                    <div className="col-md-8">
                        <h6 className="text-muted">Delivery to</h6>
                        <p>Michael Jackson  
                        Phone +1234567890 Email: myname@gmail.com 
                        Location: Home number, Building name, Street 123, 
                        P.O. Box: 100123
                         </p>
                    </div>
                    <div className="col-md-4">
                        <h6 className="text-muted">Payment</h6>
                        <span className="text-success">
                            <i className="fab fa-lg fa-cc-visa"></i>
                            Visa  **** 4216  
                        </span>
                        <p>Subtotal: $356 
                         Shipping fee:  $56 
                         <span className="b">Total:  $456 </span>
                        </p>
                    </div>
                </div>
            </div> 
            <div className="table-responsive">
            <table className="table table-hover">
                <tbody><tr>
                    <td width="65">
                    <img src={require("../../assets/images/items/aocsgo1.jpg")}style={{width:"80%"}}/>
                    </td>
                    <td> 
                        <p className="title mb-0">Product name goes here </p>
                        <var className="price text-muted">USD 145</var>
                        
                    </td>
                    <td> Seller Nike clothing </td>
                    <td width="250"> <a href="#" className="btn btn-outline-primary">Track order</a> 
                        <div className="dropdown d-inline-block">
                             <a href="#" data-toggle="dropdown" className="dropdown-toggle btn btn-outline-secondary">More</a>
                             <div className="dropdown-menu dropdown-menu-right">
                                 <a href="#" className="dropdown-item">Return</a>
                                 <a href="#"  className="dropdown-item">Cancel order</a>
                             </div>
                        </div> 
                    </td>
                </tr>
                
            </tbody></table>
            </div> 
            </article> 
    
    
            
    
        </main> 
    </div>
    
    </div>
    </section>
//      <section classNameName="section-content padding-y">
//      <div classNameName="container">
//        {/* Nội dung hiển thị danh sách đơn hàng */}
//        {orders.map(order => (
//          <OrderDetail key={order.id} order={order} />
//        ))}
//      </div>
//    </section>
  );
};

export default Order;
