import React from 'react'
import './NewReview.css'
import CheckoutProduct from './CheckoutProduct'
import { useHistory } from 'react-router-dom'
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

function NewReview({ order }) {

    const [values, setValue] = React.useState(5);
    const history = useHistory()
    
    function handleClick(e) {
        e.preventDefault();
        if(e) {
            // window.alert('We are Sorry, Your review cannot be uploaded because you recently placed the order.')
        }
        window.alert('Review is successfully submitted - Thank you! \nWe are processing your review. This may take several days, so we appreciate your patience.')
    }
    
    return (
        
        <div className="review">

            <div className="review__container">
                <h2>Create Review</h2>

                {/* {console.log(order.data)} */}


                <form>
                    
                    <div className="reviewItem">
                        <img src={order.data.basket[1].image} />
                        <div className="reviewItem__desc"> 
                            {order.data.basket[1].title}
                        </div>
                    </div>
                    <label for="reviewTitle">Add a headline</label>
                    <input type="text" id="reviewTitle" placeholder="What's most important to know?" required/>
                    <label for="reviewDesc">Add a written review</label>
                    <textarea name="Text1" id="reviewDesc" rows="5" placeholder="What did you like or dislike? What did you use this product for?" required></textarea>
                    <label>Overall rating</label>
                    <Box className="reviewRating" component="fieldset" borderColor="transparent">
                        <Rating
                            name="simple-controlled"
                            value={values}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        />
                    </Box>
                    <button className="login__signInButton" onClick={handleClick}>Submit Review</button>
                </form>
            </div>
        </div>
    )
}

export default NewReview