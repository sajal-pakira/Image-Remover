const images = document.querySelector('.images')
images.addEventListener('click', function (event) {
    console.log(event.target.tagName);
    if (event.target.tagName === 'IMG') {
        event.target.parentNode.remove()
    }
})
