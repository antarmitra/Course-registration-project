import PropTypes from 'prop-types';

const cart = ({cart, idx}) => {
    const {title} = cart
    return (
        <div>
            <p className='text-lg'>{idx + 1}. {title}</p>
        </div>
    );
};

cart.propTypes = {
    cart: PropTypes.object.isRequired,
    idx: PropTypes.number.isRequired
};

export default cart;