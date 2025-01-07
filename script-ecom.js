// Sélection des éléments HTML
const decreaseBtn = document.getElementById('decrease');
const increaseBtn = document.getElementById('increase');
const quantityDisplay = document.getElementById('quantity');

// Initialisation de la quantité
let quantity = 1;

// Gestion des événements
decreaseBtn.addEventListener('click', () => {
  if (quantity > 1) { // Empêche une quantité négative
    quantity--;
    quantityDisplay.textContent = quantity;
  }
});

increaseBtn.addEventListener('click', () => {
  quantity++;
  quantityDisplay.textContent = quantity;
});

// Création de l'interactivité de la galerie

function changeImage(image) {
  let galerie = document.getElementById('galerie');
  let liens = document.querySelectorAll('.galerie a');
  let main = document.querySelector('.galerie img'); // When you clicked on a thumbnail, the code was trying to update the src attribute of the <a> tag, which doesn't make sense because links don't have images.
  // Instead, you wanted to update the src attribute of the main <img> tag, which is where the image is actually displayed. //

  for (var i = 0 ; i < liens.length ; i++) {
  liens[i].onclick = function() {
    main.src = this.href; // On change l'attribut src de l'image en le remplaçant par la valeur du lien
    return false; // Et pour finir on inhibe l'action réelle du lien
  };
}
}

window.onload = changeImage()

// Ajout du produit au panier

const addToCart = document.querySelector('.add-to-cart');
addToCart.addEventListener('click', () => {
  alert('Produit ajouté au panier');
})

const product = {
  name: 'Sneakers Company',
  price: '125.00 €'
};


// Fonction pour afficher les articles dans le panier
function displayCart() {
  // Vider la liste existante
  cartItemsList.innerHTML = '';

  // Récupérer les articles du panier
  let cart = localStorage.getItem('cart');
  if (cart) {
      // Convertir le panier (chaîne de texte) en tableau
      cart = cart.split(",");
      
      // Afficher chaque article dans la liste
      cart.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = item;
          cartItemsList.appendChild(listItem);
      });
  }
}

// Ajouter un événement au bouton "Ajouter au panier"
addToCartButton.addEventListener('click', addToCart);

// Afficher les articles dès le chargement de la page
displayCart();