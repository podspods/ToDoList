/**store for screen1 : subscrib
 *
 *
 *
 */
import { action, map } from "nanostores";
import { ChangeEvent } from "react";

export type SubScribeStore = {
  email: string;
  password: string;
  emailChecked: boolean | null;
  passwordChecked: boolean | null;
  validationOk: boolean | null;
};

export const subScriptionStore = map<SubScribeStore>({
  email: "",
  password: "",
  emailChecked: false,
  passwordChecked: false,
  validationOk: false,
});

export const setEmail = action(
  subScriptionStore,
  "setEmail",
  (store, e: ChangeEvent<HTMLInputElement>) => {
    store.setKey("email", e.currentTarget.value);
    setEmailChecked();
  }
);

export const setPassword = action(
  subScriptionStore,
  "setPpassword",
  (store, e: ChangeEvent<HTMLInputElement>) => {
    store.setKey("password", e.currentTarget.value);
    setPasswordChecked();
  }
);

export const setEmailChecked = action(
  subScriptionStore,
  "setEmailChecked",
  (store) => {
    const { email } = store.get();
    console.log(email)
    let result: boolean | null = null;
    if (email !== "") {
      if (/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email)) {
        result = true;
      } else {
        result = false;
      }
    }
    console.log(result)
    store.setKey("emailChecked", result);
  }
);

function passwordValidate(pass:string){

  return (pass.length>5)  ;
}

export const setPasswordChecked = action(
  subScriptionStore,
  "setPasswordChecked",
  (store) => {
    const { password } = store.get();
    let result: boolean | null = null;


    result = passwordValidate(password)
    
    store.setKey("passwordChecked", result);
    console.log(`${result} ${password}`)
  }
);

export const setValidationOk = action(
  subScriptionStore,
  "setValidationOk",
  (store, value: boolean) => {
    store.setKey("validationOk", value);
  }
);
