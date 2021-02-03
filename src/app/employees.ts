export class Employees {
    id: string;
    user_id: string;
    name:string;
    discipline:string;
    level:string;
    rating:string;
    lasttraining:string;

    constructor(id,user_id,name,discipline,level,rating,lasttraining){
        this.id=id;
        this.user_id=user_id;
        this.name=name;
        this.discipline=discipline;
        this.level=level;
        this.rating=rating;
        this.lasttraining=lasttraining;
    }
}
