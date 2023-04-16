import CarType from "./filtertype/CarType";
import { memo, useCallback } from "react";

const typeTitle: string[] = ["Campvan", "Intergral", "Vestavba", "Prives"];
const typeText: string[] = ['dsflsjdlkf\ndsfdsfdfsdsd', "dsflsjdlkf0\ndsfdsfdfsdsd", "dsflsjdlkf1\ndsfdsfdfsdsd", "dsflsjdlkf2\ndsfdsfdfsdsd"];

const FilterVehicleType = memo(
    function FilterVehicleType({ stateVehicle, setStateVehicle, setStateButton }: FilterVehicleTypePropType) {
    const clickVehicle = useCallback((id: number) => {
        setStateButton(6);
        setStateVehicle(() => {
            return {
                items:
                    stateVehicle.items.map((item: any, index: number) => {
                        if (index == id) {
                            if (item.state == "active") {
                                return { state: "" };
                            } else {
                                return { state: "active" };
                            }
                        } else {
                            return { state: item.state };
                        }
                    })
            };
        });
    }, [stateVehicle]);

    return (
        <div className="p-10 md:col-span-5 border-slate-200 md:border-2">
            <h3 className="text-2xl text-slate-500">Typ karavanu</h3>
            <div className="grid grid-cols-6 md:grid-cols-12 gap-6 mt-8">
                {stateVehicle.items.map((item: any, index: number) =>
                    <CarType key={index}
                        typeTitle={typeTitle[index]}
                        typeText={typeText[index]}
                        typeActiveClass={item.state}
                        clickVehicle={() => { clickVehicle(index); }}
                    />
                )}
            </div>
        </div>
    );
});

type FilterVehicleTypePropType = {
    stateVehicle: any;
    setStateVehicle: any;
    setStateButton: any;
}

export { FilterVehicleType };