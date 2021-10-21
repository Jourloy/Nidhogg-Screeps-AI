/**
 * Starter creep
 */

export class worker {
    private static setMemory(creep: Creep): void {
        if (creep.memory.state != null) {
            creep.memory.state = {
                empty: true,
                busy: false,
            };
        }
    }

    public static run(creep: Creep): void {

    }
}