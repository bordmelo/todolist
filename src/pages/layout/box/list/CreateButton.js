import React from 'react';
import { Link } from 'react-router-dom';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CreateButton = () => {

  return (
    <div className="field">
      <Link to='/create'>
        <button type="submit" className="button is-link is-medium is-fullwidth">
          <span className='icon'>
            <FontAwesomeIcon icon={faPlus} />
          </span>
          <span>Criar Tarefa</span>
        </button>
      </Link>
    </div>
  );

};

export default CreateButton;