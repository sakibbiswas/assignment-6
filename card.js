// loaddata part
const loadcards = async () => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url)
    const data = await res.json()
   displaycards(data.data.tools);
}
const displaycards = cards => {
    const containercard = document.getElementById('card-container')
  cards.forEach(card => {
      console.log(card)
        const cardiv = document.createElement('div')
        cardiv.classList.add('col')
    cardiv.innerHTML = `
    <div class="card rounded-3">
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
    
        <p class="card-text"></p>
      </div>
    </div>
        
        
        `;
        containercard.appendChild(cardiv)
    })
}
loadcards()

