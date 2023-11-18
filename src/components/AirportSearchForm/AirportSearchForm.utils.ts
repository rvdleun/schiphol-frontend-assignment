export const isSearchTermValid = (searchTerm: string): boolean => {
  return searchTerm.trim().length >= 3;
};
