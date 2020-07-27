function getDogImage(){
    const inputNumber = $('.js-number-of-images').val();
    let url = `https://dog.ceo/api/breeds/image/random/${inputNumber}`;
    const options = {method: 'GET'};
    fetch(url, options)
        .then(response => response.json())
        .then(responseJson => displayResults(responseJson));
};

function handleForm(){
  $('form').submit(event => {
    event.preventDefault();
    $('.results-img').remove();
    getDogImage();
  });
};

function displayResults(responseJson){
  console.log(responseJson);
  for (let i = 0; i < responseJson.message.length; i++){
    $('.results').append(
      `<img src="${responseJson.message[i]}" class="results-img" width="200px">`
    )
  }
}

$(function() {
  console.log('App Loaded');
  handleForm();
});