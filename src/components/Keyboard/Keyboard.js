import { useContext } from "react";
import { useSelector } from "react-redux";
import PhoneContext from "../../contexts/PhoneContext";
import Key from "../Key/Key";

const Keyboard = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const phoneInitialState = useSelector((state) => state.payload);

  return (
    <ol className="keyboard">
      {numbers.map((number) => (
        <Key
          key={number}
          text={number}
          disabled={calling}
          actionOnClick={() => phoneInitialState(number)}
        />
      ))}
      <Key
        text="delete"
        big={true}
        actionOnClick={removeLastDigit}
        disabled={calling}
      />
    </ol>
  );
};

export default Keyboard;
