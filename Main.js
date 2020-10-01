import React from 'react';
import Header from './pages/Header/Header';
import Container from './pages/Container/Container';
import Footer from './pages/footer/Footer';
import AsideControl from '../src/pages/footer/Aside_Control';

class App extends React.Component {

  render() {
    return (
      <body className="hold-transition sidebar-mini layout-fixed">
        <Header />
        <div className="wrapper">
          <Container />
          <Footer />
          <AsideControl />
        </div>
      </body>
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
