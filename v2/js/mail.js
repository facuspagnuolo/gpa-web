$(document).ready(function(){
	$('.formSendE').click(function(){
			// e.preventDefault();
			if(validateRequiredInputE($('.formNameE').val()) && validateRequiredInputE($('.formEmailE').val()) && validateRequiredInputE($('.formMessageE').val()) && validateRequiredInputE($('.formMotiveE').val())){
				if(validateCorrectEmailE($('.formEmailE').val())){
					console.log("entro a mandarlo");
					var json= {
						"key": "L4mIqw7npBk53ZYDAxX71g",
				  	"message": {
				  			"subject": 'Contact via web: ' + $('.formMotiveE').val(),
					      "text": $('.formMessageE').val(),
					    	"from_email":$('.formEmailE').val(),
					    	"from_name": $('.formNameE').val(),
					    "to": [
					      {
					        "email": "comercial@goldenargentina.com",    
					        "name": "Golden Peanut and Tree Nuts"
					      }
					    ]
					  }
					}
					$.ajax({
						type: "POST",
						url: 'https://mandrillapp.com/api/1.0/messages/send.json',
						dataType: "json",
						contentType: 'application/json',
						data:JSON.stringify(json),
						success:function() {
							$('.formEmailE').val('');
							$('.formNameE').val('');
							$('.formMessageE').val('');
							$('.formMotiveE').val('');
							location.href="contacto/thanks.html";
			      }
					});
				}
			}
		});
	//Mail en castellano
	$('.formSend').click(function(){
		// e.preventDefault();
		if(validateRequiredInput($('.formName').val()) && validateRequiredInput($('.formEmail').val()) && validateRequiredInput($('.formMessage').val()) && validateRequiredInput($('.formMotive').val())){
			if(validateCorrectEmail($('.formEmail').val())){
				var json= {
					"key": "L4mIqw7npBk53ZYDAxX71g",
			  	"message": {
			  			"subject": 'Contacto via web: ' +$('.formMotive').val(),
				      "text": $('.formMessage').val(),
				    	"from_email":$('.formEmail').val(),
				    	"from_name": $('.formName').val(),
				    "to": [
				      {
				        "email": "comercial@goldenargentina.com",    
				        "name": "Golden Peanut and Tree Nuts"
				      }
				    ]
				  }
				}
				$.ajax({
					type: "POST",
					url: 'https://mandrillapp.com/api/1.0/messages/send.json',
					dataType: "json",
					contentType: 'application/json',
					data:JSON.stringify(json),
					success:function() {
						$('.formEmail').val('');
						$('.formName').val('');
						$('.formMessage').val('');
						$('.formMotive').val('');
						location.href="contacto/gracias.html";
		      }
				});
			}
		}
		 
	});

	function validateRequiredInput(value) {
  if (value=='') {
    alert('Hay campos obligatorios sin completar. Por favor completa los campos antes de enviar la consulta.');
    return false;
  }
  return true;
	};

	function validateCorrectEmail(value) {
		var regex = /([^ ]+)[@]{1}([^ ]+)[.]{1}([^ ]+)$/;
    if(!regex.test(value)){
   		alert('Por favor completa el campo de email con un formato valido antes de enviar la consulta.');
    	return false;
    }

    return true;
  
	};
	function validateRequiredInputE(value) {
  if (value=='') {
    alert('Please complete the required fields before sending the email.');
    return false;
  }
  return true;
	};

	function validateCorrectEmailE(value) {
		var regex = /([^ ]+)[@]{1}([^ ]+)[.]{1}([^ ]+)$/;
    if(!regex.test(value)){
   		alert('Please complete the email field with a valid format before sending the email.');
    	return false;
    }

    return true;
  
	};
});