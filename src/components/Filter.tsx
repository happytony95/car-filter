import { useState } from "react";
import { FilterRange } from "./filter/FilterRange";
import { FilterVehicleType } from "./filter/FilterVehicleType";
import { FilterSelect } from "./filter/FilterSelect";
import { Products } from "./Products";
import { ButtonItem } from "./ButtonItem";

const typeContext: string[] = ["Campervan", "Intergrated", "Alcove", "BuiltIn"];

const Filter = () => {
    const [stateButton, setStateButton] = useState(6);
    const [stateInputValue, setStateInputValue] = useState({
        priceFrom: 0,
        priceTo: 9999
    });
    const [stateVehicle, setStateVehicle] = useState({
        items: [
            {
                state: "active"
            },
            {
                state: "active"
            },
            {
                state: "active"
            },
            {
                state: "active"
            },
        ]
    });
    const [stateSelect, setStateSelect] = useState('0');

    let temp: string[] = [];
    stateVehicle.items.map((item: any, index: number) => {
        if (item.state == "active") {
            temp.push(typeContext[index]);
        }
    });

    return (
        <>
            <div className="grid md:grid-cols-12 gap-0">
                <FilterRange 
                    stateInputValue={stateInputValue} 
                    setStateInputValue={setStateInputValue} 
                    setStateButton={setStateButton}
                 />
                <FilterVehicleType 
                    stateVehicle={stateVehicle} 
                    setStateVehicle={setStateVehicle} 
                    setStateButton={setStateButton} 
                />
                <FilterSelect 
                    stateSelect={stateSelect} 
                    setStateSelect={setStateSelect} 
                    setStateButton={setStateButton} 
                />
            </div>
            <Products 
                temp={temp} 
                priceFrom={stateInputValue.priceFrom} 
                priceTo={stateInputValue.priceTo} 
                selectValue={stateSelect} 
                countShow={stateButton} 
            />
            <ButtonItem 
                stateButton={stateButton} 
                setStateButton={setStateButton} 
                temp={temp} 
                priceFrom={stateInputValue.priceFrom} 
                priceTo={stateInputValue.priceTo} 
                selectValue={stateSelect}
            />
        </>
    );
}

export default Filter;