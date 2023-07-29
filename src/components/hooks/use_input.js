import { useReducer } from "react";

const defaultInputState = {
  inputValue: "",
  isTouched: false,
};

const inputReducer = (state, action) => {
  if (action.type === "FORM_INPUT") {
    return { inputValue: action.value, isTouched: state.isTouched };
  }
  if (action.type === "TOUCHED") {
    return { inputValue: state.inputValue, isTouched: action.value };
  }
  if (action.type === "RESET") {
    return { inputValue: "", isTouched: false };
  }

  return inputReducer;
};

const useInput = (validate) => {

  const [inputState, setInputState] = useReducer(
    inputReducer,
    defaultInputState
  );

  const inputIsValid = validate(inputState.inputValue);
  const inputIsInvalid = !inputIsValid && inputState.isTouched;

  const inputHandler = (event) => {
    setInputState({
      type: "FORM_INPUT",
      value: event.target.value,
    });
  };

  const isTouchedHandler = () => {
    setInputState({
      type: "TOUCHED",
      value: true,
    });
  };

  const reset = () => {
    setInputState({
      type: "RESET",
    });
  };

  return {
    inputHandler,
    isTouchedHandler,
    reset,
    inputValue: inputState.inputValue,
    inputIsValid,
    inputIsInvalid
  };
};

export default useInput;
