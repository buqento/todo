import React, { useEffect, useState } from "react";
import List from "./components/list";
import { initTodo, addTodo } from './store/todos/todos';
import { useDispatch, useSelector } from 'react-redux'
import Modal from "./components/modal";

const Page = () => {
  const [showModal, setShowModal] = useState(false)
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  console.log(todos);

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    await fetch('https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list')
      .then(response => response.json())
      .then(result => dispatch(initTodo(result)))
  }

  const handleAddNew = (item) => {
    dispatch(addTodo(item))
  };

  return (
    <div>
      <div>
        <div className="button-add-new" onClick={() => setShowModal(true)}>Add New</div>
        <List status={0} data={todos} sort="asc" />
        <List status={1} data={todos} sort="desc" />
      </div>
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        addNew
        handleAddNew={handleAddNew}
      />
    </div>
  );
}

export default Page;
