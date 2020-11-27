import React, { useState, useEffect } from 'react'
import './Orders.css'
import { db } from './firebase'
import { useStateValue } from './StateProvider'
import NewReview from './NewReview'
import './NewReview.css'

function NewRev() {

    const [{ basket, user }, dispatch ] = useStateValue();
    const [reviews, setReview] = useState([])
    
    useEffect(() => {
        if(user) {
            db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .orderBy('created', 'desc')
            .onSnapshot(snapshot => {
                setReview(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })))
            })
        } else {
            setReview([])
        }
    }, [user])

    return (
        <div className='reviews__list'>
            <div className='orders__review'>
                
                {/* {console.log(reviews[0].data.basket[1].image)}
                <NewReview order={reviews[0]} /> */}
                
                {reviews?.map(order => (
                    <NewReview order={order} />
                ))}                
            </div>
        </div>
    )
}
export default NewRev
