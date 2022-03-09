const api ='https://salam-dhr.org/?rest_route=/wp/v2/posts'

async function getData(){
    const response = await fetch(api)
    const data = await response.json()
    console.log(data)

    document.querySelector('#content h1').innerHTML = data[0].title.rendered
    document.querySelector('#content img').src = data[0].featured_media
    document.querySelector('#content p').innerHTML = data[0].content.rendered


    // Example of a list
    document.querySelector('#actor select').innerHTML = data.map(abbas => `<option>${abbas.title.rendered}</option>`)
}

getData()
