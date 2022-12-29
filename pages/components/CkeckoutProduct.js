import { MinusSmIcon, PlusIcon, StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useDispatch } from "react-redux";
import {
    addToBasket,
    removeFromBasket,
    removeGroupedFromBasket,
} from "../src/slices/basketSlice";
import datosJson from './datos.json';
const products = datosJson["products"];


function CheckoutProduct(products) {
    const dispatch = useDispatch();
    const id = products.id;
    const title = products.title;
    const rating = products.rating;
    const price = products.price;
    const description = products.description;
    const category = products.category;
    const imagen = products.imagen;
    const hasPrime = products.hasPrime;
    const quantity = products.quantity;

    const total = price * quantity;

    function addItemToBasket() {
        const product = {
            id,
            title,
            price,
            description,
            category,
            imagen,
            rating,
            hasPrime,
        };

        // Sending the product via an action to the redux store (= basket "slice")
        dispatch(addToBasket(product));
        
    }

    function removeItemFromBasket() {
        dispatch(removeFromBasket({ id }));
    }

    function removeGroupFromBasket() {
        dispatch(removeGroupedFromBasket({ id }));
    }

    

    return (
        <div className="block py-4 sm:grid sm:grid-cols-5 my-16 sm:my-3">
            <div className="text-center sm:text-left">
                <Image
                    src={imagen}
                    width={200}
                    height={200}
                />
            </div>

            {/* Middle */}
            <div className="col-span-3 mx-5 mb-4 sm:mb-0">
                <p className="my-3">{title}</p>
                <div className="flex">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <StarIcon key={i} className="h-5 text-yellow-500" />
                        ))}
                </div>
                <p className="text-xs my-2 line-clamp-3">{description}</p>
                {quantity} × {price} 
                <span className="font-bold">
                    <br/>Total: {total}
                </span>
                {hasPrime && (
                    <div className="flex items-center space-x-2">
                        <img
                            loading="lazy"
                            className="w-12"
                            src="https://links.papareact.com/fdw"
                            alt=""
                        />
                        <p className="text-xs text-gray-500">
                            FREE Next-day Delivery
                        </p>
                    </div>
                )}
            </div>

            {/* Buttons on the right of the products */}
            <div className="flex flex-col space-y-2 my-auto justify-self-end">
                <div className="flex justify-between xs:justify-start">
                    <button
                        className="button sm:p-1"
                        onClick={removeItemFromBasket}>
                        <MinusSmIcon className="h-5 text-black" />
                    </button>
                    <div className="p-2 whitespace-normal sm:p-1 sm:whitespace-nowrap">
                        Quantity: <span className="font-bold">{quantity}</span>
                    </div>
                    <button className="button sm:p-1" onClick={addItemToBasket}>
                        <PlusIcon className="h-5 text-black" />
                    </button>
                </div>
                <button className="button" onClick={removeGroupFromBasket}>
                    Remove from Basket
                </button>
            </div>
        </div>
    );
    
}

export default CheckoutProduct;

