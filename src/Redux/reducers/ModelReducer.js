import { CHOOSE_CLOTHES } from '../types/types';

const initialState = {
  topclothes: '', 
  botclothes: '', 
  shoes: '',  
  handbags: '',
};

const ModelRenderer = (state = initialState, action) => {
  switch (action.type) {
    case CHOOSE_CLOTHES: {
      state[action.clothes.type] = action.clothes.imgSrc_png;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default ModelRenderer;
