import Custom from "./Custom";

export default class Member extends Custom{
    editable = false;
    name: string = 'Member';

    constructor() {
        super();
        this.folders.view = true;
        this.folders.share = true;
        this.gems.view = true;
        this.gems.share = true;
    }
}