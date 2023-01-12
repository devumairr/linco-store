import './Loader.css'
// import  Logo from '../../Layouts/Logo'

function Loader(): ReactNode {
    return (
        <div className="loader-container">
            <div className="animatedLogo">
                {/* <img
                    src="/static/innovatap@2x.png"
                    width={400}
                    alt="InnovaTap"
                /> */}
                {/* <Logo
                    sx={{
                        height: 200,
                        width: 200,
                    }}
                /> */}
            </div>
        </div>
    )
}

export default Loader
