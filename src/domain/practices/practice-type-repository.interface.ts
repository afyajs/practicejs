import { PracticeType } from './practice-type';

export interface IPracticeTypeRepository {
    get(): PracticeType[];

    save(practiceType: PracticeType): void;
}
