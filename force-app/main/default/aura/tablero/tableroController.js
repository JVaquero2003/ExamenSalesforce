({
    myAction : function(component, event, helper) {

    },
    callApex : function(component, event, helper){
        var action = component.get("c.generar");
        var numIntento = event.getParam("numero");
        var numeroAnterior = component.get("v.ultimoNumeroGenerado")
        var numeroAnterior2 = component.get("v.ultimoNumeroGenerado2")
        component.set("v.numIntento", numIntento);
        action.setParams({
            "numeroAnterior" : numeroAnterior,
            "numeroAnterior2" : numeroAnterior2
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if(state === "SUCCESS"){
                /* 
                var numero = response.getReturnValue()
                var numero2 = response.getReturnValue()
                component.set("v.numero", numero);
                component.set("v.numero2", numero2); */
                var listaNumeros = response.getReturnValue();
                component.set("v.ultimoNumeroGenerado", listaNumeros[0]);
                component.set("v.ultimoNumeroGenerado2", listaNumeros[1]);
                console.log(listaNumeros[0]);
                console.log(listaNumeros[1]);
                if(!listaNumeros[0] == listaNumeros[1]){
                    for(var i = 0; i < listaNumeros.length; i++){
                        switch (listaNumeros[i]){
                            case 1:
                                component.find("1").set("v.clase", "color");
                                component.find("2").set("v.clase", "limpia");
                                component.find("3").set("v.clase", "limpia");
                                component.find("4").set("v.clase", "limpia");
                                component.find("5").set("v.clase", "limpia");
                                component.find("6").set("v.clase", "limpia");
                                component.find("7").set("v.clase", "limpia");
                                component.find("8").set("v.clase", "limpia");
                                break;
                            case 2:
                                component.find("1").set("v.clase", "limpia");
                                component.find("2").set("v.clase", "color");
                                component.find("3").set("v.clase", "limpia");
                                component.find("4").set("v.clase", "limpia");
                                component.find("5").set("v.clase", "limpia");
                                component.find("6").set("v.clase", "limpia");
                                component.find("7").set("v.clase", "limpia");
                                component.find("8").set("v.clase", "limpia");
                                break;
                            case 3:
                                component.find("1").set("v.clase", "limpia");
                                component.find("2").set("v.clase", "limpia");
                                component.find("3").set("v.clase", "color");
                                component.find("4").set("v.clase", "limpia");
                                component.find("5").set("v.clase", "limpia");
                                component.find("6").set("v.clase", "limpia");
                                component.find("7").set("v.clase", "limpia");
                                component.find("8").set("v.clase", "limpia");
                                break;
                            case 4:
                                component.find("1").set("v.clase", "limpia");
                                component.find("2").set("v.clase", "limpia");
                                component.find("3").set("v.clase", "limpia");
                                component.find("4").set("v.clase", "color");
                                component.find("5").set("v.clase", "limpia");
                                component.find("6").set("v.clase", "limpia");
                                component.find("7").set("v.clase", "limpia");
                                component.find("8").set("v.clase", "limpia");
                                break;
                            case 5:
                                component.find("1").set("v.clase", "limpia");
                                component.find("2").set("v.clase", "limpia");
                                component.find("3").set("v.clase", "limpia");
                                component.find("4").set("v.clase", "limpia");
                                component.find("5").set("v.clase", "color");
                                component.find("6").set("v.clase", "limpia");
                                component.find("7").set("v.clase", "limpia");
                                component.find("8").set("v.clase", "limpia");
                                break;
                            case 6:
                                component.find("1").set("v.clase", "limpia");
                                component.find("2").set("v.clase", "limpia");
                                component.find("3").set("v.clase", "limpia");
                                component.find("4").set("v.clase", "limpia");
                                component.find("5").set("v.clase", "limpia");
                                component.find("6").set("v.clase", "color");
                                component.find("7").set("v.clase", "limpia");
                                component.find("8").set("v.clase", "limpia");
                                break;
                            case 7:
                                component.find("1").set("v.clase", "limpia");
                                component.find("2").set("v.clase", "limpia");
                                component.find("3").set("v.clase", "limpia");
                                component.find("4").set("v.clase", "limpia");
                                component.find("5").set("v.clase", "limpia");
                                component.find("6").set("v.clase", "limpia");
                                component.find("7").set("v.clase", "color");
                                component.find("8").set("v.clase", "limpia");
                                break;
                            case 8:
                                component.find("1").set("v.clase", "limpia");
                                component.find("2").set("v.clase", "limpia");
                                component.find("3").set("v.clase", "limpia");
                                component.find("4").set("v.clase", "limpia");
                                component.find("5").set("v.clase", "limpia");
                                component.find("6").set("v.clase", "limpia");
                                component.find("7").set("v.clase", "limpia");
                                component.find("8").set("v.clase", "color");
                                }
                        }
                }
            }
        });
        $A.enqueueAction(action);
    },
    aumentarContador : function(component, event){
        var acierto = event.getParam("sumar");
        if (acierto){
            var numScore = component.get("v.score");
            component.set("v.score", numScore+1);
        }
        else{
            alert("Fallaste, Continua Jugando con el contador a 0")
            component.set("v.score", 0);
        }
        var evento = $A.get("e.c:reloadApexMethod");
        evento.fire();
    },
    stopGame : function(component, event){
        alert("Has Finalizado tu partida");
        component.set("v.highscore",
        component.get("v.score"));

        var puntosRecogidos = component.get("v.score")
        var evento = $A.get("e.c:partidasJugadas");
        evento.setParams({"score" : puntosRecogidos});
        evento.fire();
        component.set("v.score", 0);
    },
    ejecutoDosFunciones : function(component,event, helper){
        helper.reiniciarGame(component)
        helper.callApex(component, event)
    },  
})
