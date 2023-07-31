function addItem() {
    const newItemInput = document.getElementById('newItemInput');
    const newItemText = newItemInput.value.trim();
    if (newItemText === '') {
      return;
    }
  
    const checklist = document.getElementById('checklist');
    const newItem = document.createElement('li');
    newItem.innerHTML = `
      <input type="checkbox" onchange="toggleChecked(this)">
      ${newItemText}
      <button onclick="removeItem(this)">Remove</button>
    `;
    checklist.appendChild(newItem);
  
    newItemInput.value = '';
  }
  
  function removeItem(item) {
    const listItem = item.parentNode;
    listItem.remove();
  }
  
  function toggleChecked(checkbox) {
    const listItem = checkbox.parentNode;
    if (checkbox.checked) {
      listItem.style.textDecoration = 'line-through';
    } else {
      listItem.style.textDecoration = 'none';
    }
  }
  
  function removeCheckedItems() {
    const checklist = document.getElementById('checklist');
    const checkedItems = checklist.querySelectorAll('input[type="checkbox"]:checked');
  
    checkedItems.forEach((item) => {
      const listItem = item.parentNode;
      listItem.remove();
    });
  }
  