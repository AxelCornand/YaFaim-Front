/* eslint-disable max-len */
/* eslint-disable react/jsx-no-constructed-context-values */
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipes, resetFilters, saveFavoriteRecipesId } from '../../actions/recipes';

import LegalNotice from '../Pages/LegalNotice/legalNotice';
import Recipe from '../Recipe/recipe';
import Faqs from '../Pages/Faqs/faqs';
import Login from '../Pages/Login/login';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import Home from '../Pages/Home/home';
import NotFound from '../Pages/NotFound/notFound';
import IngredientsFilter from '../Pages/IngredientsFilter/ingredientsFilter';
import UserProfil from '../Pages/UserProfil/userProfil';
import Contact from '../Pages/Contact/contact';
import Register from '../Pages/Register/register';
import FavoritesRecipes from '../Pages/FavoritesRecipes/favoritesRecipes';
import { ThemeContext } from '../../Context/themeContext';
import { isTokenOk } from '../../utils/functions';

function App() {
  const [theme, setTheme] = useState('bg-strawberry');
  const dispatch = useDispatch();
  const favoriteRecipeInState = useSelector((state) => state.recipes.favoriteRecipesId);
  const user = JSON.parse(sessionStorage.getItem('user'));
  const recipes = useSelector((state) => state.recipes.list);

  useEffect(() => {
    if (recipes.length === 0) {
      dispatch(fetchRecipes());
    }
    // when the page is refreshed, we retrieve the favorite recipes from the storage session to put them in the state
    if (user && isTokenOk() && favoriteRecipeInState) {
      const userRecipeId = user.recipes.map((favoriteRecipe) => favoriteRecipe.id);
      dispatch(saveFavoriteRecipesId(userRecipeId));
    }
  }, []);

  return (
    <ThemeContext.Provider value={{
      theme,
      setTheme,
    }}
    >
      <div
        className={theme}
        style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
      >
        <Header
          className="box"
        />
        <main>
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/profil" element={<UserProfil />} />
              <Route path="/ingredients-filter" element={<IngredientsFilter />} />
              <Route path="/recipe/:slug" element={<Recipe />} />
              <Route path="/favorites" element={<FavoritesRecipes />} />

              <Route path="/legal-notice" element={<LegalNotice />} />
              <Route path="/faqs" element={<Faqs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
