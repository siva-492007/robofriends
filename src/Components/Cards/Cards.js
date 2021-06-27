const Cards = (props) => {
    return (
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc">
            <img src={`https://robohash.org/${props.id}?220*200`} alt="robots"/>
            <h2>{props.name}</h2>
            <h4>{props.username}</h4>
            <p>{props.email}</p>
        </div>
    )
}

export default Cards;