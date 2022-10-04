import { atom } from "recoil";

const menuStatusAtom2 = atom({
  key: "menuStatusAtom2", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

export default menuStatusAtom2;
