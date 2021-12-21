import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

function RenderCard({item}) {   //Lấy ra có thông tin cần hiển thị

    return(
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
               <CardTitle>{item.name}</CardTitle>
                {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null} 
               <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );
}
// Line 11: câu điều kiện, check giá trị item.designation có hay không
function Home(props) {  //lấy ra 1 mảng chứa toàn bộ thông tin có featured: true trong dish, promotion, leader

    return(
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.dish} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader} />
                </div>
            </div>
        </div>
    );
}

export default Home;