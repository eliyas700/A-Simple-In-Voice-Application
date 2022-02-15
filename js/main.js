// Date Added
const date = new Date();
document.getElementById('show-date').innerText=date.toLocaleDateString();

// SubmIt Button Click And Get Input Data
const detailsSubmitButton = document.getElementById('detail-submit-btn');
detailsSubmitButton.addEventListener('click', function(){
    const buyerDetailsInput =document.getElementById('buyer-details-input');
    const buyerInfo = document.getElementById('buyer-info');
    buyerInfo.innerText = buyerDetailsInput.value;
})


// Add product
const infoTable= document.getElementById('info-table'); 
const itemNameInput=  document.getElementById('item-name-input');
let itemPriceInput=  document.getElementById('item-price-input');
const itemQuantityInput=  document.getElementById('item-quantity-input');

const addButton = document.getElementById('add-details-btn');
addButton.addEventListener('click', function(){

    const tr = document.createElement('tr')
    const th = document.createElement('th')
    const td1 = document.createElement('td')
    const td2 = document.createElement('td')
    const td3 = document.createElement('td')
    const totalPrice = parseFloat(itemPriceInput.value) * parseFloat(itemQuantityInput.value);

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
    itemPriceInput.value = ' ';
    itemNameInput.value ='';
    itemQuantityInput.value = '';

    /*  <tr>
            <th >1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
        </tr> */
        gettingSubTotal()
        document.getElementById('sub-total').innerText = gettingSubTotal();
        
})

function gettingSubTotal(){
    const subTotal = document.getElementsByClassName('total-price');
    let subTotalPrice =0;
    for (const item of subTotal) {
        subTotalPrice = parseFloat(subTotalPrice) + parseFloat(item.innerText);
    }
    return subTotalPrice;
}