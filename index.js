function getBreed() {
    let enteredBreed = $('#dog-breed').val();
    return enteredBreed;
}
  
function getDogImages(breed) {
  console.log('Fetching your dog images');
   fetch (`https://dog.ceo/api/breed/${getBreed()}/images/random`)
   .then(response => response.json())
   .then(responseJson => displayResults(responseJson))
   .catch(error => alert('Something went wrong.Try again later.'))
}

// displaysResults to the DOM
function displayResults(responseJson) {
  if (responseJson.status === "success") {
    $('section h2').replaceWith(`<h2>Look at this ${getBreed()}!</h2>`);
    $('.results-img').replaceWith(`<br><img src="${responseJson.message}" class="results-img">`);
    $('.results').removeClass('hidden');
  } else {
    $('section h2').replaceWith(`<h2>Sorry! We can't seem to find the breed '${getBreed()}'. Try another.</h2>`);
    $('.results-img').replaceWith(`<p>[No available image to display]</p>`);
    $('.results').removeClass('hidden');
  }
}

// listens for user to submit form
function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImages();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});
  