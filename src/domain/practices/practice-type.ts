export class PracticeType {
    id: string;
    name: string;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }

    toString(): string {
        return this.name;
    }

}
