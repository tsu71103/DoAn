import React from 'react';
import {Admin, Resource, ListGuesser, fetchUtils} from 'react-admin';
import AdminPanel from "./component/AdminPanel";

import {
  listCategory,
  editCategory,
  createCategory} from "./component/Category";
  
import {
  createProduct,
  editProduct,
  listProduct} from "./component/Product";
import { createFeedback, editFeedback, listFeedback } from './component/Feedback';
import simpleRestProvider from "ra-data-simple-rest"
import { createGallery, editGallery, listGallery } from './component/Gallery';
import { createOrderDetail, editOrderDetail, listOrderDetail } from './component/OrderDetail';
import { createOrder, editOrder, listOrder } from './component/Order';
import { createRole, editRole, listRole } from './component/Role';
import { createToken, editToken, listToken } from './component/Token';
import { createUser, editUser, listUser } from './component/User';
import dataProvider from "./component/CustomDataProvider";


const App = () =>(
<Admin dashboard={AdminPanel} dataProvider={dataProvider}>
    
    
    <Resource name="categories"
    list={listCategory}
    edit={editCategory}
    create={createCategory}
    
    /> 
    <Resource name="products"
    list={listProduct}
    edit={editProduct}
    create={createProduct}
    />
    <Resource name="feedbacks"
    list={listFeedback}
    edit={editFeedback}
    create={createFeedback}
    />
     <Resource name="galleries"
    list={listGallery}
    edit={editGallery}
    create={createGallery}
    />
    <Resource name="orderDetails"
    list={listOrderDetail}
    edit={editOrderDetail}
    create={createOrderDetail}
    />
    <Resource name="orders"
    list={listOrder}
    edit={editOrder}
    create={createOrder}
    />
     <Resource name="roles"
    list={listRole}
    edit={editRole}
    create={createRole}
    />
    <Resource name="tokens"
    list={listToken}
    edit={editToken}
    create={createToken}
    />
     <Resource name="users"
    list={listUser}
    edit={editUser}
    create={createUser}
    />
  </Admin>
);
export default App;
