export function filterByName(characters, filterString) {
  const result = characters && characters.length ? characters.filter((character) => character.name.toLowerCase().includes(filterString.toLowerCase())) : null;
  return result;
}

export function filterByProfession(characters, professionFilter) {
  console.log("FilterByProfession")
  console.log(JSON.stringify(characters));
  if (!professionFilter) return characters;
  const result = characters && characters.length ? characters.filter((character) => character.professions.includes(professionFilter)) : null;
  return result;
}

export function getProfessions(characters) {
  const jobs = [];
  jobs.push('');
  if (characters && characters.length) {
    characters.map((char) => {
      if (char.professions && char.professions.length) {
        char.professions.map((job) => {
          if (!jobs.includes(job)) jobs.push(job);
          return null;
        });
      }
      return null;
    });
  }
  return jobs;
}
