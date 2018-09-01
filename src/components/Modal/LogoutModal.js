// import React, { Component } from "react";
// import Backdrop from "../Backdrop/Backdrop";
// class Modal extends Component {
//   shouldComponentUpdate(nextProps) {
//     return (
//       nextProps.show !== this.props.show ||
//       nextProps.children !== this.props.children
//     );
//   }

//   render() {
//     const style = {
//       position: "fixed",
//       zIndex: 500,
//       backgroundColor: "white",
//       width: "70%",
//       border: "1px solid #ccc",
//       boxShadow: "1px 1px 1px black",
//       padding: "16px",
//       left: "15%",
//       top: "30%",
//       boxSizing: "border-box",
//       transition: "all 0.3s ease-out"
//     };
//     return (
//       <React.Fragment>
//         <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
//         <div
//           style={{
//             style,
//             transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
//             opacity: this.props.show ? "1" : "0"
//           }}
//         >
//           {this.props.children}
//         </div>
//       </React.Fragment>
//     );
//   }
// }

// export default Modal;
