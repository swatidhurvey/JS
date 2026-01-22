

// let result =document.getElementById('result')
// let filter = document.getElementById('filter')

// let listitem = [];

// getData()
// filter.addEventListener('input',(e) => filterData(e.target.value))



// async function getData() {
//     let res = await fetch('https://randomuser.me/api?results=50')

//     let {results} = await res.json()
  
//     result.innerHTML = ''

//     results.forEach(user=>{
//         let li = document.createElement('li')

//         listitem.push(li)

//         li.innerHTML = `
//            <img src = "${user.picture.large}" alt = "${user.name.first}">

//           <div class="user-info" >
//         <h4> ${user.name.first} ${user.name.last} </h4>
//         <p>${user.location.city} ,${user.location.country} </p>
//      </div>

//         `

//         result.appendChild(li);
//     })
// }

// function filterData (searchTerm){
//     listitem.forEach(item=>{

//         if(item.innerText.toLowerCase().include(searchTerm.toLowerCase()))
//         {
//             item.classlist.remove('hide')
//         }
//         else{
//             item.classlist.add('hide')
//         }
//     })
// }




let result = document.getElementById('result')
let filter = document.getElementById('filter')

let profileImg = document.getElementById('profile-img')
let profileName = document.getElementById('profile-name')
let profileLocation = document.getElementById('profile-location')

let usersData = []

filter.value = ''

filter.addEventListener('input', (e) => {
    filterData(e.target.value)
})

getData()

async function getData() {
    let res = await fetch('https://randomuser.me/api?results=50')
    let data = await res.json()
    usersData = data.results
}

function filterData(searchTerm) {
    searchTerm = searchTerm.toLowerCase().trim()
    result.innerHTML = ''

    if (searchTerm === '') return

    usersData.forEach(user => {
        let text = `${user.name.first} ${user.name.last} ${user.location.city} ${user.location.country}`.toLowerCase()

        if (text.includes(searchTerm)) {
            let li = document.createElement('li')
            li.classList.add('user-item')

            li.dataset.email = user.email // optional, unique identifier

            li.innerHTML = `
                <img src="${user.picture.large}" alt="${user.name.first}">
                <div class="user-info">
                    <h4>${user.name.first} ${user.name.last}</h4>
                    <p>${user.location.city}, ${user.location.country}</p>
                </div>
            `

            result.appendChild(li)
        }
    })
}

/* ✅ Selection + Profile Display */
result.addEventListener('click', (e) => {
    let li = e.target.closest('li')
    if (!li) return

    document.querySelectorAll('#result li').forEach(item =>
        item.classList.remove('selected')
    )
    li.classList.add('selected')

    // Find the clicked user in usersData
    let selectedText = li.querySelector('h4').innerText.toLowerCase()

    let user = usersData.find(u => 
        `${u.name.first} ${u.name.last}`.toLowerCase() === selectedText
    )

    if (user) {
        profileImg.src = user.picture.large
        profileName.innerText = `${user.name.first} ${user.name.last}`
        profileLocation.innerText = `${user.location.city}, ${user.location.country}`
    }
})

