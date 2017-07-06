import React, { Component } from 'react';
import { connect } from 'react-redux';
import Actions from './actions';

const EMMET = {
  name: 'Emmet',
  price: 9.99,
};
const QUANTITY = 3;

class Cart extends Component {

  render() {
    return (
      <div>
        <h1>Cart</h1>
        <button type="button" onClick={e => this.props.onAddToCart(EMMET, QUANTITY)}>Add</button>
      </div>
    );
  }

}


// const mapStateToProps = state => {
//
//   const { cart } = state;
//
//   return {
//     cart,
//   };
//
// };
//
// const mapDispatchToProps = dispatch => {
//   return {
//     onAddToCart: (item = {}, quantity = 0) => {
//       return dispatch(Actions.addToCart(item, quantity));
//     },
//   };
// };


export default connect(state => ({
    cart: state.cart,
  }),
  dispatch => ({
    onAddToCart: (item = {}, quantity = 0) => {
      return dispatch(Actions.addToCart(item, quantity));
    },
  }),
)(Cart);