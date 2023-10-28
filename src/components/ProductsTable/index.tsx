import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/products/actions";
import './style.scss';

const ProductsTable: React.FC = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productReducer);
  const [sortedData, setSortedData] = useState([]);

  useEffect(() => {
    dispatch(fetchProducts());
    console.log(products)
  }, [dispatch]);

  useEffect(() => {
    setSortedData(products.data || []);
  }, [products]);


  const handleSort = (column:string) => {
    const sorted = [...sortedData].sort((a, b) =>
        a.attributes[column] > b.attributes[column] ? 1 : -1
    );
    
    setSortedData(sorted);
  };

  return (
    <div className="table-products">
      <table>
        <thead>
            <tr>
                <th>ID</th>
                <th onClick={() => handleSort('title')}>Title</th>
                <th onClick={() => handleSort('price')}>Price (AED)</th>
                <th onClick={() => handleSort('quantity')}>Quantity (Item)</th>
                <th onClick={() => handleSort('description')}>Description</th>
                {/* {userRole === 'Editor' && (
                <th>Actions</th>
                )} */}
            </tr>
        </thead>
        <tbody>
            {sortedData?.map((item, index) => (
                <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.attributes.title}</td>
                    <td>{item.attributes.price}</td>
                    <td>{item.attributes.quantity}</td>
                    <td>{item.attributes.description}</td>
                    {/* {userRole === 'editor' && (
                        <td>
                            <button>Edit</button>
                            <button>Delete</button>
                        </td>
                    )} */}
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductsTable;