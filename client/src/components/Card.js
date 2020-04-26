import React from 'react';

function Card(props) {
    return (
                    <div className="col-md-12">
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
                                <button className="btn btn-outline-warning"onClick={() => props.onClick(props.id ?props.id : props.book)}>{props.message}</button> 
                            </div>
                            <a href={props.link}>View Book Here!</a><br>
                            </br>
                                
                                
                        </div>
                    </div>
            
           
    )
}

export default Card;