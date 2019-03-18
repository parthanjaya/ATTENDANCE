import { Component, OnInit } from '@angular/core';
@Component({
selector: 'app-timer',
templateUrl: './timer.component.html',
styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
formdata;
Id:String []=[];
Name:String []=[];
userArray=[];
constructor() { }
ngOnInit() {
}
onClickSubmit(formdata){
alert("inside"+JSON.stringify(formdata))
console.log("Employee Id"+formdata.Id+" Employee Name"+formdata.Name);

this.userArray.push(formdata);
alert("this.userArray--"+JSON.stringify(this.userArray))
this.Id.push(formdata.Id);
this.Name.push(formdata.Name);
console.log("below is the emply list");
for(var i=0 ;i<this.Id.length;i++){
console.log(this.Id[i]+""+this.Name[i]);
document.getElementById("data").innerHTML="Hi"+formdata.Id+"you have been successfully added one" ;
}
}
} 