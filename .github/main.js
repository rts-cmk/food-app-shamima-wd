let portion = 2;
const portionDisplay = document.getElementById("portion");

function changePortion(amount) {
  portion = Math.max(1, portion + amount);
  portionDisplay.textContent = portion;
}

function goBack() {
  window.history.back();
}

function openDetails(name, rating, price) {
  const params = new URLSearchParams({ name, rating, price });
  window.location.href = `details.html?${params.toString()}`;
}

function navigate(page) {
  window.location.href = page;
}

document.querySelectorAll(".fav-icon").forEach((icon) => {
  icon.addEventListener("click", (e) => {
    e.stopPropagation();
    icon.classList.toggle("active");
    icon.src = icon.classList.contains("active")
      ? "favorite-filled.png"
      : "favorite.png";
  });
});

function openDetails(name, rating, price) {
  const params = new URLSearchParams();
  params.set("name", name);
  params.set("rating", rating);
  params.set("price", price);
  window.location.href = "details.html?" + params.toString();
}

function goToProfile() {
  window.location.href = "profile.html";
}

function goHome() {
  window.location.href = "home.html";
}

function logout() {
  alert("You have logged out!");
  goHome();
}

if (window.location.pathname.endsWith("details.html")) {
  const params = new URLSearchParams(window.location.search);
  const burgerName = params.get("name") || "Cheeseburger Wendy’s Burger";
  const rating = params.get("rating") || "4.9";
  const priceParam = parseFloat(params.get("price"));

  const basePrice = isNaN(priceParam) ? 4.12 : priceParam;

  document.getElementById("burger-name").textContent = burgerName;
  document.getElementById("rating").textContent = "⭐ " + rating;

  const slider = document.getElementById("spicy-slider");
  const portionEl = document.getElementById("portion");
  const priceEl = document.getElementById("price");

  let portion = 1;

  function updatePrice() {
    priceEl.textContent = "$" + (basePrice * portion).toFixed(2);
  }

  window.changePortion = function (n) {
    portion = Math.max(1, portion + n);
    portionEl.textContent = portion;
    updatePrice();
  };

  updatePrice();

  slider.addEventListener("input", () => {
    // Mild = 0, Medium = 1, Hot = 2
  });
}
