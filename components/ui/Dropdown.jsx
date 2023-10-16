import React,{useState,useEffect} from "react";
import { nanoid } from "nanoid";

const Dropdown = ({label, name, defaultValue= '', required, options}) => {
    const [selectedValue, setSelectValue] = useState(defaultValue);
    const optionsSelect = [['','Seleccione una opción', true], ...Object.entries(options)];

    useEffect(()=>{
        setSelectValue(defaultValue);
    },[defaultValue]);

  return (
    <label htmlFor={name} className="flex flex-col my-3">
        <span>{label}</span>
        <select
            required={required}
            name={name}
            className="input"
            value={selectedValue}
            onChange={(e)=>setSelectValue(e.target.value)}
        >
            {optionsSelect.map((o) => {
                return (
                    <option key={nanoid()}
                    value={o[1]}
                    disabled={o[2] ?? false}
                    >
                        {o[1]}
                    </option>
                );
            })};
        </select>
    </label>
  );
};

export default Dropdown;