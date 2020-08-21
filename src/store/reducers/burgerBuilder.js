import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  ingredients: null,
  totalPrice: 4,
  error: false
}

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case (actionTypes.ADD_INGREDIENT):
      const updatedIngredientAdd = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 };
      const updatedIngredientsAdd = updateObject(state.ingredients, updatedIngredientAdd);
      const updatedStateAdd = {
        ingredients: updatedIngredientsAdd,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
      }
      return updateObject(state, updatedStateAdd);
    case (actionTypes.REMOVE_INGREDIENT):
      const updatedIngredientRm = { [action.ingredientName]: state.ingredients[action.ingredientName] - 1 };
      const updatedIngredientsRm = updateObject(state.ingredients, updatedIngredientRm);
      const updatedStateRm = {
        ingredients: updatedIngredientsRm,
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
      }
      return updateObject(state, updatedStateRm);
    case (actionTypes.SET_INGREDIENTS):
      return updateObject(state, {
        ingredients: {
          salad: action.ingredients.salad,
          bacon: action.ingredients.bacon,
          cheese: action.ingredients.cheese,
          meat: action.ingredients.meat
        },
        error: false,
        totalPrice: 4
      });
    case (actionTypes.FETCH_INGREDIENTS_FAILED):
      return updateObject(state, { error: true });
    default:
      return state
  }
}

export default reducer;
