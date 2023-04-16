import imageMark from "../../assets/img/mark.svg";
import { memo } from "react";
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';
import InputBase from '@material-ui/core/InputBase';

const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);

const FilterSelect = memo(
    function FilterSelect({ stateSelect, setStateSelect, setStateButton }: FilterSelectPropType) {
    
        const handleChange = (e: any) => {
            setStateButton(6);
            setStateSelect(e.target.value);
        };

        return (
            <div className="p-10 md:col-span-3 border-slate-200 border-y-2">
                <h3 className="text-2xl text-slate-400 flex">Okamzita rezervace&nbsp;&nbsp;<img src={imageMark} /></h3>
                <div className="mt-2">
                    <FormControl fullWidth >
                        <InputLabel htmlFor="demo-customized-select-native"></InputLabel>
                        <NativeSelect
                            id="demo-customized-select-native"
                            value={stateSelect}
                            onChange={handleChange}
                            input={<BootstrapInput />}
                        >
                            <option aria-label="None" />
                            <option value={0}>All</option>
                            <option value={1}>Yes</option>
                            <option value={2}>No</option>
                        </NativeSelect>
                    </FormControl>
                </div>
            </div>
        );
    });

type FilterSelectPropType ={
    stateSelect: string,
    setStateSelect: any, 
    setStateButton: any
}
export { FilterSelect };