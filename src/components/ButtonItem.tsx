import { carData } from "../data/data";

const ButtonItem = ({ stateButton, setStateButton , temp, priceFrom, priceTo, selectValue}: ButtonItemPropsType) => {
  const onClickButton = () => {
        setStateButton(stateButton + 6);
    }

    let isCheckBookableTrue :boolean = selectValue !== '0';
    let filteredItems = [];

    carData.items.map((element) => {
        let flag: boolean = (!isCheckBookableTrue || (isCheckBookableTrue && (element.instantBookable == (selectValue == '1'))));

        //get filtered items
        if (
            temp.includes(element.vehicleType) &&
            element.price >= priceFrom &&
            element.price <= priceTo &&
            flag
        ) {
            filteredItems.push(element);
        }
    });

    // button disabled
    if (filteredItems.length >= stateButton) {
      return (
          <div className="container-button flex justify-center">
              <button className="bg-emerald-500 p-2 text-white rounded-md my-6 w-28 h-12" onClick={onClickButton}>
                  Read more
              </button>
          </div>
      );
    } 
    return (
          <div className="container-button flex justify-center">
              <button className="bg-emerald-300 p-2 text-white rounded-md my-6 w-28 h-12" disabled>
                  Read more
              </button>
          </div>
    );
}

type ButtonItemPropsType = {
    stateButton: number;
    setStateButton: Function;
    temp: string[];
    priceFrom: number;
    priceTo: number;
    selectValue: string;
}

export { ButtonItem };