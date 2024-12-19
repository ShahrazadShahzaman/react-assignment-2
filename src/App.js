import Header from './components/Header'
import Footer from './components/Footer'
import Table from './components/Table';

const App = () => {
  const products =[
    {id: 101 ,productName: 'Wireless Mouse', category : 'Electronics', price: '$25.99'},
    {id: 102 ,productName: 'Bluetooth Headphones', category : 'Electronics', price: '$49.99'},
    {id: 103 , productName: 'Desk Chair', category : 'Furnitures', price: '$89.99'},
    {id: 104 , productName: 'Water Bottle', category : 'Accessories', price: '$12.50'},
  ]
  
  return (
    <>
    <div>
      <Header />
      <Table products={products} />
      <Footer />
    </div>
    </>
  );
};
export default App;