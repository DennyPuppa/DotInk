import { Container } from "react-bootstrap";
import CategoryBtn from "../categoryButton/CategoryBtn";
import './tattoostyle.css'

const TattooStyle = () => {


    return (
        <Container>
            <div className="row justify-content-center">
                <div className="col">
                    <div className="d-flex gap-2">
                        <CategoryBtn categoryName={'Blackwork'}/>
                        <CategoryBtn categoryName={'Color'}/>
                        <CategoryBtn categoryName={'Traditional'}/>
                        <CategoryBtn categoryName={'Lettering'}/>
                        {/* <CategoryBtn categoryName={'Old School'}/>
                        <CategoryBtn categoryName={'New School'}/>
                        <CategoryBtn categoryName={'Realistic'}/>
                        <CategoryBtn categoryName={'Minimalist'}/>
                        <CategoryBtn categoryName={'Geometric'}/>
                        <CategoryBtn categoryName={'Fine Line'}/>
                        <CategoryBtn categoryName={'Cartoon'}/>
                        <CategoryBtn categoryName={'Japanese'}/> */}
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default TattooStyle;