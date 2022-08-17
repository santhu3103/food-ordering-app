
import Button from "./elements/Buttons";

export const Banner = ()=>{
    return(
        <div className="banner w-full md:2/3 px-7 mx-auto relative flex items-center-justifi-between">
            <div className="banner-deesceiption w-full md:w-1/2 p-3">
                <h2 className="md-6 text-4xl font-bold text-white">
                    Food orderning Mady Easy

                </h2>
                <p className="font-semibold text-lg text-red-600 py-2">
                    Get started Today!
                </p>
                <div className="btn-container">
                <Button>Order Now</Button>
                
                <a href="/menu" className="text-yellow-400 hover:text-yellow-500 font-bold text-decoration-line px-3">
                    See Menu
                </a>
                </div>
            </div>
            <div className="banner-image w-ful md:w-1/3 p-3">
                <img src={require("../assets/images/pizza_banner.png")} alt="banner"className="max-h-95" />
            </div>
        </div>
    );
}