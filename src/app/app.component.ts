import { Component } from '@angular/core';
import { AppData } from './AppData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pretest-section2-question2';
  data = new AppData('isPrime', '12', 'false');

  onChangeSelectedOperation(newValue: string) {
    this.data.selectedOperation = newValue;
    this.callOperation();
  }

  onChangeInputNumber(newNumber: string) {
    var number = Math.round(parseFloat(newNumber));
    if (isNaN(number)) {
      this.data.inputNumber = '0';
    } else if (number < 0) {
      this.data.inputNumber = '1';
    } else {
      this.data.inputNumber = number.toString();
    }

    this.callOperation();
  }

  callOperation() {
    if (this.data.selectedOperation === 'isPrime') {
      this.isPrime();
    } else {
      this.isFibonacci();
    }
  }

  isPrime() {
    var flag: boolean = false;
    var number = parseInt(this.data.inputNumber);

    if (number > 1) {
      for (var i = 2; i < number; i++) {
        if ((number % i) === 0) {
          flag = true;
          break;
        }
      }
    }

    if (flag) {
      this.data.answer = "false"
    } else {
      this.data.answer = "true"
    }
  }

  isFibonacci() {
    var flag: boolean = false;
    var number = parseInt(this.data.inputNumber);

    var a = 0;
    var b = 1;
    if (number === a || number === b) {
      flag = true;
    } 

    var c = a+b;
    while(c <= number){
      if (c === number) {
        flag = true;
      }
      a = b;
      b = c;
      c = a + b;
    }

    if (flag) {
      this.data.answer = "true"
    } else {
      this.data.answer = "false"
    }
  }
}
