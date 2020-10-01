import React from "react";
import Main from "./Main";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Admin from "../src/pages/Admin/adminPage";
class App extends React.Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Main} />
        <Route exact path="/login" component={Admin} />
      </Router>
    );
  }
}

export default App;

// import React from 'react';
// import Header from './components/Header/Header';
// import Container from './components/Container/Container';
// import Footer from './components/Footer/Footer';
// import AsideControl from './components/Footer/Aside_Control';

// import { connect } from 'react-redux';
// import { setCurrentUser } from './React_redux/User/user.action';
// class App extends React.Component{

//   render(){
//  return(
//         <body className="hold-transition sidebar-mini layout-fixed">
//           <Header />
//             <div className="wrapper">
//             <Container />
//             <Footer />
//             <AsideControl />
//             </div>
//         </body>
//     );
//   }
// }
// const MapStateToProps=state=>({
//   currentUser: state.user.currentUser
// })
// const mapDispatchtoState = (dispatch) =>{
//   return {
//     changeName: (name)=>{
//       dispatch(setCurrentUser(name))
//     }
//   }

// }
// export default connect(MapStateToProps)(App);
