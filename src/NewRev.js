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
        <div className='orders'>
            <h1>Your Reviews</h1>

            <div className='orders__review'>
                {reviews?.map(order => (
                    <NewReview order={order} hide />
                ))}
                
            </div>
        </div>
    )
}
export default NewRev
