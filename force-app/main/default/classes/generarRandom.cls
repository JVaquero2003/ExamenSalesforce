public with sharing class generarRandom {

    public generarRandom() {

    }

    @AuraEnabled
    public static List<Integer> generar(Integer numeroAnterior, Integer numeroAnterior2){
        try {
            Integer nuevoNumero2;
            Integer nuevoNumero;
            List<Integer> listaNumeros = new List<Integer>();
            do {
                nuevoNumero = Math.mod(Math.abs(Crypto.getRandomInteger()), 8) + 1;
                nuevoNumero2 = Math.mod(Math.abs(Crypto.getRandomInteger()), 8) + 1;
            } while (nuevoNumero == numeroAnterior && nuevoNumero == numeroAnterior2 && nuevoNumero2 == numeroAnterior && nuevoNumero2 == numeroAnterior2 );
            numeroAnterior = nuevoNumero;
            numeroAnterior2 = nuevoNumero2;
            listaNumeros.add(nuevoNumero);
            listaNumeros.add(nuevoNumero2);
            return listaNumeros;

        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
