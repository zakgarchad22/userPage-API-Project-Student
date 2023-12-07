

const apiManager = new APIManager()
const render = new Renderer()

//callback function 
apiManager.fetchData(function(data){
    
    render.renderMainUser(data.meanUser)
    render.renderQuote(data.kanyeQuote)
    render.renderPokemon(data.pokemon)
    render.renderMeat(data.meat)
    render.renderFriends(data.friends)
})