// import ListGroup from "./components/ListGroup";
import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  let ItemsMexico = ["Chihuhua", "Monterrey", "Torreon", "DF"];
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {/* <ListGroup items={ItemsMexico} heading="Cities" /> */}

      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          <h1>Hola mundo</h1>
        </Alert>
      )}
      <Button children="Botoncito" onClick={() => setAlertVisibility(true)} color="primary" />
    </div>
  );
}

export default App;
