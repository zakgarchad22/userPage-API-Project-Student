//This is the class that will manage all your APIs

class APIManager 
{
    constructor() {
        this.data = {}
    }

    fetchData(callback) 
    {
        Promise.all([
            $.get('https://randomuser.me/api/?results=7'),
            $.get('https://api.kanye.rest/'),
            $.get(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 950)}`),
            $.get('https://baconipsum.com/api/?type=meat')
        ]).then(data => 
            {
            const users = data[0]
            this.data = {
                meanUser: users.results[0],
                kanyeQuote: data[1].quote,
                pokemon: data[2],
                meat: data[3][0],
                friends: users.results.slice(1)
            }

            if(callback){
                callback(this.data)
            }
            
        })
    }
}