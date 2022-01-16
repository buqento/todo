import React from "react";

const Card = ({ item }) => {
    return (
        <div style={{
            border: 'solid 1px #888',
            borderRadius: '4px',
            margin: '16px 0px',
            padding: '16px'
        }}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>{item.createdAt}</p>
        </div>
    )
}
export default Card;