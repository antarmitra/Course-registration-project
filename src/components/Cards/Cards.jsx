import PropTypes from 'prop-types';
import Card  from '../Card/Card';
import { useEffect, useState } from 'react';


const Cards = () => {

    const [cardData, setCardData] = useState([])

    useEffect(() =>{
        fetch('data.json')
        .then(res => res.json())
        .then (data => setCardData(data))
    },[])

    return (
        
            <div className='flex-1 grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3  gap-4'>
                {
                    cardData.map(card => <Card key={card.id} card={card}></Card>)
                }

            </div>
      
    );
};

Cards.propTypes = {
    
};

export default Cards;