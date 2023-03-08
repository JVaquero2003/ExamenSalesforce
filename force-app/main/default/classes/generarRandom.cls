public with sharing class generarRandom {

    public generarRandom() {

    }

    @AuraEnabled
    public static Integer generar(Integer numeroAnterior){
        try {
            Integer nuevoNumero;
            do {
                nuevoNumero = Math.mod(Math.abs(Crypto.getRandomInteger()), 4) + 1;
            } while (nuevoNumero == numeroAnterior);
            numeroAnterior = nuevoNumero;
            return nuevoNumero;

        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
