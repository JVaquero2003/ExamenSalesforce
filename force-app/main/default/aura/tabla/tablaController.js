({
    myAction : function(component, event, helper) {

    },
    numeroPartidas : function(component, event, helper){
        // recuperamos el evento saveLead
        var score = $A.get("e.c:partidasJugadas")
        var acierto = event.getParam("sumar");
        if (acierto){
            var numScore = component.get("v.score");
            component.set("v.score", numScore+1);
        }
        else{
            alert("GameOver")
            component.set("v.score", 0);
        }
        var evento = $A.get("e.c:reloadApexMethod");
        evento.fire();
    }
})
