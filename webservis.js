$(document).ready(function (){
	
	$.ajax({
		type: 'GET',
		url: 'http://fakerestapi.azurewebsites.net/api/Authors/1',
		success: function(html){
				var obj = html;
				$("#ID").append("ID: " + obj.ID);
				$("#IDBook").append("ID knjige: " + obj.IDBook);
				$("#FirstName").append("Ime: " + obj.FirstName);
				$("#LastName").append("Prezime: " + obj.LastName);
		}
	});
	
	
	
});