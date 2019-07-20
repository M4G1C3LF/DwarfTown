export function filterByName(characters, filterString) {
  const result = characters && characters.length ? characters.filter((character) => character.name.toLowerCase().includes(filterString.toLowerCase())) : null;
  return result;
}
