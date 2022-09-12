import React, { useRef, useState } from "react";
import classes from "./App.module.css";
import genRandomPassword from "./helpers/gen";

function App() {
  const [generatedPassword, setGeneratedPassword] = useState("");
  const valueRef = useRef<HTMLInputElement>(null);

  const generateRandomPassword = (event: React.FormEvent) => {
    event.preventDefault();
    let chars = valueRef.current?.value;

    if (!chars) chars = "12";

    setGeneratedPassword(genRandomPassword(+chars));
  };

  const copyHandler = () => {
    navigator.clipboard.writeText(generatedPassword);
  };

  return (
    <>
      <main className={classes.container}>
        <h1 className={classes.title}>GENPASSWD</h1>

        <form onSubmit={generateRandomPassword} className={classes.form}>
          <div className={classes.formControl}>
            <label htmlFor="chars" className={classes.label}>
              Characters Amount
            </label>
            <input
              ref={valueRef}
              type="number"
              name="chars"
              id="chars"
              className={classes.input}
              min="6"
              defaultValue={12}
            />
          </div>
          <button className={classes.btn} type="submit">
            Generate Password
          </button>
        </form>

        {generatedPassword.length > 0 && (
          <div className={classes.result}>
            <span>{generatedPassword}</span>
            <button onClick={copyHandler} className={classes.btn} type="button">
              Copy
            </button>
          </div>
        )}
      </main>
    </>
  );
}

export default App;
