import PropTypes from 'prop-types';
import { FiDollarSign, FiBookOpen } from 'react-icons/Fi';
const Card = ({ card, handleAddToCarts }) => {
    const { image, title, description, price, credit } = card;

    return (
        <div>
            <div className='mt-10'>
                <div className='card bg-base-100 shadow-xl h-[450px]'>
                    <figure><img className='w-full px-4 ' src={image} alt="" /></figure>
                    <div className='card-body space-y-2 px-4'>
                        <h2 className='card-title text-xl font-bold'>{title}</h2>
                        <p className='text-slate-400'>{description}</p>
                        <div className='flex space-x-2 text-lg items-center'>
                            <FiDollarSign className='text-xl'></FiDollarSign>
                            <p className='text-slate-400'>Price: {price}</p>

                            <FiBookOpen className='text-xl'></FiBookOpen>
                            <p className='text-slate-400'>Credit: {credit} hr</p>
                        </div>
                        <div className='card-actions'> 
                            <button className='py-2 rounded-lg font-semibold text-white bg-[#2F80ED] w-full'  onClick={() => handleAddToCarts(card)}>Select</button>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    );
};

Card.propTypes = {
    card: PropTypes.object.isRequired,
    handleAddToCarts: PropTypes.func.isRequired

};

export default Card;