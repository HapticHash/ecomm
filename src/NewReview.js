import React from 'react'
import './NewReview.css'
import CheckoutProduct from './CheckoutProduct'
import { useHistory } from 'react-router-dom'
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

function NewReview({ order }) {

    const [value, setValue] = React.useState(0);
    const history = useHistory()

    return (
        <div className="review">

            <div className="review__container">
                <h2>Create Review</h2>
                
                {console.log(order.data.basket)}

                {/* {order.data.basket?.map(item => (
                    <div>
                        <CheckoutProduct
                            id = {item.id}
                            title = {item.title}
                            image = {item.image}
                            price = {item.price}
                            rating = {item.rating}
                            hideButton
                        />
                        
                    </div>
                ))} */}

                <form>
                    <label for="reviewTitle">Add a headline</label>
                    <input type="text" id="reviewTitle" placeholder="What's most important to know?" />
                    <label for="reviewDesc">Add a written review</label>
                    <textarea name="Text1" id="reviewDesc" rows="5" placeholder="What did you like or dislike? What did you use this product for?"></textarea>
                    <label>Overall rating</label>
                    <Box className="reviewRating" component="fieldset" borderColor="transparent">
                        <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        />
                    </Box>
                    <button className="login__signInButton">Submit Review</button>
                </form>
            </div>
        </div>
    )
}

export default NewReview