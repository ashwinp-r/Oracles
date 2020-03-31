function filterAll(values, active) {
    var cards, cardContainer, h5, keep_card, card_titles, badge_texts, i, j;

    // Activate button
    $(`#${active}`).each(function () {
               $(this).addClass('active');
    });
    
    // Remove activation
    var all = ['all', 'btnGroupDrop1', 'btnGroupDrop2', 'btnGroupDrop3'];
    for (i = 0; i < all.length; i++) {
 	if (all[i] !== active) {
    	   $(`#${all[i]}`).each(function () {
               $(this).removeClass('active');
    	   });
	}
    }

    var filter = [];
    for (i = 0; i < values.length; i++) {
    	filter.push(values[i].toUpperCase());
    }
    cardContainer = document.getElementById("allCards");
    cards = cardContainer.getElementsByClassName("card");
    for (i = 0; i < cards.length; i++) {
        // Switch keep_card to true if we find search text in badge or title
        keep_card = false;
        card_titles = cards[i].querySelectorAll(".card-body h5.card-title");
        badge_texts = cards[i].querySelectorAll(".card-footer a.badge");

        // Loop through all card titles.
        for(j = 0; j < card_titles.length; j++) {
	   for (z = 0; z < filter.length; z++) {
             if (card_titles[j].innerText.toUpperCase().indexOf(filter[z]) > -1) {
                //Found search text, 
                keep_card = true;
                break;
	     }
	   }
        }

        if(!keep_card) {
            for(j = 0; j < badge_texts.length; j++) {
	      for (z = 0; z < filter.length; z++) {
                if (badge_texts[j].innerText.toUpperCase().indexOf(filter[z]) > -1) {
                    keep_card = true;
                    break;
                }
	      }
            }
        }

        if(keep_card) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }

    }
}
