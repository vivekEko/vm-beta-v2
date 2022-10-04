import { atom } from "recoil";

const menuStatusAtom = atom({
  key: "menuStatusAtom", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

export default menuStatusAtom;
