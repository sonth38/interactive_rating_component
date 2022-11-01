function Rated({ rate }) {
    
    return(
        <div className="row align-items-center">
            <div className="col">
                <div className="card rated" style={{width: "24rem"}}>
                    <div className="thanks-icon">
                        <img src="illustration-thank-you.svg"  alt=""/>
                    </div>
                    <div className="card-body card-rated">
                        <div className="rate-selected">
                            <p>You selected {rate} out of 5</p>
                        </div>
                        <h1>Thank you!</h1>
                        <p>
                            We appreciate you taking the time to give a rating.
                            If you ever need more support, don’t hesitate to get in touch!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rated