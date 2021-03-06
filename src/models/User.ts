import Member from "./Member";


export default class User extends Member {
    name: string = 'User';
    constructor() {
        super();
        this.folders.create = true;
        this.folders.update = true;
        this.gems.create = true;
        this.gems.update = true;
    }
}