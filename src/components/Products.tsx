import { carData } from "../data/data";
import imageCar from "../assets/img/car.jpg";
import imagePassenger from "../assets/img/1.svg";
import imageSleep from "../assets/img/2.svg";
import imageToilet from "../assets/img/3.svg";
import imageShower from "../assets/img/4.svg";
import imageMark from "../assets/img/mark.svg";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import SvgIcon from '@material-ui/core/SvgIcon';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const imgToilet: any = <img src={imageToilet} />;
const imgShower: any = <img src={imageShower} />;
const imgMark: any = <img src={imageMark} />;

const Products = ({ temp, priceFrom, priceTo, selectValue, countShow }: ProductType) => {
    let isCheckBookableTrue: boolean = selectValue !== '0';
    let filteredItems: any = [];

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

    //split filtered items with countShow
    if (countShow <= filteredItems.length) {
        filteredItems = filteredItems.slice(0, countShow);
    }

    //render items
    return (
        <div className="grid md:grid-cols-12 gap-0">
            {filteredItems.map((element: any, index: number) => {
                return (
                    <div className="col-span-4 m-10 md:p-10 md:m-0" key={index}>
                        <CardActionArea>
                            <div className="border-slate-200 border-2 rounded-md hover:border-emerald-400">
                                <CardMedia 
                                    component="img"
                                    alt="Car Image"
                                    image={imageCar}
                                />
                                <CardContent>
                                    <div className="pb-3">
                                        <Typography className="text-red-600 text-md">
                                            {element.vehicleType}
                                        </Typography>
                                        <Typography variant="h5" className="text-2xl pt-2">
                                            {element.name}
                                        </Typography>
                                    </div>
                                    <div className="border-2 border-x-0 py-3">
                                        <div className="text-1xl text-slate-500">
                                            Prachov
                                        </div>
                                        <Typography className="flex mt-2 pt-2"> 
                                            <img src={imagePassenger} />&nbsp;{element.passengersCapacity}&nbsp;
                                            <img src={imageSleep} />&nbsp;{element.sleepCapacity}&nbsp;
                                            {element.toilet ? imgToilet : ''}&nbsp;
                                            {element.shower ? imgShower : ''}
                                        </Typography>
                                    </div>
                                    <div className="flex justify-between pt-4">
                                        <Typography>Cena od</Typography>
                                        <Typography className="flex">
                                            {element.price}Kc/den&nbsp;
                                            {element.instantBookable ? imgMark : ''}
                                        </Typography>
                                    </div>
                                </CardContent>
                            </div>
                        </CardActionArea>
                    </div>
                );
            })}
        </div>
    );
}

type ProductType = {
    temp: any;
    priceFrom: number;
    priceTo: number;
    selectValue: string;
    countShow: number; 
}
export { Products };