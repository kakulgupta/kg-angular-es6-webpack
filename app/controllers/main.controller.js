import "../styles/index.scss";

export default class MainCtrl {
  constructor() {
    this.testVar = 'main controller';
  }

  test() {
    let vm = this;
    console.log('Main Controller test: ',vm.testVar);
  }

}
