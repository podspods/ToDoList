import { useStore } from "@nanostores/react";
import { setEmail, setPassword,  subScriptionStore } from "../store/Subscription.store";
/**
 * this component display screen subscrib (screen 1)
 * allow to get username (as an email) and password.
 * Data (username / password) are stored in a nanostore located in  "../store/Subscription.store";
 */

export default function Subscription() {
  const { email, password,emailChecked,passwordChecked } = useStore(subScriptionStore);
  return (
    <>
      <h1>Inscription</h1>
      <input
        type="email"
        value={email}
        onChange={setEmail}
        name="email"
      /> <p>[{ emailChecked ? "true" : "false"}]</p>
      <input
        type="password"
        value={password}
        onChange={setPassword}
        name="password"
      />
      <p>[{ passwordChecked ? "true" : "false"}]</p>
      <button>S'inscrire</button>
      <p>Vous avez un compte? Connectez vous</p>
    </>
  );
}
