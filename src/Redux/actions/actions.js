import { CHOOSE_CLOTHES } from './../types/types';
export const chooseClothesAction = (clothes) => {
  return {
    type: CHOOSE_CLOTHES,
    clothes,
  };
};
