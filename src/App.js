import {DropDown} from "./components/DropDown";
import {useState} from "react";


function App() {

    //selection state
    const [selection, setSelection]=useState(null);

    //selection updating func
    const handleSelect = (option) => {
        setSelection(option);
    };

    const options = [
        {label: 'Red', value: 'red'},
        {label: 'Blue', value: 'blue'},
        {label: 'Green', value: 'green'}
    ];

    return (
        <div className={'flex'}>
            <DropDown options={options} value={selection} onChange={handleSelect}/>
            <DropDown options={options} value={selection} onChange={handleSelect}/>
        </div>
    );
}

export default App;
