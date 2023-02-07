import React from 'react'

export default function ProductGrid(args) {
    let product = args.product
    return (
        <div className="rounded-xl bg-white shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
            <a href={product.href}>
                <div className="relative flex items-end overflow-hidden rounded-xl h-[200px]">
                    <img
                        src={product.imageSrc}
                        alt={product.imageAlt} 
                    />
                </div>

                <div className="p-5">
                    <div className="flex items-end justify-between">
                        <div>
                            <h2 className="text-slate-700">
                                {product.name}
                            </h2>
                            <p className="mt-1 text-sm text-slate-400">
                                {product.color}
                            </p>
                        </div>
                        <p className="mb-auto">
                            <span className="text-lg font-bold text-indigo-600">
                                {product.price}
                            </span>
                            <span className="text-sm text-slate-400 line-through">
                                {product.discountedPrice}
                            </span>
                        </p>
                    </div>
                    <div className="text-center text-sm items-center mt-3 rounded-lg bg-indigo-600 px-4 py-1.5 text-white duration-100 hover:bg-indigo-500">
                        Add to cart
                    </div>
                </div>
            </a>
        </div>
    )
}
