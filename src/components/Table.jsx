import "./Table.css";
const Table = ({products}) => {
    return (
        <div className="product-table-container">
        <h2 className="table-title">Product List</h2>
        <table className="product-table">
            <thead>
            <tr>
                <th>PRODUCT ID</th>
                <th>Product Name</th>
                <th>Category</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>
                {products.map((products) => (
                    <tr key={products.id}>
                        <td>{products.id}</td>
                        <td>{products.productName}</td>
                        <td>{products.category}</td>
                        <td>{products.price}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    );
};
export default Table;