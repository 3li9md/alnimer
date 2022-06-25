export class Service {

    title = "";
    text = "";
    icon = "";
    link = "";

    constructor(title: string, text: string, icon: string, link: string) {
        this.title = title;
        this.icon = icon;
        this.text = text;
        this.link = link;

    }
}