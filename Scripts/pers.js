// Get the search input and results elements
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');
const searchResultsList = document.getElementById('search-results-list');

// Load the pers.json file
fetch('/Data/pers.json')
  .then(response => response.json())
  .then(data => {
    // Create a function to search for personnel
    function searchPersonnel(query) {
      const results = data.filter(person => {
        return person.name.toLowerCase().includes(query.toLowerCase()) ||
               person.mid.includes(query) ||
               person.rank.toLowerCase().includes(query.toLowerCase()) ||
               person.affiliation.toLowerCase().includes(query.toLowerCase());
      });
      return results;
    }

    // Add an event listener to the search button
    document.getElementById('search-button').addEventListener('click', () => {
      const query = searchInput.value.trim();
      if (query) {
        const results = searchPersonnel(query);
        if (results.length > 0) {
          searchResults.style.display = 'block';
          searchResultsList.innerHTML = '';
          results.forEach(person => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
              <h2>${person.name}</h2>
              <p>MID: ${person.mid}</p>
              <p>Rank: ${person.rank}</p>
              <p>Affiliation: ${person.affiliation}</p>
            `;
            searchResultsList.appendChild(listItem);
          });
        } else {
          searchResults.style.display = 'none';
        }
      }
    });
  })
  .catch(error => console.error(error));