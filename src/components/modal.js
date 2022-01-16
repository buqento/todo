import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'

const Modal = (props) => {
    const todos = useSelector(state => state.todos);

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const currentDateTime = () => {
        const today = new Date();
        const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        const dateTime = date + ' ' + time;
        return dateTime;
    }

    const wrapperRef = useRef(null);
    const useOutsideAlerter = (ref) => {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    props.onHide()
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    useOutsideAlerter(wrapperRef);

    if (!props.show) { return null }
    return (
        <div className='modal-container'>
            <div ref={wrapperRef} className='modal-body'>
                {
                    props.addNew ?
                        <div>
                            <div className='flex-between'>
                                <h4>Add New</h4>
                                <span onClick={props.onHide}><u>Close</u></span>
                            </div>
                            <form>
                                <div className='modal-form'>

                                    <div>
                                        <div>
                                            <input
                                                placeholder='title'
                                                type="text"
                                                onChange={e => setTitle(e.target.value)}
                                                value={title}
                                            />
                                        </div>
                                        <div>
                                            <input
                                                placeholder='description'
                                                type="text"
                                                onChange={e => setDescription(e.target.value)}
                                                value={description}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className='button-done' onClick={() =>
                                            props.handleAddNew(
                                                {
                                                    id: todos.length + 1,
                                                    title: title,
                                                    description: description,
                                                    createdAt: currentDateTime(),
                                                    status: 0
                                                }
                                            )
                                        }>Save</div>
                                    </div>
                                </div>

                            </form>

                        </div>
                        :
                        <div>

                            <div className='flex-between'>
                                <h4>{props.child.title}</h4>
                                <span onClick={props.onHide}><u>Close</u></span>
                            </div>
                            <div>
                                <div className='flex-between'>
                                    <div>
                                        <p>{props.child.description}</p>
                                        <p>{props.child.createdAt}</p>
                                    </div>
                                    <div>
                                        {
                                            props.child.status !== 1 &&
                                            <div className='button-delete'>Delete</div>
                                        }
                                        <div className='button-done'>
                                            {props.child.status === 1 ? 'Pending' : 'Done'}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                }
            </div>
        </div >
    )
}
export default Modal