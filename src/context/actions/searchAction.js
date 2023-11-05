export const SET_SEARCH_QUERY = searchQuery => {
  return {
    type: 'SET_SEARCH_QUERY',
    searchQuery,
  };
};

export const SET_SEARCH_QUERY_NULL = () => {
  return {
    type: 'SET_SEARCH_QUERY_NULL',
  };
};
