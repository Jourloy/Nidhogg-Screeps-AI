export class cnsl {
    public static log(text: string): void {
        console.log(`<p style="color: grey">[LOG] ${text}</p>`)
    }

    public static warn(text: string): void {
        console.log(`<p style="color: orange">[WARN] ${text}</p>`)
    }

    public static err(text: string): void {
        console.log(`<p style="color: red">[ERR] ${text}</p>`)
    }
}