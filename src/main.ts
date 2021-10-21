import "./prototypes/creeps";

import { memoryManager } from "prototypes/memory";
import { roomManager } from "rooms/manager";
import { cnsl } from "./tools/console";

export const loop = () => {
    memoryManager.run();
    roomManager.checkAllRooms();
};