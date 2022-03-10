const api ='https://salam-dhr.org/?rest_route=/wp/v2/posts&_embed/?per_page=100'
const api_images ='https://salam-dhr.org/index.php?rest_route=/wp/v2/media'

async function getData(){
    const response = await fetch(api)
    const response_images = await fetch(api_images)
    const data = await response.json()
    const data_images = await response_images.json()
    console.log(data)

    document.querySelector('#content h1').innerHTML = data[9].title.rendered
    document.querySelector('#content img').src = data[9]._embedded['wp:featuredmedia']['0'].source_url
    document.querySelector('#content p').innerHTML = data[9].content.rendered


    // Example of a list
    document.querySelector('#actor select').innerHTML = data.map(abbas => `<option>${abbas.title.rendered}</option>`)
}

getData()
