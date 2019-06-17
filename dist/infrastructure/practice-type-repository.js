"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PracticeTypeRepository {
    constructor() {
        this._practiceTypes = [];
    }
    get() {
        return this._practiceTypes;
    }
    save(practiceType) {
        this._practiceTypes.push(practiceType);
    }
}
exports.PracticeTypeRepository = PracticeTypeRepository;
//# sourceMappingURL=practice-type-repository.js.map