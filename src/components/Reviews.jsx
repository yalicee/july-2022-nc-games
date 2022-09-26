import {useState, useEffect} from 'react'
import { fetchReviews } from '../utils/api'


export default function Reviews() {

    const [reviews, setReviews] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchReviews().then((data) => {
            console.log(data);
            setReviews(data)
            setIsLoading(false)
        })
    }, [])

    return (
        
        <div>{!isLoading ? (<> {reviews.map(({ category, comment_count, created_at, designer, owner, review_body, review_id, review_img_url, title, votes }) => {
            return (
                <li key={review_id}>
                    <p>{title}</p>
                    <p>{owner}</p>
                    <p>{designer}</p>
                    <p>{votes}</p>
                    <p>{review_body}</p>
                </li>
            )
        })}
        </>) : ( <h1>Loading...</h1> ) }</div>
    )
}
