const accessCodeInput = document.getElementById('access-code');
const submitAccessCodeButton = document.getElementById('submit-access-code');
const accessPagesContainer = document.getElementById('access-pages');
const pageList = document.getElementById('page-list');

// Define the access codes and the pages that each code can access
const accessCodes = {
  'A12345': [
    { name: 'Page 1', url: 'pers.html' },
    { name: 'Page 2', url: 'mid.html' },
    { name: 'Page 3', url: 'DANTE.html' },
  ],
  'moderator': [
    { name: 'Page 1', url: 'page1.html' },
    { name: 'Page 2', url: 'page2.html' },
  ],
  'user': [
    { name: 'Page 1', url: 'page1.html' },
  ],
};

// Add event listener to the submit access code button
submitAccessCodeButton.addEventListener('click', () => {
  const enteredAccessCode = accessCodeInput.value.trim();
  if (accessCodes[enteredAccessCode]) {
    // Show the accessible pages container
    accessPagesContainer.style.display = 'block';
    // Populate the page list
    const accessiblePages = accessCodes[enteredAccessCode];
    pageList.innerHTML = ''; // Clear the page list
    accessiblePages.forEach((page) => {
      const listItem = document.createElement('li');
      const link = document.createElement('a');
      link.textContent = page.name;
      link.href = page.url;
      listItem.appendChild(link);
      pageList.appendChild(listItem);
    });
  } else {
    alert('Invalid access code');
  }
});