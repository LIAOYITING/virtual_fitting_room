const initialState = {
  navPills: [
    { tabName: 'tabTopClothes', showName: '上身', type: 'topclothes' },
    { tabName: 'tabBotClothes', showName: '下身', type: 'botclothes' },
    { tabName: 'tabShoes', showName: '鞋子', type: 'shoes' },
    { tabName: 'tabHandBags', showName: '包包', type: 'handbags' },
    { tabName: 'tabHandBags', showName: '我的衣櫃-上、下身', type: 'handbags' },
    { tabName: 'tabHandBags', showName: '我的衣櫃-鞋子、包包', type: 'handbags' },  ],
};

const NavTabReducer = (state = initialState, action) => {
  return { ...state };
};
export default NavTabReducer;
