import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  value1:string
  value2:string
  result:number=0
  operator:string=" "

  constructor() { }

  ngOnInit() {
  }

  add(){
    this.result= parseInt(this.value1)+parseInt(this.value2)
  
  }
  sub(){
    this.result=parseInt(this.value1)-parseInt(this.value2)
  }
  mul(){
    this.result=parseInt(this.value1)*parseInt(this.value2)
  }
  div(){
    this.result=parseInt(this.value1)/parseInt(this.value2)

  }
    setOperator(optr){
      this.operator=optr
      console.log("add")
      console.log(this.operator)

    }
 
  calculate(){

    if (this.value1!="" && this.value2!="" )
    {   
       if(this.operator=='+')
    {
    this.add()
  }
}
}
   setvalue(num)
   {
     console.log(num)
     if (this.operator==" ")
     {
      this.value1=num
      console.log(this.value1)
    }
      else 
      {this.value2=num
   }
  }
  

}
