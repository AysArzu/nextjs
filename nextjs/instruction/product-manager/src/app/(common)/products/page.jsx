import { PageHeader } from "@/components/page-header";
import { ProductList } from "@/components/product-list";
import React from "react";

export const metadata = {
  title: "Products",
  description: "Cheap electronic devices",
};
export const revalidate = 120;

const Page = async () => {

/* bu kodlari client side componentte kullaniriz. server side componentte kullanilmaz!!!
const [products, setProducts] = useState([])
 useEffect(() => {
  fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then((data) => setProducts(data) );
},[])
 */
const res = await fetch('https://66c395ffd057009ee9c0b957.mockapi.io/products')
const data = await res.json();
;
  return (
  <>
  <PageHeader title="Products"/>
  <ProductList products={data}/>
  </>);
};

export default Page;
