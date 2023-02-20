

function findSeason(M){

    switch(M){
        case 12 :
        case 1 :
        case 2 :
            console.log("Season : Winter");
            break;
            case 3 :
            case 4 :
            case 5 :
                console.log("Season : Spring") ;
                break;
                case 6 :
                case 7 :
                case 8 :
                    console.log("Season : Summer");
                case 9 :
                case 10 :
                case 11 :
                    console.log("Season : Autmn");
                    break;
                     
                    default:
                        console.log("Invalid Month");
                    break;
    } 
}


// driver code
let M = 12;
console.log("For Month Number :" + M);
findSeason(M);
