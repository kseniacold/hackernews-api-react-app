// types/index.js
import { shape, number, string, arrayOf, bool } from 'prop-types';

export const storyType = shape({
  by: string.isRequired,
  descendants: number,
  id: number.isRequired,
  kids: arrayOf(number),
  score: number.isRequired,
  time: number.isRequired,
  title: string.isRequired,
  type: string.isRequired,
  url: string,
  isBookmarked: bool.isRequired
});