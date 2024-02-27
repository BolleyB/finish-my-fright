// Function to show the success page for deletion
function showDeleteSuccessPage(req, res) {
    res.render('status/deleteSuccess');
}

// Function to show the success page for update
function showUpdateSuccessPage(req, res) {
    res.render('status/updateSuccess');
}

module.exports = {
    showDeleteSuccessPage,
    showUpdateSuccessPage
};


