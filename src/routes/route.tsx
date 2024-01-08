import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Layout from "./layout";
import Dashboard from "./pages/dashboard.route";
import CustomerTable from "./pages/customerTable.route";
import Tasks from "./components/Tasks";
import OrderTable from "./pages/orderTables.route";
import ProductForm from "./pages/productForm.route";
import ProductTable from "./pages/productTable.route";
import Inbox from "./pages/inbox.route";
import Activities from "./pages/activities.route";
import SignIn from "./pages/signin.route";
import AdminPage from "./pages/admin.route";
import MemberAddForm from "./pages/memberAddForm.route";
import Profile from "./pages/profile.route";
import Notfound from "./pages/Notfound.route";
import { useSelector } from "react-redux";
import { RootState } from "../services/store";

const Main = () => {

  const auth = useSelector((state: RootState) => state.auth.token);

  // this is another way but not very efficient
  if (!auth) {
    return (
      <Routes>
        <Route index element={<SignIn />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path='customers'>
          <Route index element={<CustomerTable />} />
        </Route>
        <Route path='orders'>
          <Route index element={<OrderTable />} />
        </Route>
        <Route path='products'>
          <Route index element={<ProductTable />} />
          <Route path='addproduct' element={<ProductForm />} />
        </Route>
        <Route path='reports'>
          <Route index element={<Tasks />} />
        </Route>
        <Route path='inbox'>
          <Route index element={<Inbox />} />
        </Route>
        <Route path='activities'>
          <Route index element={<Activities />} />
        </Route>
        <Route path='/admin'>
          <Route index element={<AdminPage />} />
          <Route path='addmember' element={<MemberAddForm />} />
          <Route path='member' element={<Profile />} />
        </Route>
        <Route path='*' element={<Notfound />} />
      </Route>
    </Routes>
  );
};

export default Main;
