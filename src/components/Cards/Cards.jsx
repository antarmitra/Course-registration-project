import PropTypes from 'prop-types';
import Card  from '../Card/Card';
import { useEffect, useState } from 'react';

const Cards = ({handleAddToCarts}) => {
    const [cardData, setCardData] = useState([])

    useEffect(() =>{
        fetch('data.json')
        .then(res => res.json())
        .then (data => setCardData(data))
    },[])

    return (
            <div className='flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    cardData.map(card => <Card key={card.id} card={card} 
                        handleAddToCarts = {handleAddToCarts}></Card>)
                }
            </div>
    );
};

Cards.propTypes = {
    handleAddToCarts: PropTypes.func.isRequired
};

export default Cards;