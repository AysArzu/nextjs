import Link from "next/link";
import React from "react";
import { Button } from "react-bootstrap";
import { TfiPlus } from "react-icons/tfi";

export const ButtonNewProduct = () => {
  return (
    <Button variant="warning" href="/dashboard/products/new" as={Link}>
    <TfiPlus/>New 
    </Button>
  );
};
