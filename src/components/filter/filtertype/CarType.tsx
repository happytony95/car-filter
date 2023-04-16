import { memo } from "react";

const CarType = ({ typeTitle, typeText, typeActiveClass, clickVehicle }: CarType) => {
    return (
        <div className="col-span-3">
            <div className={`hover:border-emerald-400 vehicle-type ${typeActiveClass}`} onClick={clickVehicle}>
                <div className="text-xl text-black-500 p-2 overflow-y-auto">{typeTitle}</div>
                <p className="p-2 text-slate-300 overflow-y-auto">{typeText}</p>
            </div>
        </div>
    );
}

type CarType = {
    typeTitle: string; 
    typeText: string; 
    typeActiveClass: string;
    clickVehicle: any;
}
export default memo(CarType); 