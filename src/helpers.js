export function cantidadTotal(cantidad, plazo){

    //cantidades
    // 0-1000 = 25%
    // 1001-1000 = 20%
    // 5001-10000 = 15%
    // >=10001 = 10%

    let totalCantidad;
    let totalPlazo;

    if(cantidad <= 1000){
        totalCantidad = cantidad * 0.25;
    }else if (cantidad <= 5000) {
        totalCantidad = cantidad *0.20;
    }else if (cantidad <= 10000) {
        totalCantidad = cantidad *0.15;
    }else{
        totalCantidad = cantidad *0.10;
    }
 
    switch (plazo) {
        case 3:
            totalPlazo = cantidad * .05;        
            break;
        case 6:
                
            totalPlazo = cantidad * .10;        
            break;
        case 12:
                    
            totalPlazo = cantidad * .15;        
            break;
        case 24:
                        
            totalPlazo = cantidad * .20;        
            break;
        default:
            break;
    }

    return totalCantidad+totalPlazo+cantidad; 
}