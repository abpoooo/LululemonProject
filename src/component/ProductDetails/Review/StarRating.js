import {useState} from "react";
import {Rating} from 'react-simple-star-rating'


export default function StarRating () {
    const [rating, setRating] = useState(0)

    const handleRating = (rate) => {
        return setRating(rate)
    }



    return (
        // <React.Fragment>
            <Rating onClick={handleRating}
                    ratingValue={rating}
                    size={30}
                    fillColor='black'
            />
        // </React.Fragment>
    )
}