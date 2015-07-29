 $(document).ready(function() {

 	$('#c_stage-wrap1').click(function(){
 		$('.c_stage-wrap1').addClass('active');
 		$('.c_stage-wrap-start').removeClass('active');
 		$('.c_stage-wrap-start').empty();
 	});


 	$('#c_stage-wrap2').click(function(){
 		$('.c_stage-wrap2').addClass('active');
 		$('.c_stage-wrap1').removeClass('active');
 		$('.c_stage-wrap1').empty();
 	});
 	$('#c_stage-wrap3').click(function(){
 		$('.c_stage-wrap3').addClass('active');
 		$('.c_stage-wrap2').removeClass('active');
 		$('.c_stage-wrap2').empty();
 	});
 	$('#c_stage-wrap4').click(function(){
 		$('.c_stage-wrap4').addClass('active');
 		$('.c_stage-wrap3').removeClass('active');
 		$('.c_stage-wrap3').empty();
 	});
 	$('#c_stage-wrap5').click(function(){
 		$('.c_stage-wrap5').addClass('active');
 		$('.c_stage-wrap4').removeClass('active');
 		$('.c_stage-wrap4').empty();
 	});
 	$('#c_stage-wrap6').click(function(){
 		$('.c_stage-wrap6').addClass('active');
 		$('.c_stage-wrap5').removeClass('active');
 		$('.c_stage-wrap5').empty();
 	});
 	$('#c_stage-wrap7').click(function(){
 		$('.c_stage-wrap7').addClass('active');
 		$('.c_stage-wrap6').removeClass('active');
 		$('.c_stage-wrap6').empty();
 	});
 	
 });


