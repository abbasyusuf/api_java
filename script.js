const api ='https://info.bdb-law.co.uk/wp-json/wp/v2/users'

async function get(){
    const response = await fetch(api)
    const data = await response.json()
    console.log(data)

    document.querySelector('#content h1').innerHTML = data[0].name
    document.querySelector('#content img').src = data[0].img
    document.querySelector('#content p').innerHTML = data[0].nickname


    // Example of a list
    document.querySelector('#actor select').innerHTML = data.map(abbas => `<option>${abbas.name}</option>`)
}

get()
