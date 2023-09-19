import React from 'react';
import { shallow } from 'enzyme';
import DifficultyStars from '../../src/components/DifficultyStars/difficultyStars';
import { FaRegStar, FaStar } from 'react-icons/fa';



describe('DifficultyStars component', () => {
  const wrapper = shallow(<DifficultyStars difficulty={5} />);

  test('renders the DifficultyStars component', () => {
    expect(wrapper.exists()).toBe(true);
  });

  //check if the FaStar component exist
  test('FaStar exist in DifficultyStars', () => {
    const FaStarExist = wrapper.find("FaStar").exists()
    expect(FaStarExist).toBe(true)
  });

  //check if the render count of the FaStar component is equal to the difficulty
  test('renders the correct number of filled stars', () => {
    expect(wrapper.find(FaStar)).toHaveLength(5);
  });

  //check if the render count of the FaRegStar component is equal to the difficulty
  test('renders the correct number of empties stars', () => {
    expect(wrapper.find(FaRegStar)).toHaveLength(0);
  });
});
