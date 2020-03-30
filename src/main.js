function filterAll(values) {
    var filter, cards, cardContainer, h5, keep_card, card_titles, badge_texts, i, j;

    filter = []
    for (i = 0; i < values.length; i++) {
	filter.append(values[i].toUpperCase());
    }
    cardContainer = document.getElementById("allCards");
    cards = cardContainer.getElementsByClassName("card");
    for (i = 0; i < cards.length; i++) {
        //We will switch keep_card to true if we find search text in badge or title
        keep_card = false;
        //querySelectorAll returns all elements of a.badge. querySelector returns only the first element
        card_titles = cards[i].querySelectorAll(".card-body h5.card-title");
        badge_texts = cards[i].querySelectorAll(".card-footer a.badge");

        //You must loop through all card titles.
        for(j = 0; j < card_titles.length; j++) {
        	for(i = 0; i < values.length; i++) {
            		if (card_titles[j].innerText.toUpperCase().indexOf(values[i]) > -1) {
                		//Found search text, now lets switch keep_card on
                		keep_card = true;
                		//No need for further looping, we found the card, there we break loop
                		break;
			}
            	}
        }

        if(!keep_card) {
            for(j = 0; j < badge_texts.length; j++) {
                if (badge_texts[j].innerText.toUpperCase().indexOf(filter) > -1) {
                    keep_card = true;
                    break;
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
