function showUpdateSuccessMessage() {
    const updateSuccessMessage = document.getElementById('updateSuccessMsg');
    updateSuccessMessage.style.display = 'block'; // Show the success message
    setTimeout(() => {
        updateSuccessMessage.style.display = 'none'; // Hide the success message after 3 seconds
    }, 3000);
}

function showDeleteSuccessMessage() {
    const deleteSuccessMessage = document.getElementById('deleteSuccessMsg');
    deleteSuccessMessage.style.display = 'block'; // Show the success message
    setTimeout(() => {
        deleteSuccessMessage.style.display = 'none'; // Hide the success message after 3 seconds
    }, 3000);
}

