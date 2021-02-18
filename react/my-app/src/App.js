import './App.css';
import Comments from "./components/comments/Comments";
import Approval from "./components/comments/approval/Approval";
import faker from "faker";

const App = () =>{
  return(
    <div className="App">
      <div className="ui comments">
        <Approval>
        <Comments name="MASTER" comment="FLOP" time="Today at 5:30pm" image={faker.image.image()}></Comments>
        </Approval>
        <Approval>
        <Comments name="VALIMAI" comment="BLOCK BUSTER" time="Today at 7:30pm" image={faker.image.image()}></Comments>
        </Approval>
        <Approval>
        <Comments name="COBRA" comment="AVERAGE" time="Today at 9:30pm" image={faker.image.image()}></Comments>
        </Approval>
        <Approval>
        <Comments name="DON" comment="HIT" time="Today at 10:30pm" image={faker.image.image()}></Comments>
        </Approval>
      </div>

    </div>
  );
}
export default App;