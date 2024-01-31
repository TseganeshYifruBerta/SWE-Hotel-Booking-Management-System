const total_bill = document.getElementById("bill")
const TipP = document.getElementById("tip")
const pbtns = document.getElementById("+btn")
const mbtn = document.getElementById("-btn")
const num = document.getElementById("number")
const youpay =document.getElementById("totalPerPerson")

let  numOfPpl = Number(num.innerText)
const calculateBill = () =>{
    const bilT = Number(total_bill.value)
    let tipT = Number(TipP.value)/100
    const tipAmount = tipT * bilT
    const Tot_Bill = bilT + tipAmount
    const TotalPerPerson = Tot_Bill / numOfPpl;
 	  youpay.innerText = `$${TotalPerPerson.toFixed("2")}`
         }




const IncreasePeople = () => {
	 numOfPpl +=1
  num.innerText=  numOfPpl
  calculateBill()
}

const DecreasePpl = () =>{
	
    if( numOfPpl <= 1){
             return
    }  
    numOfPpl -=1
  num.innerText=  numOfPpl
  calculateBill()
  
  }
 