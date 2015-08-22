$(document).ready(function(){
	$('.formCurriculumSend').click(function(){
			// e.preventDefault();
			if(validateRequiredInput($('.curriculumApellido').val()) && validateRequiredInput($('.curriculumNombre').val()) && validateRequiredInput($('.curriculumDni').val()) && validateRequiredInput($('.curriculumEmail').val())){
				if(validateCorrectEmail($('.curriculumEmail').val())){

					var myRadio = $('input[name=modalidad_contacto]');
					var checkedValue = myRadio.filter(':checked').val();

					var texto = 'Apellido y nombre: ' + $('.curriculumApellido').val()+ ', ' + $('.curriculumNombre').val() + '. 			DNI: ' + $('.curriculumDni').val() +  '. 			Domicilio: ' + $('.curriculumDomicilio').val() +  '. 			Localidad: ' + $('.curriculumLocalidad').val() +  '. 			Telefono: ' + $('.curriculumTelefono').val() +  '. 			Fecha de nacimiento: ' + $('.curriculumNacimiento').val() +  '. 			Estado Civil: ' + $('.curriculumEstadoCivil').val() + '. 			OTROS DATOS: Referencias: ' + $('.curriculumReferencias').val() + '. 			Disponibilidad Horaria: ' + $('.curriculumDisponibilidad').val() + '. 			Movilidad: ' + $('.curriculumMovilidad').val() + '. 			Area o puesto para el cual se postula: ' + $('.curriculumPuesto').val() + '. 			Remuneracion Pretendida: ' + $('.curriculumRemuneracion').val() + '. 			ESTUDIOS CURSADOS: Universitari/terciario: ' + $('.curriculumTerciario').val() + '. 			Secundario: ' + $('.curriculumSecundario').val() + '. 			Primario: ' + $('.curriculumPrimario').val() + '. 			Conocimientos Informaticos: ' + $('.curriculumConocimientos').val() + '. 			Cursos o seminarios realizados: ' + $('.curriculumCursos').val() + '. 			Otros Conocimientos: ' + $('.curriculumOtrosConocimientos').val() + '. 			REFERENCIAS LABORALES: Empresa 1: ' + $('.curriculumReferencia1').val() + '. 			Empresa 2: ' + $('.curriculumReferencia2').val() + '. 			Empresa 3: ' + $('.curriculumReferencia3').val() + '. 			TRABAJO ACTUAL: Puesto: ' + $('.curriculumPuesto').val() + '. 			Sector: ' + $('.curriculumSector').val() + '. 			Empresa: ' + $('.curriculumEmpresa').val() + '. 			Por que te interesa este trabajo: ' + $('.curriculumInteres').val() + '. 			Como te enteraste de esta oferta: ' + $('.curriculumComoSeEntero').val() + '. 			Como te gustaria que nos contactemos?:' + checkedValue; 
					var json= {
						"key": "L4mIqw7npBk53ZYDAxX71g",
				  	"message": {
				  			"subject": "Curriculum via web",
					      "text": texto,
					    	"from_email":$('.curriculumEmail').val(),
					    	"from_name": $('.curriculumApellido').val()+ ' ' + $('.curriculumNombre').val(),
					    "to": [
					      {
					        "email": "rrhh@goldenargentina.com",    
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
							location.href="contacto/gracias.html";
			      }
					});
				}
			}
		});
	//Curriculum en ingles
	$('.formCurriculumSendE').click(function(){
		// e.preventDefault();
		if(validateRequiredInputE($('.curriculumEApellido').val()) && validateRequiredInputE($('.curriculumENombre').val()) && validateRequiredInputE($('.curriculumEDni').val()) && validateRequiredInputE($('.curriculumEEmail').val())){
				if(validateCorrectEmailE($('.curriculumEEmail').val())){

				var myRadio = $('input[name=modalidad_contacto]');
				var checkedValue = myRadio.filter(':checked').val();

				var texto = 'Apellido y nombre: ' + $('.curriculumEApellido').val()+ ', ' + $('.curriculumENombre').val() + '.	 DNI: ' + $('.curriculumEDni').val() +  '. 			Domicilio: ' + $('.curriculumEDomicilio').val() +  '. 			Localidad: ' + $('.curriculumELocalidad').val() +  '. 			Telefono: ' + $('.curriculumETelefono').val() +  '. 			Fecha de nacimiento: ' + $('.curriculumENacimiento').val() +  '. 			Estado Civil: ' + $('.curriculumEEstadoCivil').val() + '. 			OTROS DATOS: Referencias: ' + $('.curriculumEReferencias').val() + '. 			Disponibilidad Horaria: ' + $('.curriculumEDisponibilidad').val() + '. 			Movilidad: ' + $('.curriculumEMovilidad').val() + '. 			Area o puesto para el cual se postula: ' + $('.curriculumEPuesto').val() + '. 			Remuneracion Pretendida: ' + $('.curriculumERemuneracion').val() + '. 			ESTUDIOS CURSADOS: Universitari/terciario: ' + $('.curriculumETerciario').val() + '. 			Secundario: ' + $('.curriculumESecundario').val() + '. 			Primario: ' + $('.curriculumEPrimario').val() + '. 			Conocimientos Informaticos: ' + $('.curriculumEConocimientos').val() + '. 			Cursos o seminarios realizados: ' + $('.curriculumECursos').val() + '. 			Otros Conocimientos: ' + $('.curriculumEOtrosConocimientos').val() + '. 			REFERENCIAS LABORALES: Empresa 1: ' + $('.curriculumEReferencia1').val() + '. 			Empresa 2: ' + $('.curriculumEReferencia2').val() + '. 			Empresa 3: ' + $('.curriculumEReferencia3').val() + '. 			TRABAJO ACTUAL: Puesto: ' + $('.curriculumEPuesto').val() + '. 			Sector: ' + $('.curriculumESector').val() + '. 			Empresa: ' + $('.curriculumEEmpresa').val() + '. 			Por que te interesa este trabajo: ' + $('.curriculumEInteres').val() + '. 			Como te enteraste de esta oferta: ' + $('.curriculumEComoSeEntero').val() + '. 			Como te gustaria que nos contactemos?:' + checkedValue; 
					

				var json= {
					"key": "L4mIqw7npBk53ZYDAxX71g",
			  	"message": {
		  			"subject": "Curriculum via web",
				      "text": texto,
				    	"from_email":$('.curriculumEEmail').val(),
				    	"from_name": $('.curriculumEApellido').val()+ ' ' + $('.curriculumENombre').val(),
				    "to": [
				      {
				        "email": "rrhh@goldenargentina.com",    
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
						location.href="contacto/thanks.html";
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