export const ModuleFunc = {
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
        this.init();
    }

    params = {
        $: require("jquery/dist/jquery.slim.min"),
        minJ: require("jquery/dist/jquery.min")
    }
    init = () => {
        console.log("Start Func");
    }
    second = () => {
        console.log("Second Func");
        this.init();
    }
    three = () => {
        console.log(this.params.$("#app"));
    }
}