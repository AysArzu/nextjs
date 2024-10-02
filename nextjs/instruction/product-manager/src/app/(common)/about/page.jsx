import Link from "next/link";
import React from "react";

const Page = () => {
	return (
		<div>
			About Page

      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>



			<p>
				<Link href="/">Home</Link>
			</p>
			<p>
				<Link
					href={{
						pathname: "/products",
						query: {
							q: "test",
							page: 1,
							limit: 12,
							sort: "name",
							order: "asc",
							status: "active",
							category: "laptop",
						},
					}}
				>
					Products
				</Link>
			</p>
		</div>
	);
};

export default Page;