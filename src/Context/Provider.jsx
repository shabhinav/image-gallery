import { createContext, useState } from "react";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [state, setState] = useState({
    loading: false,
    data: [],
    page: 1,
  });

  return (
    <MyContext.Provider
      value={{
        loading: state.loading,
        data: state.data,
        page: state.page,
        setData: (val) => {
          setState({ ...state, data: val, loading: false });
        },
        setLoading: (val) => {
          setState({ ...state, loading: val });
        },
        setPagination: (val) => {
          setState({ ...state, page: val });
        },
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

// class MyProvider extends Component {
//   state = {
//     cars: {
//       car001: { name: "Honda", price: 100 },
//       car002: { name: "BMW", price: 150 },
//       car003: { name: "Mercedes", price: 200 },
//     },
//   };

//   render() {
//     return (
//       <MyContext.Provider
//         value={{
//           cars: this.state.cars,
//           incrementPrice: (selectedID) => {
//             const cars = Object.assign({}, this.state.cars);
//             cars[selectedID].price = cars[selectedID].price + 1;
//             this.setState({
//               cars,
//             });
//           },
//           decrementPrice: (selectedID) => {
//             const cars = Object.assign({}, this.state.cars);
//             cars[selectedID].price = cars[selectedID].price - 1;
//             this.setState({
//               cars,
//             });
//           },
//         }}
//       >
//         {this.props.children}
//       </MyContext.Provider>
//     );
//   }
// }
