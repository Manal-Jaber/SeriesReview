// Getting values of fields
let nameValue, ratingValue, imgValue, reviewValue;

// name
const name = document.getElementById("submit-review_name");
name.addEventListener("change", (e) => {
  nameValue = e?.target?.value;
});

// rating
const rating = document.getElementById("submit-review_rating");
rating.addEventListener("change", (e) => {
  ratingValue = e?.target?.value;
});

// img
const img = document.getElementById("submit-review_img");
img.addEventListener("change", (e) => {
  imgValue = e?.target?.value;
});

// review
const review = document.getElementById("submit-review_review");
review.addEventListener("change", (e) => {
  reviewValue = e?.target?.value;
});

// form
const form = document.getElementById("submit-review");
form.addEventListener("submit", (e) => {
  // handle submit
});
