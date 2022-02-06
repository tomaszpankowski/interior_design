import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import FurnitureS1 from "../components/furniture-s1";
import FurnitureS2 from "../components/furniture-s2";
import FurnitureS3 from "../components/furniture-s3";

class Furniture extends Component{
    render(){
        return(        
            <Container fluid className="minh-footer-adj p-0">
                <FurnitureS1/>
                <FurnitureS2/>
                <FurnitureS3/>
            </Container>    
        );
    }
}

export default Furniture;