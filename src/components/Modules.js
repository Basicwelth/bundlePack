export const ModuleObject = {
    myParam: "TEST!",
    init: function () {
        console.log("Start Func");
    },
    second: function () {
        console.log("Second Func");
        this.init();
    },
    three: function () {
        console.log(this.myParam);
    }
}

export class ModuleClass {
    constructor() {
        console.log("Call Constructor");
        if (this.hasOwnProperty('init')) {
            this.init();
        }
    }

    params = {
        one: "First parameter",
        two: `Second parameter`
    }

    init() {
        window.console.log("Start Func");
    }

    second() {
        window.console.log("Second Func");
        this.init();
    }

    three() {
        window.console.log(this.params.two);
    }
}

export class NewModule extends ModuleClass {
    constructor() {
        super();
        if (this.hasOwnProperty('init')) {
            this.init();
        }
        window.console.log("Call NewModule");
    }

    params = {
        $1: "TEST"
    }

    init() {
        super.init();
        window.console.log("New Func");
    }
}

export function FuncModule() {
    console.log($("#app"))
}