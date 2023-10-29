import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/products/actions";
import { RootState } from "../../redux/types";
import { ProductAttributes, ProductData } from "../../types/ProductTypes";
import './style.scss';
import UiButton from "../UiElements/UiButton";
import ProductEdit from "../ProductEdit";
import ProductDelete from "../ProductDelete";

interface CurrentSort {
  column?: string,
  direction: 'asc' | 'desc'
}

type TableHeader = {
  column: keyof ProductAttributes;
  title: string;
};

interface ProductsTableProps {
  searchText?: string;
}

const ProductsTable: React.FC<ProductsTableProps> = ({searchText}) => {
  const dispatch = useDispatch();
  const { products } = useSelector((state: RootState) => state.productReducer);
  const [sortedData, setSortedData] = useState<ProductData[]>([]);
  const [currentSort, setCurrentSort] = useState<CurrentSort>({ direction: 'asc' });
  const tableHeaders: TableHeader[] = [
    { title: 'Title', column: 'title' },
    { title: 'Price (AED)', column: 'price' },
    { title: 'Quantity (Item)', column: 'quantity' },
    { title: 'Description', column: 'description' },
  ];

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    setSortedData(products.data);
  }, [products]);

  useEffect(() => {
    if (searchText) {
        const filtered = [...products.data].filter(item => {
            const attributes = item.attributes;
            const lowercaseSearchText = searchText.toLowerCase();

            for (const key in attributes) {
                if (Object.prototype.hasOwnProperty.call(attributes, key) && String(attributes[key]).toLowerCase().includes(lowercaseSearchText)) {
                    return true;
                }
            }
            return false;
        });
        setSortedData(filtered);
    } else {
        setSortedData(products.data);
    }
}, [searchText]);

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
                  <th
                    onClick={() => handleSort(item.column)}
                    key={index}
                    className={`sortable`}
                  >
                    {item.title}
                    <span className={`arrow ${currentSort.column == item.column ? 'active' : ''} ${currentSort.direction}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
                      </svg>
                    </span>
                  </th>
                ))}
                <th>
                  Actions
                </th>
            </tr>
        </thead>
        <tbody>
            {sortedData?.map((item, index) => (
                <tr key={index}>
                    <td><span>{item.attributes.title}</span></td>
                    <td><span>{item.attributes.price}</span></td>
                    <td><span>{item.attributes.quantity}</span></td>
                    <td><span>{item.attributes.description}</span></td>
                    <td>
                        <div className="flex">
                          <ProductEdit item={item} />
                          <ProductDelete item={item} />
                        </div>
                    </td>
                </tr>
            ))}
        </tbody>
      </table>

      {!sortedData.length && (
        <div className="no-data">
          No data found
        </div>
      )}
    </div>
  );
}

export default ProductsTable;