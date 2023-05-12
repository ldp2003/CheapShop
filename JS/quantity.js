const plusButtons = document.querySelectorAll('#plus');
      const minusButtons = document.querySelectorAll('#minus');
      plusButtons.forEach(button => {
        button.addEventListener('click', () =>
        {
            const product = button.closest('.cart-product');
            const countSpan = product.querySelector('.cart_product-item-qty')
            const currentCount = parseInt(countSpan.dataset.count);
            const newCount = currentCount + 1;
            countSpan.dataset.count = newCount;
            countSpan.textContent = newCount;
        });
        
      });


      minusButtons.forEach(button => {
        button.addEventListener('click', () =>
        {
          const product = button.closest('.cart-product');
            const countSpan = product.querySelector('.cart_product-item-qty')
            const currentCount = parseInt(countSpan.dataset.count);
            if(currentCount > 0)
            {
              const newCount = currentCount - 1;
            countSpan.dataset.count = newCount;
            countSpan.textContent = newCount;
            }
            
        });
      });