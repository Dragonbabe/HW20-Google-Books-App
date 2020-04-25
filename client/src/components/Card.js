import React from 'react';

function Card(props) {
    return (
                    <div className="col-md-12" key={props.key}>
                        <div className="card" style={{width: "100%"}}>
                            <h1>{props.title}</h1>
                            <div className="img-container">
                                <img alt="beep boop" src={props.image} className="img-fluid" style={{width:"10%"}}/>
                            </div>
                            <div className="content">
                                <p>
                                    {props.authors}
                                </p>
                                <p>
                                    {props.description}
                                </p>
                                <a href={props.link}>See more info!</a><br>
                                </br>
                                <button onClick={event => props.onClick(event, props.book)}>Save!</button> 
                            </div>
                        </div>
                    </div>
            
           
    )
}

export default Card;