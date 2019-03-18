import { Component, OnInit } from '@angular/core';

@Component({
selector: 'app-timer2',
templateUrl: './timer2.component.html',
styleUrls: ['./timer2.component.css']
})
export class Timer2Component implements OnInit {

userNames = ["user1", "user2", "user3", "user4"];

constructor() { }

ngOnInit() {
}

d = new Date();

entry(event)
{
console.log(event);
alert("Entry time" + this.d);
}
exit(event)
{
console.log(event);
alert("Exit time "+this.d);
}
Delete(event)
{
console.log(event);
alert("Total time "+this.d);

}

} 