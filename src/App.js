import {Button} from "./Button";


function App() {
  return (
    <div>
        <div>
            <Button primary>PRIMARY</Button>
        </div>
        <div>
            <Button secondary>SECONDARY</Button>
        </div>
        <div>
            <Button success>SUCCESS</Button>
        </div>
        <div>
            <Button warning>WARNING</Button>
        </div>
        <div>
            <Button danger>DANGER</Button>
        </div>
        <div>
            <Button rounded>ROUNDED</Button>
        </div>
        <div>
            <Button outlined>OUTLINED</Button>
        </div>
    </div>
  );
}

export default App;
