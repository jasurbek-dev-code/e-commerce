import CustomeImage from "@/components/customImage";
import { ProductType } from "@/interfaces";
import { notFound } from "next/navigation";
import React from "react";

export default async function ProductDetailPage({
  params: { id },
}: {
  params: { id: string };
}) {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product: ProductType = await res.json();
    return (
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4 mt-48 pb-10">
        <CustomeImage product={product} />
        <div className="divide-y-2 divide-gray-300">
          <div className="space-y-2 pb-8">
            <h1 className="text-2xl md:text-4xl font-bold">{product.title}</h1>
            <h1 className="text-gray-500 font-bold text-xl md:text-3xl">
              ${product.price}
            </h1>
          </div>
          <div className="pt-4">
            <p className="text-xs md:text-lg">{product.description}</p>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.log(error);
    notFound();
  }
}
