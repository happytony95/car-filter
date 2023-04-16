import imgLogo from '../assets/img/logo.png'


const Header = () => {
    return (
        <div className="justify-center py-6 flex md:p-10 md:justify-start">
            <img src={imgLogo} />
        </div>
    );
}

export default Header;