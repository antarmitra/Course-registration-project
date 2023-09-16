/* eslint-disable react/prop-types */

import Cart from '../Cart/Cart'

const Carts = ({ addCart, totalCount, totalCredit, remaining }) => {
    console.log(addCart);



    return (
        <div className='ml-5 mt-8 py-5 bg-base-100 shadow-xl p-4'>
            <div>
                <h3 className='text-2xl font-bold text-[#2F80ED] pb-2 border-b-2 border-gray-400'>Credit Hour Remaining:{remaining} hr</h3>
                <div className='border-b-2 border-gray-400'>
                    <h3 className='text-2xl font-bold py-5'>Course Name</h3>
                    {addCart.map((card, idx) => (
                        <Cart key={card.key} cart={card} idx={idx}></Cart>
                    ))}

                </div>
                <h5 className='text-xl font-semibold border-b-2 py-5 border-gray-400'>Total Credit Hour:{totalCredit} </h5>
                <h5 className='text-xl font-semibold border-b-2 py-5 border-gray-400'>Total Price: {totalCount} USD </h5>
            </div>
        </div>
    );
};

Carts.propTypes = {
   
};

export default Carts;