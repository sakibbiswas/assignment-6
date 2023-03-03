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
    <div class="card rounded-3  h-100" >
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
        <p onclick="LoaddetailsData('${card.id}')" class="text-center"data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i class="fa-sharp fa-solid fa-arrow-right"></i>
        
        </p>
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
// show more btn handlar
document.getElementById('btnshow').addEventListener('click', function () {
  processsearch()
})
const processsearch = (datalimit) => {
  loadcards(datalimit)
  
}
// loadcards()

// DetailsData start

const LoaddetailsData =async (id) => {
  const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`
  const res = await fetch(url)
  const data = await res.json()
// console.log(data.data)
  displayloadDetails(data.data)
  
}
const displayloadDetails = details => {
  // console.log(details)
  const detailBody = document.getElementById('detail-body')
  detailBody.innerHTML = `
     <div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col ">
    <div class="card  h-100 bg-info rounded-2">
      <div class="card-body">
        <h6  class="card-title">${details.description} </h6>
        <div class="row   gap-1 mx-auto ">
          <button class=" col btn text-center px-2 py-4 fw-semibold text-success bg-white">${details.pricing
[0].plan}</button>
          <button class="col btn text-center fw-semibold text-info px-2 py-4  bg-white">${details.pricing[1].price}</button>
          <button class=" col btn text-center fw-semibold text-danger px-2 py-4  bg-white">${details.pricing[2].price}</button>
        </div>
        <div class="d-flex gap-4">
     <h6 class="card-title">features</h6>
     <h6 class="card-title">Integrations</h6>
     </div>
     <div class=" d-flex gap-2">
    <div class="h-25">
     <li> ${details.features[1].feature_name}</li>
     <li>${details.features[2].feature_name}</li>
     <li>${details.features[3].feature_name}</li>
     </div>

     <div>
     <p>${ details.integrations[0] ? details.integrations[0] : 'No Data Found'}</p>
     <p>${ details.integrations[1] ? details.integrations[1] : 'No Data Found'}</p>
     <p>${ details.integrations[2] ? details.integrations[2] : 'No Data Found'}</p>
     
     
     </div>
    
     </div>
       </div>
       </div>
    </div>

    <div class="col">
    <div class="card h-100 bg-info rounded-2">
    <div class="position-absolute d-flex justify-content-end mt-2 ms-5 ps-5">
       <button class="btn btn-danger px-5 py-2 ms-5">${details.accuracy.score
}%accuracy</button>
</div>
      <img  src="${details.image_link
  [0]}" class="card-img-top img-fluid" alt="...">

      <div class="card-body">
        <h5  class="card-title">${details.input_output_examples[0].input}</h5>
        <p class="card-text">${details.input_output_examples[1].input

}</p>
      </div>
    </div>
  </div>

       </div>
  
  `

}





// LoaddetailsData()

toggolloader(true)
 processsearch(6)
 

