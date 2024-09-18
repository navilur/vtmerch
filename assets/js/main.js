const fetchHeroProduct = async () => {
  try {
    const response = await fetch("assets/js/heroProduct.json");

    const products = await response.json();

    const container = document.getElementById("products-container");
    container.innerHTML = "";

    products.forEach((product) => {
      const productDiv = document.createElement("div");
      productDiv.classList.add("item");
      productDiv.innerHTML = `
        <div class="productBox">
          <img src="${product.image}" class="productImg" alt="${product.name}" />
          <h4>${product.name}</h4>
          <div class="d-flex">
            <h5>$ ${product.price}</h5>
            <h5><span>$ ${product.sale}</span></h5>
          </div>
        </div>
      `;
      container.appendChild(productDiv);
    });

    $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      responsiveClass: true,
      loop: true,
      nav: false,
      dots: false,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 3.5,
        },
        1700: {
          items: 4.5,
        },
      },
    });
  } catch (error) {
    console.error(error);
  }
};

fetchHeroProduct();

const fetchProduct = async (selector) => {
  try {
    const response = await fetch("assets/js/products.json");

    const products = await response.json();

    const container = document.querySelector(selector);
    container.innerHTML = "";

    products.forEach((product) => {
      const productDiv = document.createElement("div");
      productDiv.classList.add("productCard");
      productDiv.innerHTML = `
        <div class="imgContainer">
          <img src="${product.image}" alt="" />
        </div>
        <p>${product.name}</p>
        <div class="d-flex">
          <h5>$ ${product.price}</h5>
          <h5><span>$ ${product.sale}</span></h5>
        </div>
      `;
      container.appendChild(productDiv);
    });
  } catch (error) {
    console.log(error);
  }
};

fetchProduct(".productGrid");
fetchProduct(".productGrid2");

function increment() {
  const qty = document.getElementById("qty");
  let cvalue = parseInt(qty.value);
  if (cvalue >= 10) {
    alert("Not more than 10 product");
  } else {
    qty.value = cvalue + 1;
  }
}

function decrement() {
  const qty = document.getElementById("qty");
  let cvalue = parseInt(qty.value);
  if (cvalue <= 1) {
    alert("Minimum 1 product");
  } else {
    qty.value = cvalue - 1;
  }
}

function changeMainImage(imageSrc) {
  const mainImg = document.querySelector(".mainImg");
  mainImg.src = imageSrc;
}

let zoomLable = 1;

function handleMouseMove(event) {
  const target = event.target;
  const { offsetX, offsetY } = event;
  const { offsetWidth: width, offsetHeight: height } = target;
  const xPercent = (offsetX / width) * 100;
  const yPercent = (offsetY / height) * 100;
  zoomLevel = 2;
  target.style.transform = `scale(${zoomLevel})`;
  target.style.transformOrigin = `${xPercent}% ${yPercent}%`;
}

function handleMouseLeave(event) {
  const target = event.target;
  zoomLable = 1;
  target.style.transform = `scale(${zoomLable})`;
}

const zoomableImage = document.querySelector(".imgContainer img");
zoomableImage.addEventListener("mousemove", handleMouseMove);
zoomableImage.addEventListener("mouseleave", handleMouseLeave);

document.addEventListener("DOMContentLoaded", () => {
  const size = document.querySelectorAll("input[name=size]");
  const price = document.getElementById("price");

  size.forEach((input) => {
    input.addEventListener("change", ({ target }) => {
      const selectedPrice = target.dataset.price;
      price.textContent = selectedPrice;
    });
  });
});
