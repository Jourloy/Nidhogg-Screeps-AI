import _ from "lodash";

export class tools {
    /**
     * Generate random string
     * @param length 
     */
    private static randomString(length: number = 10): string {
        const symbols = `abcdefghijk123456`;
        let str = '';
        for (let i = 0; i < length; i++) str += symbols[_.random(symbols.length-1)];
        return str;
    }

    /**
     * Generate unic name for creep
     * @param role 
     */
    public static generateName(role: string): string {
        return `${role} | ${this.randomString(5)} | ${this.randomString(3)}`;
    }
}