import { wait } from "@/helpers/functions";
import React from "react";

const Page = async () => {
	await wait(3000);

  throw new Error("Redirection error");

	return <div>Contact Page</div>;
};

export default Page;