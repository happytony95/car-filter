import { useState, memo } from "react";
import Slider from '@material-ui/core/Slider';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        width: 460,
    },
});

const FilterRange = memo(
    function FilterRange({ stateInputValue, setStateInputValue, setStateButton }: FilterRangePropsType) {
        const classes = useStyles();
        const [stateRange, setStateRange] = useState([0, 9999]);

        const onChangePriceFrom = (e: any) => {
            setStateButton(6);
            setStateInputValue((previousState: StateInputValueType) => {
                return { ...previousState, priceFrom: e.target.value };
            });
            setStateRange((previousState: number[]) => {
                return [Number(e.target.value), previousState[1]];
            })
        }

        const onChangePriceTo = (e: any) => {
            setStateButton(6);
            setStateInputValue((previousState: StateInputValueType) => {
                return { ...previousState, priceTo: e.target.value };
            })
            setStateRange((previousState: number[]) => {
                return [previousState[0], Number(e.target.value)];
            })
        }

        const handleChange = (newValue: any) => {
            setStateRange(newValue as number[]);
            setStateInputValue(() => {
                return { priceFrom: newValue[0], priceTo: newValue[1] }
            })
        };

        return (
            <div className="p-10 md:col-span-4 border-slate-200  border-y-2 content-between">
                <h3 className="text-2xl text-slate-500 text-clip">Cena za den</h3>
                <div className="mt-8">
                    <form>
                        <div className="flex justify-center">
                            <div className={classes.root}>
                                <Slider
                                    value={stateRange}
                                    onChange={(event: React.ChangeEvent<{}>, value: any) => handleChange(value)}
                                    max={9999}
                                    valueLabelDisplay="off"
                                    aria-labelledby="range-slider"
                                    style={{ color: 'black', height: '6px' }}
                                    track="normal"
                                />
                            </div>
                        </div>
                        <div className="flex justify-between mt-4">
                            <TextField
                                id="outlined-number"
                                label="Number"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="outlined"
                                onChange={onChangePriceFrom}
                                value={stateInputValue.priceFrom}
                            />
                            <TextField
                                id="outlined-number"
                                label="Number"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="outlined"
                                onChange={onChangePriceTo}
                                value={stateInputValue.priceTo}
                            />
                        </div>
                    </form>
                </div>
            </div>
        );
    });

type StateInputValueType = {
    priceFrom: number,
    priceTo: number
}

type FilterRangePropsType = {
    stateInputValue: StateInputValueType;
    setStateInputValue: any;
    setStateButton: any;
}

export { FilterRange };