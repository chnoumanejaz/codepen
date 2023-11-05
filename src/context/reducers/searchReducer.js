const searchReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH_QUERY':
      return {
        ...state,
        searchQuery: action.searchQuery,
      };
    case 'SET_SEARCH_QUERY_NULL':
      return {
        ...state,
        searchQuery: '',
      };
    default:
      return state;
  }
};

export default searchReducer;
