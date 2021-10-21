export class memoryManager {
    private static set() {
        Memory.rooms = {};
    }

    public static run() {
        for (const name in Memory.creeps) {
            if (!(name in Game.creeps)) {
                delete Memory.creeps[name];
            }
        }
        this.set();
    }
}