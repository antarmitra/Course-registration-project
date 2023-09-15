import PropTypes from 'prop-types';

const cart = ({cart, idx}) => {
    const {title} = cart
    return (
        <div>
            <h2 className='text-lg'>{idx + 1}. {title}</h2>
        </div>
    );
};

cart.propTypes = {
    cart: PropTypes.object.isRequired,
    idx: PropTypes.number.isRequired
};

export default cart;