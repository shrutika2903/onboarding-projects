export class Project {
    id?: number;
    name?: string;
    age?: number;
    image?: string;

    constructor(initializer?: any) {
        if (!initializer) return;
        if (initializer.id) this.id = initializer.id;
        if (initializer.name) this.name = initializer.name;
        if (initializer.age) this.age = initializer.age;
        if (initializer.image) this.image = initializer.image;


    }

}
