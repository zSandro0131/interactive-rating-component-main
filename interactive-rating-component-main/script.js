const submitBtn = document.getElementById('submitButton')
const ratedText = document.getElementById('selectedRatedNumber')
const ratingContainer = document.querySelector('.rating-section')
const thanksContainer = document.querySelector('.thank-you-section')
const rates = document.querySelectorAll('.btn')

submitBtn.addEventListener('click' , () => {
    thanksContainer.classList.remove('hidden')
    ratingContainer.style.display = 'none'
})

rates.forEach((rate) => {
    rate.addEventListener('click' , () =>{
        ratedText.innerHTML = 'You selected ' + rate.innerHTML + ' out of 5.'
    })
})

