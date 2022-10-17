//La palabra break rompe todo el ciclo
for (let index = 0; index <= 10; index++) {
    if( index %2 == 0){
            console.log(index);
            break;
    }
}

//solo romnpe elciclo que este en ejecucion en ese momento
for (let index = 0; index <= 10; index++) {
  for (let j = 0; j < 10; j++) {
    console.log(j + index);
    break;
  }    
}

inicio:
for (let index = 0; index <= 10; index++) {
   if( index%2 !== 0){
       continue;
   }else{
       console.log(index);
   }
}