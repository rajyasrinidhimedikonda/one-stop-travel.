import React from 'react'
import { useState, useEffect } from 'react'
import Kitreview from './Kitreview'

const Kitreviews = ({id}) => {
    const db = {
        '1': [
            ["This is the headline of review 1 for kitid 1", 'This is the body of review 1 for kit 1'],
            ["This is the headline of review 2 for kitid 1", 'This is the body of review 2 for kit 1'],
            ["This is the headline of review 3 for kitid 1", 'This is the body of review 3 for kit 1'],
        ],

        '2': [
            ["This is the headline of review 1 for kitid 2", 'This is the body of review 1 for kit 2'],
            ["This is the headline of review 2 for kitid 2", 'This is the body of review 2 for kit 2'],
            ["This is the headline of review 3 for kitid 2", 'This is the body of review 3 for kit 2'],
        ],
        '3': [
            ["This is the headline of review 1 for kitid 3", 'This is the body of review 1 for kit 3'],
            ["This is the headline of review 2 for kitid 3", 'This is the body of review 2 for kit 3'],
            ["This is the headline of review 3 for kitid 3", 'This is the body of review 3 for kit 3'],
        ],
        '4': [
            ["This is the headline of review 1 for kitid 4", 'This is the body of review 1 for kit 4'],
            ["This is the headline of review 2 for kitid 4", 'This is the body of review 2 for kit 4'],
            ["This is the headline of review 3 for kitid 4", 'This is the body of review 3 for kit 4'],
        ],
        '5': [
            ["This is the headline of review 1 for kitid 5", 'This is the body of review 1 for kit 5'],
            ["This is the headline of review 2 for kitid 5", 'This is the body of review 2 for kit 5'],
            ["This is the headline of review 3 for kitid 5", 'This is the body of review 3 for kit 5'],
        ],
        '6': [
            ["This is the headline of review 1 for kitid 6", 'This is the body of review 1 for kit 6'],
            ["This is the headline of review 2 for kitid 6", 'This is the body of review 2 for kit 6'],
            ["This is the headline of review 3 for kitid 6", 'This is the body of review 3 for kit 6'],
        ],
    }
    
    const [reviews, setReviews] = useState([])

    function getReviews(kitid){
        
        setReviews(db[1])
    }

    useEffect(()=>{
        getReviews({id})
    }, [])

    return (
        <div className='flex flex-col mt-10 p-4 overflow-y-scroll w-screen space-y-5 self-center items-center bg-neutral-100 rounded-sm'>
            {
            reviews.map( (review)=>(
                <>
                
                <Kitreview title={review[0]} body={review[1]} />
                <Kitreview title={review[0]} body={review[1]} />
                </>

            ))
            }

            </div>
    )
}

export default Kitreviews