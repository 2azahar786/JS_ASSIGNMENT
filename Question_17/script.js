function findMonth(Month){
    switch(Month){
        case 1:
            case 3:
                case 5:
                    case 7:
                        case 8:
                            case 10:
                                case 12:
                                    console.log("No f Days is : 31 days");
                                    break;

                                    case 4:
                                        case 6:
                                            case 9:
                                                case 11:
                                                    console.log("No f Days is : 30 days");
                                                    break;
                                                    
                                                    case 2:
                                                        console.log("No f Days is : 28/29 days");
                                                        break;

                                                        default:
                                                            console.log("Invalid Month");
                                                            break;
    }
}

let Month = 2;
console.log("No of Days In the Month :" + Month);
findMonth(Month);