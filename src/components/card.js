import React from "react";

const Card = ({ item }) => {
    return (
        <div className="card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>{item.createdAt}</p>
        </div>
    )
}
export default Card;