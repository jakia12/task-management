import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cartItems } from '../data/placeholder';
import { clearCart } from '../features/cart/cartSlice';

const Cart = () => {
    const dispatch = useDispatch();

    const { amount, total, cartItems } = useSelector((store) => store.cart);
    return (
        <section className='py-20 px-20'>

            <h2 className="text-medium text-3xl lg:text-4xl text-dark text-center py-7">Cart Items</h2>


            <div class="overflow-x-auto relative">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-900 uppercase dark:text-gray-400">
                        <tr>
                            <th scope="col" class="py-3 px-6">
                                Product Image
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Name
                            </th>
                            <th scope="col" class="py-3 px-6">
                                price
                            </th>
                            <th scope="col" class="py-3 px-6">

                            </th>
                            <th scope="col" class="py-3 px-6">
                                Total
                            </th>

                            <th scope="col" class="py-3 px-6">
                                Action
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            cartItems.map((cartItem) => (
                                <tr class="bg-white dark:bg-gray-800">
                                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <img src={cartItem.img} alt="" className="w-20 h-20 rounded-full" />
                                    </th>
                                    <td class="py-4 px-6">
                                        {cartItem.title}
                                    </td>
                                    <td class="py-4 px-6">
                                        ${cartItem.price}
                                    </td>
                                    <td class="py-4 px-6">
                                        <div className="flex items-center">
                                            <button className="py-2 px-3 border text-xl  text-dark">
                                                -
                                            </button>
                                            <span className="border py-2 px-3 text-xl text-dark">1</span>

                                            <button className="py-2 px-3 border text-xl text-dark ">
                                                +
                                            </button>
                                        </div>
                                    </td>
                                    <td class="py-4 px-6">

                                    </td>
                                    <td class="py-4 px-6">
                                        <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Delete</button>
                                    </td>
                                </tr>
                            ))
                        }


                    </tbody>
                </table>
            </div>
            <hr />
            <div className="text-center py-8">
                <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    onClick={() => {
                        dispatch(clearCart());
                    }}
                >Clear All</button>
            </div>

        </section>
    )
}

export default Cart
