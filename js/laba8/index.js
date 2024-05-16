document.addEventListener('DOMContentLoaded', function() {
    const priceInput = document.getElementById('priceInput');
    const priceMessage = document.getElementById('priceMessage');
    const closeIcon = document.getElementById('closeIcon');

    priceInput.addEventListener('focus', function() {
        this.classList.remove('error');
    });

    priceInput.addEventListener('blur', function() {
        if (this.value < 0) {
            this.classList.add('error');
            priceMessage.textContent = 'Please enter correct price';
            priceMessage.classList.add('error');
            priceMessage.style.display = 'block';
        }
    });

    priceInput.addEventListener('change', function() {
        if (this.value >= 0) {
            priceMessage.textContent = `Price: ${this.value}`;
            priceMessage.classList.remove('error');
            priceMessage.style.display = 'block';

            closeIcon.style.display = 'block';

            closeIcon.addEventListener('click', function() {
                priceInput.value = '';
                priceMessage.textContent = '';
                priceMessage.style.display = 'none';
                closeIcon.style.display = 'none';
            });
        }
    });
});