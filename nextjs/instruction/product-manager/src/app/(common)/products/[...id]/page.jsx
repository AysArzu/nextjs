import React from "react";

const Page = ({ params }) => {

	console.log(params)

	return <div>Product Details Page : {params.id}</div>;
};

export default Page;