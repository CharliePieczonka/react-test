import { useState } from 'react'

function Review() {
    const [submitted, submit] = useState(false)

    return (
        <>
            <h4>Consider leaving a review to help the page out</h4>
            { submitted == false && 
                <> 
                    <textarea></textarea>
                    <br />
                    <button onClick={() => submit(true)}>Submit</button>
                </> 
            }
            { submitted == true && <p>Thank you for your review!</p>

            }
        </>
    );
}

export default Review;