import * as model from './model';
import recipeView from './views/recipeView';
import searchView from './views/searchView';
import resultsView from './views/resultsView';
import paginationView from './views/paginationView';
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

    // 3) Render results
    resultsView.render(model.getSearchResultsPage());

    // 4) Render initial pagination buttons
    paginationView.render(model.state.search);
  }
  catch(err) {
    console.log(err);
  }
}

const controlPagination = function(goToPage) {
  // 1) Render NEW results
  resultsView.render(model.getSearchResultsPage(goToPage));

  // 2) Render NEW pagination buttons
  paginationView.render(model.state.search);
}

const init = function() {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchReults);
  paginationView.addHandlerClick(controlPagination);
}
init();