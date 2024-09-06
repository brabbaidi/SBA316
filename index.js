// Cache elements using selectElementById
const recipeForm = document.getElementById('recipe-form');
const recipeNameInput = document.getElementById('recipe-name');
const ingredientsInput = document.getElementById('ingredients');
const recipeList = document.getElementById('recipe-list');

// Event Listener for form submission
recipeForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Form validation using DOM event-based validation
    if (recipeNameInput.value === '' || ingredientsInput.value === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Create new recipe element using createElement and append it to the list
    const recipeItem = document.createElement('li');
    recipeItem.innerHTML = `<strong>${recipeNameInput.value}</strong><br>${ingredientsInput.value}`;
    
    recipeList.appendChild(recipeItem);

    // Clear form fields after submission
    recipeNameInput.value = '';
    ingredientsInput.value = '';
});

// Modify the style of the form button on user interaction (hover)
const addButton = document.getElementById('add-recipe-btn');
addButton.addEventListener('mouseover', function() {
    addButton.style.backgroundColor = '#16a085';
});
addButton.addEventListener('mouseout', function() {
    addButton.style.backgroundColor = '#3498db';
});

// BOM property usage: Update the page title dynamically
window.addEventListener('load', function() {
    document.title = 'Recipe Web App';
});
