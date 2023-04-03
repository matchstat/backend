"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rounds1645478318882 = void 0;
class rounds1645478318882 {
    async up(queryRunner) {
        await queryRunner.manager
            .createQueryBuilder('Round', 'round')
            .insert()
            .into('Round')
            .values([
            { id: 6, name: 'Third' },
            { id: 9, name: '1/4' },
            { id: 7, name: 'Fourth' },
            { id: 14, name: 'Rubber 2' },
            { id: 13, name: 'Rubber 1' },
            { id: 11, name: 'Bronze' },
            { id: 0, name: 'Pre-q' },
            { id: 16, name: 'Rubber 4' },
            { id: 10, name: '1/2' },
            { id: 15, name: 'Rubber 3' },
            { id: 3, name: 'Qualifying' },
            { id: 20, name: 'N/A' },
            { id: 12, name: 'Final' },
            { id: 2, name: 'q-Second' },
            { id: 5, name: 'Second' },
            { id: 1, name: 'q-First' },
            { id: 8, name: 'Robin' },
            { id: 4, name: 'First' },
            { id: 17, name: 'Rubber 5' },
        ])
            .execute();
    }
    async down(queryRunner) {
    }
}
exports.rounds1645478318882 = rounds1645478318882;
//# sourceMappingURL=1645478318882-rounds.js.map