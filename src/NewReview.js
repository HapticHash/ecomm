import React from 'react'
import './NewReview.css'
import items from './prod.json';
import { useStateValue } from './StateProvider';
import { Link, useHistory } from "react-router-dom"

const NewReview = () => {
    return (
        <div className="review">

            <div className="review__container">
                <h1>Review</h1>
                <form>
                    <input type="text" placeholder="Write a title" />
                    <textarea name="Text1" rows="5" placeholder="Write a detail description"></textarea>
                    <button className="login__signInButton">Submit Review</button>
                </form>
            </div>
        </div>

    );
}


export default NewReview