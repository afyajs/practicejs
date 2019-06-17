import { IPracticeTypeRepository } from '../../src/domain/practices/practice-type-repository.interface';
import { PracticeTypeRepository } from '../../src/infrastructure/practice-type-repository';

const repository: IPracticeTypeRepository = new PracticeTypeRepository();

test('get practice-types', () => {
    const practiceTypes = repository.get();
    expect(practiceTypes.length).toBeGreaterThan(0);
});

test('save practice-type', () => {
    const newPracticeType = {id: 'test', name: 'test'};
    repository.save({id: 'test', name: 'test'});
    const savedPracticeType = repository.get().find(xx => xx.id === newPracticeType.id);
    expect(savedPracticeType).toBeDefined();
});
