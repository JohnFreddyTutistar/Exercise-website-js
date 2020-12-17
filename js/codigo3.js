$(document).ready(function(){
    var v1=0;
    var v2=0;
    var v3=0;
    var v4=0;
    var v5=0;

    $('#btnVotar').click(function(){
        var prom;
        let c="";

        if(prom=$('input:radio[name=gusto]:checked').val()){
            switch (prom) {
                case 'dr':
                    v1=v1+1;
                    break;
                case 'na':
                    v2=v2+1;
                    break;
                case 'de':
                    v3=v3+1;
                    break;
                case 'to':
                    v4=v4+1;
                    break;
                case 'op':
                    v5=v5+1;
                    break;
                default:
                    break;
            }
            $("#sec1").css("width",""+(parseInt((v1/(v1+v2+v3+v4+v5))*180))+"px");
            $("#sec2").css("width",""+(parseInt((v2/(v1+v2+v3+v4+v5))*180))+"px");
            $("#sec3").css("width",""+(parseInt((v3/(v1+v2+v3+v4+v5))*180))+"px");
            $("#sec4").css("width",""+(parseInt((v4/(v1+v2+v3+v4+v5))*180))+"px");
            $("#sec5").css("width",""+(parseInt((v5/(v1+v2+v3+v4+v5))*180))+"px");
    
            $("#total").text("Total votos: "+parseInt(v1+v2+v3+v4+v5)+"");
            $("#lad1").text(" "+parseInt((v1/(v1+v2+v3+v4+v5))*100)+"%");
            $("#lad2").text(" "+parseInt((v2/(v1+v2+v3+v4+v5))*100)+"%");
            $("#lad3").text(" "+parseInt((v3/(v1+v2+v3+v4+v5))*100)+"%");
            $("#lad4").text(" "+parseInt((v4/(v1+v2+v3+v4+v5))*100)+"%");
            $("#lad5").text(" "+parseInt((v5/(v1+v2+v3+v4+v5))*100)+"%");
    
            $("#opciones").hide();
            $("#resultados").show();
        }else{
            c+="<h2 id='tex'>Debe elegir una opción para poder votar.</h2>";
            c+="<img src='img/advertencia.png' class='icono'><br>"
            c+="<input type='button' value='Ok' id='close'>"
            $("#msg").html(c);
            $("#bkg").show(1000);
            $("#msg").show(1000);
        }
        $("#close").click(function(){
        $("#bkg").hide(1000);
        $("#msg").hide(1000);
        });
        
    });
    $("#btnVolver").click(function(){
        $("#opciones").show();
        $("#resultados").hide();
    });

});