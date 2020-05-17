import { useCallback, useReducer } from 'react';

const fromReducer = (state, action) => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid },
        },
        isValid: formIsValid,
      };
    default:
      return state;
  }
};

export const useForm = (initialInputs, initialFormValidity) => {
  const [formState, dispatch] = useReducer(fromReducer, {
    inputs: initialInputs,
    isValid: initialFormValidity,
  });

  // NOTE: if we don't use 'useCallback', we risk having an infinite loop because of the 'useEffect' in Input.js:
  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: 'INPUT_CHANGE',
      value: value,
      isValid: isValid,
      inputId: id,
    });
    // dispatch can be a dependancy but react automatically ensures it is not changed so we can just leave it out:
  }, []);
    
    return [formState, inputHandler];
};
