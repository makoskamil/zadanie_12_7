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
        board.createColumn(col);
    });
}

function setupCards(col, cards) {
    cards.forEach(function (card) {
  		var cardObj = new Card(card.id, card.bootcamp_kanban_column_id);
        col.createCard(cardObj);
        
    });
}


/*// OGÓLNA FUNKCJA
function randomString() {
	var chars = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ'.split();
	var str = '', i;
	for (i = 0; i < 10; i++) {
	  str += chars[Math.floor(Math.random() * chars.length)];
	}
	return str;
} */

