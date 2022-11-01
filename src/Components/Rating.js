

function Rating({ rate, setRate, submit, setSubmit }) {
    const numbers = [1, 2, 3, 4, 5]

    const handleSubmit = () => {
        setSubmit(true)
    }

    return (
        <div className="row align-items-center">
            <div className="col">
                <div className="card" style={{width: "24rem"}}>
                    <div className="star-icon"> 
                        <img className="" src="icon-star.svg" alt="icon start" width="20px"/>
                    </div>
                    <div className="card-body rate-body">
                        <h1>How did we go?</h1>
                        <p>
                            Please let us know how we did with your support request.
                            All feedback is appreciated to help us improve our offering!
                        </p>
                        <div className="rate-box">
                        {numbers.map((numb, index) =><button className="rate-number" onClick={()=>setRate(numb)} key={index}>{numb}</button>)}

                        </div>
                        <br/>
                        <button className="btn-submit" onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rating