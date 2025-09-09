import { ProductType } from "@/interfaces";
  import Link from "next/link";
import React from "react";
import CustomeImage from "./customImage";

export default function Product({ product }: { product: ProductType }) {
  return (
    <Link
      href={`product/${product.id}`}
      className="h-96 flex flex-col group  p-6 rounded-lg hover:scale-105 transition-transform ease-out duration-200 border"
    >
      <div className="relative max-h-72 flex-1">
        <CustomeImage product={product} fill />
      </div>
      <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font mt-5">
        {product.category}
      </h3>
      <h2 className="font-semibold flex items-center justify-between mt-4 mb-1">
        <p className="w-44 truncate">{product.title}</p>
        <p>${product.price}</p>
      </h2>
      <p className="leading-relaxed text-base line-clamp-2">
        {product.description}
      </p>
    </Link>
  );
}
