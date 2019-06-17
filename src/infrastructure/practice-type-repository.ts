import { IPracticeTypeRepository } from '../domain/practices/practice-type-repository.interface';
import { PracticeType } from '../domain/practices/practice-type';

export class PracticeTypeRepository implements IPracticeTypeRepository {

    private _practiceTypes: PracticeType[] = [];

    get(): PracticeType[] {
        return this._practiceTypes;
    }

    save(practiceType: PracticeType): void {
        this._practiceTypes.push(practiceType);
    }

}
