const plusButtons = document.querySelectorAll('#plus');
      const minusButtons = document.querySelectorAll('#minus');
      
    //   const totalE = document.querySelector('#total');

      plusButtons.forEach(button => {
        button.addEventListener('click', () =>
        {
            const product = button.closest('.cart-product');
            const countSpan = product.querySelector('.cart_product-item-qty');
            const currentCount = parseInt(countSpan.dataset.count);
            const unitPriceE = product.querySelector('.cart_product-item-price');
            const currentPrice = parseFloat(unitPriceE.dataset.price);
            const totalSpan = product.querySelector('.total');
            const newCount = currentCount + 1;
            countSpan.dataset.count = newCount;
            countSpan.textContent = newCount;
            const newTotal = newCount * currentPrice;
            totalSpan.dataset.price = newTotal;
            totalSpan.textContent = newTotal + ' đ';
            
        });
        
      });


      minusButtons.forEach(button => {
        button.addEventListener('click', () =>
        {
          const product = button.closest('.cart-product');
            const countSpan = product.querySelector('.cart_product-item-qty');
            const currentCount = parseInt(countSpan.dataset.count);
            const unitPriceE = product.querySelector('.cart_product-item-price');
            const currentPrice = parseFloat(unitPriceE.dataset.price);
            const totalSpan = product.querySelector('.total');
            if(currentCount > 0)
            {
            const newCount = currentCount - 1;
            countSpan.dataset.count = newCount;
            countSpan.textContent = newCount;
            const newTotal = newCount * currentPrice;
            totalSpan.dataset.price = newTotal;
            totalSpan.textContent = newTotal + ' đ';

            }
        });
      });
