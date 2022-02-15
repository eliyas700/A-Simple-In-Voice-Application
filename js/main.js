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
