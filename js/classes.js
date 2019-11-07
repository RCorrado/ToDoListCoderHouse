class Task {
    constructor(code, name, desc){
        this.code = code;
        this.name = name;
        this.desc = desc
    }

    getCode() {
        return this.code;
    }

    getName() {
        return this.name;
    }

    getDesc() {
        return this.desc;
    }

    setCode(newCode) {
        this.code = newCode;
    }

    setName(newName) {
        this.name = newName;
    }

    setDesc(newDesc) {
        this.desc = newDesc;
    }
}

export { Task }
