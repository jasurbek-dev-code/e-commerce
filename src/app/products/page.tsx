import Feature from "@/components/feature";
import Product from "@/components/product";
import { ProductType } from "@/interfaces";
import React from "react";

export default async function Products() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products: ProductType[] = await res.json();
  return (
    <div className="min-h-screen max-w-7xl mx-auto px-8 xl:px-0 ">
      <Feature />
      <section className="flex flex-col space-y-12">
        <h1 className="text-5xl font-bold text-center">Sammi shop deal</h1>
        <div className="grid-cols-1 grid gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((item) => (
            <Product key={item.id} product={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
