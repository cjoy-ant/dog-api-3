 function getDogImages() {
  console.log('Fetching your dog images');
  let breed = getBreed();
   fetch (`https://dog.ceo/api/breed/${breed}/images/random`)
   .then(response => response.json())
   .then(responseJson => displayResults(responseJson))
   .catch(error => alert('Something went wrong.Try again later.'))
}

//gets breed from text input
function getBreed() {
  let enteredBreed = $('#dog-breed').val();
  return enteredBreed;
}

// displaysResults to the DOM
function displayResults(responseJson) {
  console.log(responseJson);
  let displayBreed = getBreed();
  if (responseJson.status === "success") {
    $('section h2').replaceWith(`<h2>Look at this ${displayBreed}!</h2>`);
    $('.results-img').replaceWith(`<img src="${responseJson.message}" class="results-img">`);
    $('.results').removeClass('hidden');
  } else {
    $('section h2').replaceWith(`<h2>Sorry! We can't seem to find the breed '${displayBreed}'. Try another.</h2>`);
    $('.results-img').addClass('hidden');
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
  