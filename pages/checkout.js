import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import Header from "./components/Header";
import CheckoutProduct from "./components/CheckoutProduct";
import { selectItems, selectTotal } from "./src/slices/basketSlices";
import { useSession } from "next-auth/react";
import { groupBy} from 'lodash';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
const stripePromise = loadStripe(process.env.stripe_public_key); // Variable d'environnement définie par le fichier next.config.js, pour le front

function Checkout() {
   /* const items = useSelector(selectItems);
    const total = useSelector(selectTotal);
    const [session] = useSession();

    async function createCheckoutSession() {
        const stripe = await stripePromise;

        // Call the backend to create a checkout session...
        const checkoutSession = await axios.post(
            "/api/create-checkout-session",
            {
                items,
                email: session.user.email,
            }
        );

        // After have created a session, redirect the user/customer to Stripe Checkout
        const result = await stripe.redirectToCheckout({
            sessionId: checkoutSession.data.id,
        });

        if (result.error) {
            alert(result.error.message); // @todo : Improve that!
        }
    }

    const groupedItems = Object.values(groupBy(items, "id"));*/
    return (
        <div className="bg-gray-100">
            <Header />

            <main className="lg:flex max-w-screen-2xl mx-auto">
                {/* Left */}
                <div className="flex-grow m-5 shadow-sm">
                    <Image
                        src="https://links.papareact.com/ikj"
                        width={1020}
                        height={250}
                        objectFit="contain"
                    />

                    <div className="flex flex-col p-5 space-y-50 bg-white">
                        <h1>
                            Shooping
                        </h1>
                
                    </div>
                </div>

                {/* Right */}
                
            </main>
        </div>
    );
}

export default Checkout;