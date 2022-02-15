// Date Added
const date = new Date();
document.getElementById('show-date').innerText=date.toLocaleDateString();

// SubmIt Button Click And Get Input Data
const detailsSubmitButton = document.getElementById('detail-submit-btn');
detailsSubmitButton.addEventListener('click', function(){
    const buyerDetailsInput =document.getElementById('buyer-details-input');
    const buyerInfo = document.getElementById('buyer-info');
    buyerInfo.innerText = buyerDetailsInput.value;
    buyerDetailsInput.value = '';
   
})


// Add product
const infoTable= document.getElementById('info-table'); 
const itemNameInput=  document.getElementById('item-name-input');
const itemPriceInput=  document.getElementById('item-price-input');
const itemQuantityInput=  document.getElementById('item-quantity-input');

const addButton = document.getElementById('add-details-btn');
    addButton.addEventListener('click', function(){
        if(itemNameInput == '' || itemPriceInput.value < 0 || itemQuantityInput < 0 || itemPriceInput.value == '' || itemQuantityInput == ''  ) {
            console.log('sorry');
            
        }
        else{
            const tr = document.createElement('tr')
        const th = document.createElement('th')
        const td1 = document.createElement('td')
        const td2 = document.createElement('td')
        const td3 = document.createElement('td')
        let totalPrice = parseFloat(itemPriceInput.value) * parseFloat(itemQuantityInput.value);
        totalPrice = totalPrice.toFixed(2);
    
        th.innerText = itemNameInput.value;
        td1.innerText= itemPriceInput.value;
        td2.innerText= itemQuantityInput.value;
        td3.innerText = totalPrice;
        td3.classList.add('total-price')
        tr.appendChild(th)
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3);
    
        infoTable.appendChild(tr);
        itemPriceInput.value = '';
        itemNameInput.value ='';
        itemQuantityInput.value = '';
    
        /*  <tr>
                <th >1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
            </tr> */
            gettingSubTotal()
            const subTotalDisplay= document.getElementById('sub-total').innerText = gettingSubTotal().toFixed(2);
            const tax = subTotalDisplay *.2
           const taxMoney = document.getElementById('tax');
            taxMoney.innerText= tax.toFixed(2);; 
            const grandTotal= document.getElementById('grand-total');
            grandTotal.innerText = parseFloat(subTotalDisplay)+ parseFloat(tax);
            document.getElementById("grand-total-2").innerText= grandTotal.innerText;
        }
        
    })
    


function gettingSubTotal(){
    const subTotal = document.getElementsByClassName('total-price');
    let subTotalPrice =0;
    for (const item of subTotal) {
        subTotalPrice = parseFloat(subTotalPrice) + parseFloat(item.innerText);
    }
    return subTotalPrice;
}