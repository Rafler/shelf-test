import User from "./User";

export default class Admin extends User{
    name: string = 'Admin';
    constructor() {
        super();
        this.folders.move = true;
        this.folders.delete = true;
        this.gems.move = true;
        this.gems.delete = true;
    }
}