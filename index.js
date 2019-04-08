function userSearch() {
    $('form').submit(function(event) {
        event.preventDefault();
        let userHandle = $('input').val();
        let url = `https://api.github.com/users/${userHandle}/repos`;
        let options = {
            headers: new Headers({
                "User-Agent": "edwinhollenbeck"})
            };
        fetch(url, options)
            .then(response => response.json())
            .then(responseJson => displayResults(responseJson))
            .catch(error => alert(`Please contact the system administrator.`))
    });
};

function displayResults(responseJson) {
    if (responseJson.message == "Not Found") {
        alert(`${responseJson.message}`);
    } else {
    console.log(responseJson);
    $('#display-results').empty();
    for (i = 0; i < responseJson.length; i++) {
    $('#display-results').append(`
    <li>${responseJson[i].name}</li>
    <a href="${responseJson[i].url}">${responseJson[i].url}</a>
    `)
    };
    };
};

$(userSearch());