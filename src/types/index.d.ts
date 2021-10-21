/* <----------- GENERAL -----------> */

interface Console {
    _err: (text: string) => void;
    _warn: (text: string) => void;
    _log: (text: string) => void;
}

/* <----------- SCREEPS -----------> */

interface Creep {
    _say: (text: string, bool: boolean) => void;
}

interface CreepMemory {
    state?: {
        empty: boolean,
        busy: boolean,
    }
}

interface Memory {
    rooms: {
        string: {
            downgrade: boolean;
        }
    }
}