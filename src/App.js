import {Button} from "./Button";
import { GoBell, GoBug, GoCheck, GoDatabase, GoIssueOpened, GoMarkGithub, GoSearch } from "react-icons/go";


function App() {
  return (
    <div>
        <div>
            <Button primary> <GoBell/> PRIMARY</Button>
        </div>
        <div>
            <Button secondary><GoDatabase/>SECONDARY</Button>
        </div>
        <div>
            <Button success><GoCheck/>SUCCESS</Button>
        </div>
        <div>
            <Button warning><GoIssueOpened/>WARNING</Button>
        </div>
        <div>
            <Button danger><GoBug/>DANGER</Button>
        </div>
        <div>
            <Button rounded><GoMarkGithub/>ROUNDED</Button>
        </div>
        <div>
            <Button outlined><GoSearch/>OUTLINED</Button>
        </div>
    </div>
  );
}

export default App;
