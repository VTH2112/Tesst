let btn = document.getElementById("btn");
let input = document.getElementById("input");
let luckyNumber = 0;
let btnCount = 0;

findOppositeNumber(17,10);


btn.addEventListener('click',() => {
    btnCount += 1;
    luckyNumber = Math.floor(Math.random() * 10)+1;
    if(input.value < 1 || input.value >10){
        alert("bạn phải nhập số tù 1 đén 10 ")
    }
    else{
        if(input.value  == luckyNumber){
                    alert(`Ban da trung thuong con so may man cua ban la ${input.value}`)
        }
        else{
            alert(`Chuc ban may man lan sau ! Hay nhap lai , So  may man la ${luckyNumber}`)
        }
    }
    if(btnCount >2){
        alert('Ban da het luot quay')
    }

})

function  findOppositeNumber(n , inputNumber) {
            let i = 0 ;
            let soChan = 0;
            let soLe = 0;
            while (i < n){         
                if(i % 2 == 0){
                     soChan = i ;
                }else{
                     soLe = i ;
                }
                if(inputNumber == soChan){
                    if(soChan <=4){
                    soLe  = inputNumber +5;
                    console.log(`so doi dien cua ${inputNumber} la : ${soLe}`);}
                    else{
                        soLe  = inputNumber -5;
                        console.log(`so doi dien cua ${inputNumber} la : ${soLe}`);
                    }
                }
                if(inputNumber == soLe){
                    if(soLe <= 3){
                    soChan = inputNumber + 5;
                    console.log(`so doi dien cua ${inputNumber} la : ${soChan}`);}
                    else{
                        soChan = inputNumber - 5;
                        console.log(`so doi dien cua ${inputNumber} la : ${soChan}`);
                    }
                }
                i++;
            }           
}

merge2String('abc','123')

function merge2String(s1,s2) {
let newString = '';
    for(let i = 0 ; i < s1.length ; i++){
        newString +=s1[i] +s2[i];
    }
    console.log(newString);
}
