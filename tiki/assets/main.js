
const quantityInput = document.querySelector('.quantity');
const priceElement = document.querySelector('.product-price');
const totalPriceElement = document.querySelector('.total-price');

const price = parseFloat(priceElement.textContent.replace('₫', '')); // Lấy giá sản phẩm và loại bỏ ký tự '₫'

const decreaseButton = document.querySelector('.decrease');
decreaseButton.addEventListener('click', () => {
    if (quantityInput.value > 1) {
        quantityInput.value--;
        updateTotalPrice();
    }
});

const increaseButton = document.querySelector('.increase');
increaseButton.addEventListener('click', () => {
    quantityInput.value++;
    updateTotalPrice();
});

function updateTotalPrice() {
    const quantity = parseInt(quantityInput.value);
    const totalPrice = quantity * price;
    totalPriceElement.textContent = totalPrice.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}
