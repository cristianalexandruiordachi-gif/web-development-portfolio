"use strict";
function showPopup(show) {
  const popup = document.getElementById("popup");
  if (show) popup.showModal();
  else popup.close();
}
function addRecommendation(event) {
  event.preventDefault();
  const field = document.getElementById("new_recommendation");
  const message = field.value.trim();
  if (!message) {
    field.setCustomValidity("Please write a recommendation before submitting.");
    field.reportValidity();
    return;
  }
  field.setCustomValidity("");
  const name = document.getElementById("visitor-name").value.trim();
  const card = document.createElement("blockquote");
  card.className = "recommendation";
  const text = document.createElement("p");
  text.textContent = "“" + message + "”";
  const author = document.createElement("cite");
  author.textContent = name || "Portfolio visitor";
  card.append(text, author);
  document.getElementById("all_recommendations").appendChild(card);
  event.currentTarget.reset();
  // The success popup is invoked only after a valid recommendation is added.
  showPopup(true);
}
document.getElementById("recommendation-form").addEventListener("submit", addRecommendation);
document.getElementById("new_recommendation").addEventListener("input", event => event.target.setCustomValidity(""));
document.getElementById("close-popup").addEventListener("click", () => document.getElementById("popup").close());
