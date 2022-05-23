// npm i react-select
import Select from "react-select";
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

const SelectDropdown = () => {
  const options = [
    { value: "dog", label: "Dog" },
    { value: "cat", label: "Cat" },
    { value: "hamster", label: "Hamster" }
  ]

  return (
    <div className="select-container"> You may select more than 1 options!
      <Select className="selector" options={options} components={animatedComponents} isMulti/>

      <input type="checkbox" name="like"/>
      
      <br/>
    </div>
  )

}

export default SelectDropdown;