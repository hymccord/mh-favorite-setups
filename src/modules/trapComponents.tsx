import AjaxHook from "../util/ajaxHook";

export class TrapComponentsModule {
    hooker: AjaxHook;

    constructor() {
        this.hooker = new AjaxHook();
        this.hooker.addSuccessCallback(this.onUrlSuccess);
    }

    onUrlSuccess(url: string, data: JQuery.PlainObject) {
            
    }

    private isGetTrapsUrl(url: string): boolean {
        return url === "https://www.mousehuntgame.com/managers/ajax/users/gettrapcomponents.php";
    }
}