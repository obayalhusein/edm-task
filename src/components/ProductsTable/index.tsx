import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/products/actions";
import { RootState } from "../../redux/types";
import { ProductAttributes, ProductData } from "../../types/ProductTypes";
import './style.scss';

interface CurrentSort {
  column?: string,
  direction: 'asc' | 'desc'
}

type TableHeader = {
  name: keyof ProductAttributes;
  title: string;
};

const ProductsTable: React.FC = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state: RootState) => state.productReducer);
  const [sortedData, setSortedData] = useState<ProductData[]>([]);
  const [currentSort, setCurrentSort] = useState<CurrentSort>({ direction: 'asc' });
  const tableHeaders: TableHeader[] = [
    { title: 'Title', name: 'title' },
    { title: 'Price (AED)', name: 'price' },
    { title: 'Quantity (Item)', name: 'quantity' },
    { title: 'Description', name: 'description' },
  ];

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    setSortedData(products.data);
  }, [products]);

  const handleSort = (column: keyof ProductAttributes) => {
    const direction = currentSort.direction === 'asc' ? 1 : -1;
    const isString = typeof sortedData[0].attributes[column] === 'string';

    const sorted = [...sortedData].sort((a, b) => {
      const valueA = a.attributes[column];
      const valueB = b.attributes[column];
  
      if (isString) {
        return direction * String(valueA).localeCompare(String(valueB));
      } else {
        return direction * (Number(valueA) - Number(valueB));
      }
    });

    setSortedData(sorted);
    setCurrentSort({
      column,
      direction: currentSort.direction === 'asc' ? 'desc' : 'asc',
    });
  };

  return (
    <div className="table-products">
      <table>
        <thead>
            <tr>
                {tableHeaders.map((item, index) => (
                  <th onClick={() => handleSort(item.name)} key={index}>{item.title}</th>
                ))}
            </tr>
        </thead>
        <tbody>
            {sortedData?.map((item, index) => (
                <tr key={index}>
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