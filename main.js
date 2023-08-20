
let total = 0

function handleClick(target){
   const productsNameContainer = document.getElementById('productsName')
   const makePurchaseBtn = document.getElementById('makePurchaseBtn')
   const couponBtn = document.getElementById('coupon')

   const itemName =  target.childNodes[5].innerText
   const li = document.createElement('li')
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
          console.log('hello');
     }
     
})
//     const withdrawTotal = document.getElementById('withdraw-total') 
//     const withdrawTotalString = withdrawTotal.innerText
//     const withdrawTotalAmount = parseFloat(withdrawTotalString)
//     const withdrawTotalSum = withdrawTotalAmount + withdrawAmount
//     withdrawTotal.innerText = withdrawTotalSum













