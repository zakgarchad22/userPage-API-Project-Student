
class Renderer {
    renderMainUser(userobject) {
      const source = $("#meanUser-template").html()
      const template = Handlebars.compile(source)
      const newHTML = template( userobject )
      $(".user-container").html(newHTML)
    }

        renderQuote(quote) {   
        const source = $("#quote-template").html()
        const template = Handlebars.compile(source)
        const newHTML = template({ quote })
        $(".quote-container").html(newHTML)
      }
  
      renderPokemon(pokemon) {
        const source = $("#pokemon-template").html()
        const template = Handlebars.compile(source)
        const newHTML = template({pokemon })
        $(".pokemon-container").html(newHTML)
    }
    renderMeat(meat) {
        const source = $("#meat-template").html()
        const template = Handlebars.compile(source)
        const newHTML = template({meat})
        $(".meat-container").html(newHTML)
    }

    renderFriends(friends) {
        const source = $("#friends-template").html()
        const template = Handlebars.compile(source)
        const newHTML = template({ friends })
        $(".friends-container").html(newHTML)
      }
  }
  
 