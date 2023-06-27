import { useState } from 'react';
import Button from '@mui/material/Button';
import { Card } from '@mui/material';


interface TourProps {
    id: number;
    image: string;
    info: string;
    name: string;
    price: number;
    removeTours: (id: number) => void;

}

function Tour(props: TourProps) {
    let title = "";
if (typeof document !== "undefined") {
  title = document.title;
}
console.log(title); // '' if in a Node.js environment
    const { id, info, image, name, price, removeTours } = props
    const [readMore, setReadMore] = useState(false);

    return (
        <>
            <Card className='single-tour'>
                <div>
                    <img src={image} alt={name} />
                    <div>
                        <h4 className="tour-info">{name}</h4>
                        <h4 className='tour-price'>$ {price}</h4>

                    </div>
                    <p>
                        {readMore ? info : `${info?.substring(0, 200)}...`}
                    </p>
                    <Button onClick={() => setReadMore(!readMore)}>
                        {readMore ? 'Show less' : 'Read More'}
                    </Button>

                    <Button className="delete-btn" onClick={() => removeTours(id)}>Not Interested</Button>
                </div>
            </Card>
        </>
    )
}

export default Tour;