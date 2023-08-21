
let total = 0

function handleClick(target){
   const productsNameContainer = document.getElementById('productsName')
   const makePurchaseBtn = document.getElementById('makePurchaseBtn')
   const couponBtn = document.getElementById('coupon')

   const itemName =  target.childNodes[5].innerText
   const li = document.createElement('li')
   li.style.listStyleType = 'ol'
   li.innerText = itemName

   productsNameContainer.appendChild(li)
   const price = target.childNodes[7].innerText.split(' ')[0]  
   const priceFloat = parseFloat(price)

        if(priceFloat > 0){
            makePurchaseBtn.removeAttribute('disabled')
        }else{
            makePurchaseBtn.setAttribute('disabled')
        }

   total = parseFloat(total) + priceFloat


   document.getElementById('total_price').innerText = total


     if(total >= 200){
        couponBtn.removeAttribute('disabled')
     }else{
        couponBtn.setAttribute('disabled')
     }
}



document.getElementById('coupon').addEventListener('click', function(){
     const couponValue = document.getElementById("couponCode")
     const couponValueString = couponValue.value

     const discountValue = document.getElementById('discount')
     const discountValueString =  discountValue.innerText
     let discountValueAmount = parseFloat(discountValueString)

     const subTotal = document.getElementById('subTotal')
     const subTotalString = subTotal.innerText
     let subTotalAmount = parseFloat(subTotalString) 
     if(couponValueString === 'SELL200'){
           discountValueAmount = total * 20/100 
           discountValue.innerText = discountValueAmount
          
           subTotalAmount = total - discountValueAmount
           subTotal.innerText = subTotalAmount
           
     }else{
          alert("Your coupon code is not valid")
     }
     
})



document.getElementById('resetBtn').addEventListener('click', function(){
     let productName = document.getElementById('productsName').innerText = ''
     let totalPrice =  document.getElementById('total_price').innerText = "0"
     let discount =  document.getElementById('discount').innerText = '0'
     let subTotal = document.getElementById('subTotal').innerText = '0'
     if(productName === '' && totalPrice === '0' && discount === "0" && subTotal === '0'){
          window.location.href = 'index.html'
     }
})














