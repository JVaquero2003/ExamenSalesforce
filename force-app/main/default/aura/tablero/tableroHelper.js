({
    helperMethod : function() {

    },
    reiniciarGame : function(component, event, helper){
        component.set("v.score", 0);
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
                if (listaNumeros && listaNumeros.length >= 2) {
                    component.set("v.ultimoNumeroGenerado", listaNumeros[0]);
                    component.set("v.ultimoNumeroGenerado2", listaNumeros[1]);
                    console.log(listaNumeros[0]);
                    console.log(listaNumeros[1]);
                } else {
                    console.error("Error: la respuesta del servidor no contiene una lista válida de números.");
                }
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
        });
        $A.enqueueAction(action);
    },
})
