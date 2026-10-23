const activityInput = document.getElementById('activity-input');
const addBtn = document.getElementById('add-btn');
const activityList = document.getElementById('activity-list');

// 1. Load existing activities from localStorage when app starts
let activities = JSON.parse(localStorage.getItem('activities')) || [];

function renderActivities() {
    activityList.innerHTML = '';
    activities.forEach((activity, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${activity}</span>
            <button class="delete-btn" onclick="deleteActivity(${index})">X</button>
        `;
        activityList.appendChild(li);
    });
}

// 2. Add a new activity
addBtn.addEventListener('click', () => {
    const text = activityInput.value.trim();
    if (text !== '') {
        activities.push(text);
        localStorage.setItem('activities', JSON.stringify(activities)); // Save to storage
        activityInput.value = '';
        renderActivities();
    }
});

// 3. Delete an activity
window.deleteActivity = function(index) {
    activities.splice(index, 1);
    localStorage.setItem('activities', JSON.stringify(activities)); // Update storage
    renderActivities();
}

// Initial render
renderActivities();
