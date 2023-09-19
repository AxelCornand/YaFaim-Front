import React from 'react';
import { shallow } from 'enzyme';
import { useSelector } from 'react-redux';
import Cards from '../../src/components/Cards/cards';
import CardRecipe from '../../src/components/Cards/cardRecipe';

//simulate the react-redux module and its functionality
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

const recipes = [
  {
    id: 6,
    name: "Salade lyonnaise",
    poster: "https://img.freepik.com/premium-photo/spicy-minced-beef-salad-larb-is-traditional-thai-food_185126-1452.jpg?size=626&ext=jpg&ga=GA1.1.1782314423.1681818386&semt=ais",
    preptime: 25,
    cooktime: 0,
    difficulty: 1,
    slug: "salade-lyonnaise",
    diet: [
      {
        id: 4,
        name: "Diet 1"
      }
    ],
    category: {
      id: 1,
      name: "Category 1"
    },
  },
  {
    id: 5,
    name: "crepe parisienne",
    poster: "https://img.freepik.com/premium-photo/spicy-minced-beef-salad-larb-is-traditional-thai-food_185126-1452.jpg?size=626&ext=jpg&ga=GA1.1.1782314423.1681818386&semt=ais",
    preptime: 20,
    cooktime: 0,
    difficulty: 1,
    slug: "crepe",
    diet: [
      {
        id: 4,
        name: "Diet 1"
      }
    ],
    category: {
      id: 1,
      name: "Category 1"
    },
  },
];



describe('Cards component', () => {

  //check if the render count of the CardRecipe component is equal to number of recipe
  test('renders the correct number of CardRecipe', () => {
    const searchName = "Salade";
    const categorySelector = 'Category 1';
    const dietSelector = 'Diet 1';

    //configure the simulated behavior of the useSelector function in our test
    useSelector.mockReturnValueOnce(searchName);
    useSelector.mockReturnValueOnce(categorySelector);
    useSelector.mockReturnValueOnce(dietSelector);

    const wrapper = shallow(<Cards recipes={recipes} />);
    expect(wrapper.find(CardRecipe)).toHaveLength(1);
  });

  test('filters recipes based on searchName prop', () => {
    const searchName = "Salade";
    const categorySelector = 'Toutes les catégories';
    const dietSelector = 'Tous les régimes alimentaires';

    //configure the simulated behavior of the useSelector function in our test
    useSelector.mockReturnValueOnce(searchName);
    useSelector.mockReturnValueOnce(categorySelector);
    useSelector.mockReturnValueOnce(dietSelector);

    const wrapper = shallow(<Cards recipes={recipes} />);
    expect(wrapper.find(CardRecipe)).toHaveLength(1);
  });



});
