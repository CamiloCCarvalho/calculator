//price pass in SJC 2022 reference
const price = 4.50
const inps = document.querySelectorAll('.inpNumb')
inps.forEach(element => {
    element.disabled = true
    
})

// Function to More one Traveler in Count
function clickMinus(clickedId){
    let travelers = document.querySelectorAll('.inpNumb')
    const btnsMinus = [1,3,5,7,9,11,13,15,17,19]
    for(let i=0; i<btnsMinus.length; i++){
        if(travelers[i].value <= 0){
            travelers[i].value = 0
        }else if(travelers[i].value > 400){
            travelers[i] = 400
        }else if(clickedId == btnsMinus[i]){
            travelers[i].value--
        }
        switch(Number(clickedId)){
            case 1:
                document.getElementById('totPart1').innerText = Number(document.getElementById('g1').value) + Number(document.getElementById('b1').value)
                break
            case 3:
                document.getElementById('totPart1').innerText = Number(document.getElementById('g1').value) + Number(document.getElementById('b1').value)
                break
            case 5:
                document.getElementById('totPart2').innerText = Number(document.getElementById('g2').value) + Number(document.getElementById('b2').value)
                break
            case 7:
                document.getElementById('totPart2').innerText = Number(document.getElementById('g2').value) + Number(document.getElementById('b2').value)
                break
            case 9:
                document.getElementById('totPart3').innerText = Number(document.getElementById('g3').value) + Number(document.getElementById('b3').value)
                break
            case 11:
                document.getElementById('totPart3').innerText = Number(document.getElementById('g3').value) + Number(document.getElementById('b3').value)
                break
            case 13:
                document.getElementById('totPart4').innerText = Number(document.getElementById('g4').value) + Number(document.getElementById('b4').value)
                break
            case 15:
                document.getElementById('totPart4').innerText = Number(document.getElementById('g4').value) + Number(document.getElementById('b4').value)
                break
            case 17:
                document.getElementById('totPart5').innerText = Number(document.getElementById('g5').value) + Number(document.getElementById('b5').value)
                break
            case 19:
                document.getElementById('totPart5').innerText = Number(document.getElementById('g5').value) + Number(document.getElementById('b5').value)
                break
        } 
    }
    console.log(`Button Minus in ID: ${clickedId} was clicked`)
}


// Function to Less one Traveler in Count
function clickPlus(clickedId){
    let travelers = document.querySelectorAll('.inpNumb')
    const btnsPlus = [2,4,6,8,10,12,14,16,18,20]
    for(let i=0; i<btnsPlus.length; i++){
        if(travelers[i].value < 0){
            travelers[i].value = 0
        }else if(travelers[i].value > 400){
            travelers[i] = 400
        }else if(clickedId == btnsPlus[i]){
            travelers[i].value++
        }
            switch(Number(clickedId)){
            case 2:
                document.getElementById('totPart1').innerText = Number(document.getElementById('g1').value) + Number(document.getElementById('b1').value)
                break
            case 4:
                document.getElementById('totPart1').innerText = Number(document.getElementById('g1').value) + Number(document.getElementById('b1').value)
                break
            case 6:
                document.getElementById('totPart2').innerText = Number(document.getElementById('g2').value) + Number(document.getElementById('b2').value)
                break
            case 8:
                document.getElementById('totPart2').innerText = Number(document.getElementById('g2').value) + Number(document.getElementById('b2').value)
                break
            case 10:
                document.getElementById('totPart3').innerText = Number(document.getElementById('g3').value) + Number(document.getElementById('b3').value)
                break
            case 12:
                document.getElementById('totPart3').innerText = Number(document.getElementById('g3').value) + Number(document.getElementById('b3').value)
                break
            case 14:
                document.getElementById('totPart4').innerText = Number(document.getElementById('g4').value) + Number(document.getElementById('b4').value)
                break
            case 16:
                document.getElementById('totPart4').innerText = Number(document.getElementById('g4').value) + Number(document.getElementById('b4').value)
                break
            case 18:
                document.getElementById('totPart5').innerText = Number(document.getElementById('g5').value) + Number(document.getElementById('b5').value)
                break
            case 20:
                document.getElementById('totPart5').innerText = Number(document.getElementById('g5').value) + Number(document.getElementById('b5').value)
                break
            }
    }
    console.log(`Button Plus in ID: ${clickedId} was clicked`)
}
// Function calc
function calctot(){
    let totPass =
        Number(document.getElementById('totPart1').innerText) +
        Number(document.getElementById('totPart2').innerText) +
        Number(document.getElementById('totPart3').innerText) +
        Number(document.getElementById('totPart4').innerText) +
        Number(document.getElementById('totPart5').innerText) 
    const cards = Number(document.getElementById('cardNumbers').value)
    const pix = Number(document.getElementById('pixNumbers').value)
    const mid = Number(document.getElementById('mid').value)
    const driver = Number(document.getElementById('driver').value)
    const collect = Number(document.getElementById('collect').value)
    const fuel = Number(document.getElementById('fuel').value)
    const spend = Number(document.getElementById('spend').value)
    

    let realPass = (totPass-(mid/2)).toFixed(2)
    let totMoney = (realPass*price).toFixed(2)
    let accountMoney = ((cards+pix)*price).toFixed(2)
    let liquidMoney = (totMoney-accountMoney-driver-collect-fuel-spend).toFixed(2)

    document.getElementById('respass').innerText = realPass

    document.getElementById('resest').innerText = Number(mid).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

    document.getElementById('resmot').innerText = Number(driver).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

    document.getElementById('resco').innerText = Number(collect).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

    document.getElementById('resfuel').innerText = Number(fuel).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

    document.getElementById('resspend').innerText = Number(spend).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

    document.getElementById('resfull').innerText = Number(realPass*price).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

    document.getElementById('resacc').innerText = Number((cards*price)+(pix*price)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

    document.getElementById('resliq').innerText = Number(liquidMoney).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

}



