import Key from "../Key/Key";
import { useDispatch, useSelector } from "react-redux";
import { loadPhoneActionCreator } from "../../redux/feture/phoneSlice";

const Keyboard = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const dispatch = useDispatch();
  const { number: phoneNumber } = useSelector((state) => state.phone);
  const addDigit = (number) => {
    if (phoneNumber.length === 9) {
      return;
    }
    dispatch(loadPhoneActionCreator(number));
  };

  return (
    <ol className="keyboard">
      {numbers.map((number) => (
        <Key
          key={number}
          text={number}
          /* disabled={calling}*/
          actionOnClick={() => addDigit(number)}
        />
      ))}
      <Key
        text="delete"
        big={true}
        /*actionOnClick={removeLastDigit}*/
        /*  disabled={calling}*/
      />
    </ol>
  );
};

export default Keyboard;
