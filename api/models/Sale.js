/**
 * Sale.js
 *
 * @description :: Server-side actions for handling sales.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  attributes : {
    amount: {
      type: 'number',
      required: true
    },
    buyer: {
      model: 'user'
    },
  }
};
