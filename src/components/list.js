import React, { useState } from "react";
import Card from "./card";
import Modal from "./modal";

const List = ({ data, status, sort }) => {
    const dateTime = text => new Date(text)
    const [showDetail, setShowDetail] = useState(false)
    const [selectItem, setSelectItem] = useState({})

    return (
        <div>

            <div className="container">
                <h2>{status === 1 ? 'Done' : 'Pending'}</h2>
                {
                    data
                        .filter(item => item.status === status)
                        .sort((a, b) =>
                            sort === 'asc' ? dateTime(a.createdAt) - dateTime(b.createdAt)
                                : dateTime(b.createdAt) - dateTime(a.createdAt)
                        )
                        .map((item, index) => (
                            <div key={index} onClick={() => {
                                setShowDetail(true);
                                setSelectItem(item);
                            }}>
                                <Card item={item} />
                            </div>
                        ))
                }
            </div>
            <Modal
                show={showDetail}
                onHide={() => setShowDetail(false)}
                child={selectItem} />
        </div>
    )
}
export default List;