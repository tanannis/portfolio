
// import '../styles/Home.scss';

import SelectDropdown from "../components/SelectDropdown";
import ToggleSwitch from "../components/ToggleSwitch";

const Home = () => {
  return (
    <div className="home">
     <div className="home-header"> ANNIS TAN - not how good you are, but how good you want to be !</div>

     <br/>
     <ToggleSwitch/>

     <br/>
     <SelectDropdown/>

    </div>
  );
}

export default Home;
