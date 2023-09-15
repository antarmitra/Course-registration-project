import Cart from '../Cart/Cart'
import PropTypes from 'prop-types';

const Carts = () => {

    return (
        <div className='ml-5 mt-8 py-5 bg-base-100 shadow-xl p-4'>
            <div>
                <h3 className='text-2xl font-bold text-[#2F80ED] pb-2 border-b-2 border-gray-400'>Credit Hour Remaining: hr</h3>
                <div className='border-b-2 border-gray-400'>
                    <h3 className='text-2xl font-bold py-5'>Course Name</h3>
                    {/* {
                        Carts.map((cart, idx) => <Cart key={idx} cart={cart} idx={idx}></Cart>)
                    } */}
                </div>
                <h5 className='text-xl font-semibold border-b-2 py-5 border-gray-400'>Total Credit Hour: </h5>
                <h5 className='text-xl font-semibold border-b-2 py-5 border-gray-400'>Total Price: USD </h5>
            </div>
        </div>
    );
};

Carts.propTypes = {
    Cart: PropTypes.array.isRequired,
    Carts: PropTypes.array.isRequired,
    totalCreditHour: PropTypes.number.isRequired,
    remain: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired

};

export default Carts;