const loc = window.location.href;
const url = new URL(loc);
const id = url.searchParams.get("id");
console.log(id);

fetch(`http://localhost:3000/api/products/${id}`)
  .then((response) => {
    if (response.ok) return response.json();
    throw new Error("mauvais id");
  })
  .then((product) => {
    console.log(product);
    const imgClassElement = document.getElementsByClassName("item__img");

    const productImg = document.createElement("img");
    productImg.src = product.imageUrl;
    imgClassElement[0].appendChild(productImg);

    title.innerHTML = product.name;

    price.innerHTML = product.price;

    description.innerHTML = product.description;

    const productColors = product.colors;
    console.log(productColors);

    for (let i = 0; i < productColors.length; i++) {
      const optionProduct = document.createElement("option");
      colors.appendChild(optionProduct);
      optionProduct.setAttribute("value", productColors[i]);
      optionProduct.innerHTML = productColors[i];
    }

    const addCart = document.getElementById("addToCart");
    addCart.addEventListener("click", function () {
      localStorage.setItem("id", id);
      localStorage.setItem("img", product.imageUrl);
      localStorage.setItem("alt", product.altTxt);
      localStorage.setItem("name", product.name);
      localStorage.setItem("price", product.price);
    });
  });
