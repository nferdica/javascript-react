import React from "react";
import PropTypes from 'prop-types';
import { FaEdit, FaWindowClose } from "react-icons/fa";
import './Tasks.css'

export default function Tasks({tarefas, handleEdit, handleDelete}) {
  return (
    <ul className="tarefas">
    {tarefas.map((tarefa, index) => (
      <li key={tarefa}>{tarefa}
        <span>
          <FaEdit onClick={(e) => handleEdit(e, index)} className="edit"/>
          <FaWindowClose onClick={(e) => handleDelete(e, index)} className="delete"/>
        </span>
      </li>
    ))}
  </ul>
  )
}

Tasks.propTypes = {
  tarefas: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.array.isRequired
}
