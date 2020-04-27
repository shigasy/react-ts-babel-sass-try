import React from "react";
import * as styles from "./style.scss";

const App: React.FC = () => {
  return (
    <div>
      <h1>React Test</h1>
      <p className={styles.text}>
        test
        <a className={styles.text__link}>link</a>
      </p>
    </div>
  );
};

export default App;
