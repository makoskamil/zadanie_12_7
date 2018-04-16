var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
    'X-Client-Id': '3073',
    'X-Auth-Token': '95871d27b81386fdb91425b78847837d'
};

$.ajaxSetup({
    headers: myHeaders
});

$.ajax({
    url: baseUrl + '/board' ,
    method: 'GET',
    success: function(response) {
        setupColumns(response.columns);
    }
});

function setupColumns(columns) {
    columns.forEach(function(column){
  		var col = new Column(column.id, column.name);
        setupCards(col, column.cards);
        board.createColumn(col);
    });
}

function setupCards(col, cards) {
    cards.forEach(function (card) {
  		var cardObj = new Card(card.id, card.name);
        col.createCard(cardObj);        
    });
}
