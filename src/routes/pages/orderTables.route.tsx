import OrderCard from "../components/OrderCard.component";

const OrderTable = () => {
  return (
    <div className='space-y-10'>
      <div className='overflow-hidden border border-card-border rounded-lg'>
        <OrderCard />
      </div>
      <div className='overflow-hidden border border-card-border rounded-lg'>
        <OrderCard />
      </div>
    </div>
  );
};

export default OrderTable;
