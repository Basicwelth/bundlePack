export const ModuleObject = {
    $: require("jquery/dist/jquery.slim.min"),
    init: function () {
        console.log("Start Func");
    },
    second: function () {
        console.log("Second Func");
        this.init();
    },
    three: function () {
        console.log(this.$("#app"));
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
        $: require("jquery/dist/jquery.slim.min"),
        minJ: require("jquery/dist/jquery.min")
    }

    init() {
        window.console.log("Start Func");
    }

    second() {
        window.console.log("Second Func");
        this.init();
    }

    three() {
        window.console.log(this.params.$("#app"));
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
    const $ = require("jquery/dist/jquery")
    console.log($("#app"))
}