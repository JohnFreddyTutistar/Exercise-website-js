$(document).ready(function(){
    $("#btnCal").click(function(){
        var operacion;
        let c="";

        var val1=parseFloat($('#num1').val());
        var val2=parseFloat($('#num2').val());
        var val3=parseFloat($('#num3').val());
        var val4=parseFloat($('#num4').val());
        
            if(($('#num1').val()=="") || ($('#num2').val()=="") || ($('#num3').val()=="") || ($('#num4').val()=="")){
                c+="<h1 id='tex'>Todas las casillas deben tener valores.</h1>";
                c+="<img src='img/advertencia.png' class='icono'><br>"
                c+="<input type='button' value='Ok' id='close'>"
                $("#msg").html(c);
                $("#bkg").show(1000);
                $("#msg").show(1000);
                
             }
             else{
                if(($('#num4').val()==0)){
                    c+="<h1 id='tex'>Error: división entre cero.</h1>";
                    c+="<img src='img/error.png' class='icono'><br>"
                    c+="<input type='button' value='Ok' id='close2'>"
                    $("#msg").html(c);
                    $("#bkg").show(1000);
                    $("#msg").show(1000);
                 }else{

                    $('#display').val(val1+val2+val3);
                    if(operacion = $('#display').val((val1+val2+val3)/val4)){
                        c+="<h1 id='tex'>Semiperímetro encontrado con éxito.</h1>";
                        c+="<img src='img/information.png' class='icono'><br>"
                        c+="<input type='button' value='Ok' id='close3'>"
                        $("#msg").html(c);
                        $("#bkg").show(1000);
                        $("#msg").show(1000);
            
                        $("#close3").click(function(){
                            $("#bkg").hide(1000);
                            $("#msg").hide(1000);
                        });  
                     }
                 }
             }
             
            $("#close").click(function(){
                $("#bkg").hide(1000);
                $("#msg").hide(1000);
            });
            $("#close2").click(function(){
                $("#bkg").hide(1000);
                $("#msg").hide(1000);
            });
    });
    
    $('#btnRes').click(function(){
        
        let b="";

        if($('#display2').val()==""){
            b+="<h1 id='tex'>Todas las casillas deben tener valores.</h1>";
            b+="<img src='img/advertencia.png' class='icono'><br>"
            b+="<input type='button' value='Ok' id='close'>"
            $("#msg").html(b);
            $("#bkg").show(1000);
            $("#msg").show(1000);
        }

        $("#close").click(function(){
            $("#bkg").hide(1000);
            $("#msg").hide(1000);
            
        });
    });
    
});