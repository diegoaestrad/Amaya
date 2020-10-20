$(document).ready(function(){

	$("#submit").click(function(){

  		var date = new Date($('#date').val());
		var day = date.getDate();
 		var month = date.getMonth() + 1;
  		var year = date.getFullYear();

		$.ajax({
			type: 	"POST",
			url: 	"mail.php",
			data: 	"to=86diegoestrada@gmail.com"  
					+"&title=Amaya Exteriors Inc Request For Info"
					+"&name="+$("#name").val()
					+"&email="+$("#email").val()
					+"&telephone="+$("#phone").val()
					+"&city="+$("#city").val()
					+"&address="+$("#address").val()

					 
					+"&date=day "+day+".month "+month+".year "+year 
					+"&comment="+$("#textarea").val(),
		}).done(function(massage){
			alert(massage);
		});
	});

});