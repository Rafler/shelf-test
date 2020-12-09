interface accessModel {
    create: boolean,
    update: boolean,
    move: boolean,
    delete: boolean,
    view: boolean,
    share: boolean
}

export default class Custom {
    folders: accessModel = {
        create: false,
        update: false,
        move: false,
        delete: false,
        view: false,
        share: false
    }

    gems: accessModel ={
        create: false,
        update: false,
        move: false,
        delete: false,
        view: false,
        share: false
    }
}