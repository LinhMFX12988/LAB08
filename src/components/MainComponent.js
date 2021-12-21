import React, { Component } from "react";
import Home from "./HomeComponent";
import About from "./AboutComponent";
import Menu from "./MenuComponent";
import Contact from "./ContactComponent";
import DishDetail from './DishdetailComponent';
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

class Main extends Component {

  // constructor(props) {
  //   super(props);
  // }

  render() {

    // Mục đích : Hiện thi nội dung Home page screen 
    // Truyền dữ liệu cho hàm Home 
    const HomePage = () => {
      return(
        <Home 
          dish={this.props.dishes.filter((dish) => dish.featured)[0]} //filter: tạo mảng mới chứa các phần tử có featured = true
          promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    }

    const DishWithId = ({match}) => {
      return(
        <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
          comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
        />
      );
    }
    // Trả về giá trị HTML hoặc sẽ gọi đến 1 component khác 
    // Route sử dụng để định nghĩa path trong 
    // Redirect đặt mặc định trang hiển thị
    // exact path: dùng cho component cha
    // path: dùng cho component con
    return(
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/aboutus" component={() => <About leaders={this.props.leaders} />} />
          <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
          <Route path="/menu/:dishId" component={DishWithId} />
          <Route path="/contactus" component={Contact} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));
