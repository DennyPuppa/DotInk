import GeneralBtn from "../generalBtn/GeneralBtn";
import './tattoostyle.css'

const TattooStyle = () => {


    return (
        <div className="container d-md-none">
            <div className="row justify-content-center">
                <div className="col">
                    <div className="d-flex overflow-x-scroll gap-2">
                        <GeneralBtn btnText={'Blackwork'}/>
                        <GeneralBtn btnText={'Color'}/>
                        <GeneralBtn btnText={'Traditional'}/>
                        <GeneralBtn btnText={'Lettering'}/>
                        <GeneralBtn btnText={'Old School'}/>
                        <GeneralBtn btnText={'New School'}/>
                        <GeneralBtn btnText={'Realistic'}/>
                        <GeneralBtn btnText={'Minimalist'}/>
                        <GeneralBtn btnText={'Geometric'}/>
                        <GeneralBtn btnText={'Fine Line'}/>
                        <GeneralBtn btnText={'Cartoon'}/>
                        <GeneralBtn btnText={'Japanese'}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TattooStyle;