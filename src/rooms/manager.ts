import { cnsl } from "tools/console";

export class roomManager {
    private static addRoomInMemory(name: string) {
        Memory.rooms[name] = {
            downgrade: false,
        }
    }

    private static roomLogic(room: Room) {
        if (Memory.rooms[room.name] == null) this.addRoomInMemory(room.name);

        const controller = room.controller;

        let downgradeMax = 0;
        if (controller?.level === 1) downgradeMax = 20000;
        else if (controller?.level === 2) downgradeMax = 10000;
        else if (controller?.level === 3) downgradeMax = 20000;
        else if (controller?.level === 4) downgradeMax = 40000;
        else if (controller?.level === 5) downgradeMax = 80000;
        else if (controller?.level === 6) downgradeMax = 120000;
        else if (controller?.level === 7) downgradeMax = 150000;
        else if (controller?.level === 8) downgradeMax = 200000;

        const downgrade = Math.floor(room.controller!.ticksToDowngrade / downgradeMax * 100);

        if (downgrade < 30 && controller!.level > 1) Memory.rooms[room.name].downgrade = true;
    }

    public static getRoomControlLevel(room: string) {
        return Game.rooms[room].controller?.level;
    }

    public static getMyActiveRooms() {
        const allRooms = Game.rooms;
        let myRooms: Room[] = [];
        for (let i in allRooms) {
            if (allRooms[i].controller != null && allRooms[i].controller?.my === true && allRooms[i].controller?.level != undefined) myRooms.push(allRooms[i]);
        }
        return myRooms;
    }

    public static checkAllRooms() {
        const myRooms = this.getMyActiveRooms();
        
        for (let i in myRooms) {
            const roomCpu = Game.cpu.getUsed();
            this.roomLogic(myRooms[i]);
            if (Game.cpu.getUsed() - roomCpu < 3) cnsl.warn(`Room ${myRooms[i].name} use less than 3 cpu`);
            else if (Game.cpu.getUsed() - roomCpu > 5) cnsl.warn(`Room ${myRooms[i].name} use more than 5 cpu`);
        }
    }
}