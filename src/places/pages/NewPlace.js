import React, { useCallback } from 'react';

import Input from '../../shared/components/FormElements/Input';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from '../../shared/util/validators';
import './NewPlace.css';

const NewPlace = () => {
  // NOTE: if we don't use 'useCallback', we risk having and infinite loop because of the 'useEffect' in Input.js:
  const titleChangeHandler = useCallback((id, value, isValid) => {}, []);
  const descriptionChangeHandler = useCallback((id, value, isValid) => {}, []);

  return (
    <form className='place-form'>
      <Input
        id='title'
        element='input'
        type='text'
        label='Title'
        validators={[VALIDATOR_REQUIRE()]}
        errorText='Please input a valid title.'
        onInput={titleChangeHandler}
      />
      <Input
        id='description'
        element='textarea'
        label='Description'
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText='Please input a valid description (at least 5 characters).'
        onInput={descriptionChangeHandler}
      />
    </form>
  );
};

export default NewPlace;
