// loaddata part
const loadcards = async (datalimit) => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url)
    const data = await res.json()
   displaycards(data.data.tools,datalimit);
}
const displaycards = (cards,datalimit) => {
  const containercard = document.getElementById('card-container')
  containercard.innerText = '';
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
    ${card.features.map(a=>`<li>${a}</li>`).join('')}     
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
  // loader stop
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
// DisplayloadDetails start
const displayloadDetails = details => {
 
  const detailBody = document.getElementById('detail-body')
  detailBody.innerHTML = `
     <div class="row  row-cols-sm-1 row-cols-md-2 g-2  " >
  <div class="col ">
    <div class="card h-100  bg-danger-subtle rounded-2">
      <div class="card-body">
        <h5  class="card-title">${details.description} </h5>
        <div class="row p-2  gap-1  ">
<button class=" col btn text-center px-2 py-4 fw-semibold text-success bg-white">${details.pricing[0].price ? details.pricing[0].price:'Free of cost'}</button>
          <button class="col btn text-center fw-semibold text-info px-2 py-4  bg-white">${details.pricing[1].price ? details.pricing[1].price:'Free of pro'}</button>
          <button class=" col btn text-center fw-semibold text-danger px-2 py-4  bg-white">${details.pricing[2].plan ? details.pricing[2].plan:'Free of cost/Enterprise'}</button>
        </div>
        <div class="d-flex gap-5">
     <h6 class="card-title">features</h6>
     <h6 class="card-title ms-5">Integrations</h6>
     </div>
     <div class=" d-flex gap-2">
    <div class="h-25">
     <li> ${details.features[1].feature_name ? details.features[1].feature_name:'no data'}</li>
     <li>${details.features[1].feature_name ? details.features[1].feature_name:'no data' }</li>
     <li>${details.features[1].feature_name ? details.features[1].feature_name:'no data' }</li>
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
    <div class="card h-100  rounded-2">
    <div class="position-absolute d-flex justify-content-end mt-2 " style=" padding-left:70px" >
       <button id="accuracyshow" class="btn btn-danger ms-2">${details.accuracy.score ? details.accuracy.score :" No"}%accuracy</button>
</div>
      <img  src="${details.image_link
  [0]}" class="card-img-top img-fluid p-2 rounded-4" alt="...">

      <div class="card-body">
        <h5  class="card-title">${details.input_output_examples[0].input}</h5>
        <p class="card-text">${details.input_output_examples[0].output}</p>
      </div>
    </div>
  </div>

       </div>


  `

}








// LoaddetailsData()
// loader start
toggolloader(true)
// Show only 6 card
 processsearch(6)
 

