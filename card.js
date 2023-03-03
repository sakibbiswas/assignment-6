// loaddata part
const loadcards = async (datalimit) => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url)
    const data = await res.json()
   displaycards(data.data.tools,datalimit);
}
const displaycards = (cards,datalimit) => {
  const containercard = document.getElementById('card-container')
  // btn show
  const showALL = document.getElementById('showall');
     if  (datalimit && cards.length > 6) {
       cards = cards.slice(0,6)
        showALL.classList.remove('d-none')
        
    }
    else {
        showALL.classList.add('d-none')
  }

   
  cards.forEach(card => {
      console.log(card)
        const cardiv = document.createElement('div')
        cardiv.classList.add('col')
    cardiv.innerHTML = `
    <div class="card rounded-3" style="hight:100px">
      <img src="${card.image}" class="card-img-top p-4 rounded-5" alt="...">
      <div class="card-body">
    
    <h5 class="card-title px-3">features</h5>
    <ol>
    <li>Natural language processing</li>    
    <li>Contextual understanding </li>    
    <li>Text generation</li>        
    </ol>
    <hr class="w-100 border-3 ">
    <h5 class="card-title px-3">${card.name}</h5>
    
        <p class="card-text p-3"><i class="fa-regular fa-calendar-days"></i> ${card.published_in}</p>
        <p onclick="" class="text-center"><i class="fa-sharp fa-solid fa-arrow-right"></i></p>
      </div>
    </div>
        
        
        `;
    containercard.appendChild(cardiv)
    
  })
  toggolloader(false)
  
  
 
}
// loader part
const toggolloader = (isloading) => {
    const loadersection = document.getElementById('loader')
    if (isloading) {
        loadersection.classList.remove('d-none')
    }
    else {
        loadersection.classList.add('d-none')
  }
 
  
}

document.getElementById('btnshow').addEventListener('click', function () {
  processsearch()
})
const processsearch = (datalimit) => {
  loadcards(datalimit)
  
}
// loadcards()
toggolloader(true)
 processsearch(6)
 

