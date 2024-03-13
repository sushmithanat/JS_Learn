import * as model from './model';
import recipeView from './views/recipeView';
import searchView from './views/searchView';
import resultsView from './views/resultsView';
// import 'core-js/stable';
import 'regenerator-runtime/runtime';
// console.log(icons);
// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
if(module.hot) {
  module.hot.accept();
}

const controlRecipes = async function(){
  try{
    const id = window.location.hash.slice(1);
    // console.log(id);

    if(!id) return;

    recipeView.renderSpinner();
    
    // 1) Loading recipe
    await model.loadRecipe(id);

    // 2) Rendering recipe
    recipeView.render(model.state.recipe);
  
  }
  catch(err){
    recipeView.renderError();
  }
}

const controlSearchReults = async function() {
  try {

    resultsView.renderSpinner();
    // 1) Get search query
    const query = searchView.getQuery();
    if(!query) return;

    // 2) Load search results
    await model.loadSearchResults(query);
    console.log(model.state.search);

    // 3) Render results
    resultsView.render(model.state.search.results);
  }
  catch(err) {
    console.log(err);
  }
}

const init = function() {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchReults);
}
init();