function my_spaceship(text){
    let x = 0;
    let y = 0;
    let side = 'up';
    let list_side = ['up','right','down','left']
    for (i in text){
    el = text[i]
    if (el == "R"){
    index = list_side.indexOf(side) + 1;
    if (index < list_side.length && index > -1){
    side = list_side[index]
    }else{
    index = 0;
    side = list_side[index];
    }
    }else if (el == "L"){
    index = list_side.indexOf(side) - 1
    if (index < list_side.length && index > -1){
    side = list_side[index]
    } else {
    index =3 ;
    side = list_side[index]
    }
    }else if (el == "A"){
    if (side == 'up') y--
    else if (side == 'down') y++
    else if (side == 'left') x--
    else if (side == 'right') x++
    }
    }
    return "{x: " + x + ", y: " + y + ", direction: '" + side + "'}";
     }