import seriesList from "./series-database.json" assert { type: "json" };
const sectionList = document.getElementById("section-list");
function createListChild(name, rating, review, photo) {
  // image
  let image = document.createElement("img");
  image.src = photo;
  image.className = "image";

  // title
  let title = document.createElement("h3");
  title.textContent = name;
  title.className = "title";

  // rating
  let ratingSection = document.createElement("div");
  ratingSection.className = "rating-section";
  for (let i = 0; i < 5; i++) {
    let star = document.createElement("span");
    star.className = "star fa fa-star";
    if (i < rating) {
      star.className = star.className + " checked";
    }
    ratingSection.appendChild(star);
  }

  // review
  let reviewP = document.createElement("p");
  reviewP.textContent = review;
  reviewP.className = "review";

  // the item
  let li = document.createElement("li");
  li.className = "series-element";
  li.appendChild(image);
  li.appendChild(title);
  li.appendChild(ratingSection);
  li.appendChild(reviewP);
  return li;
}
seriesList?.series?.map((item, index) => {
  const child = createListChild(
    item?.name,
    item?.rating,
    item?.review,
    item?.photo
  );
  sectionList?.appendChild(child);
});
