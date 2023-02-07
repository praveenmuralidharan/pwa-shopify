import ProductGrid from "./index";
const products = require("../../json/product-grid-6.json");
  
export default function ProductGrid6(args) {
    return (
        <div className={"bg-white " + (args.extraClass !== undefined ? args.extraClass : "")}>
            <div className="py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-3 lg:grid-cols-6 xl:gap-x-8">
                    {products.map((product) => (
                        <ProductGrid product={product} key={product.id}/>
                    ))}
                </div>
            </div>
        </div>
    )
}
