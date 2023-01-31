
export default class AjaxHook {
    hookedSuccess: boolean = false;
    successHooks: SuccessCallback[] = [];

    addSuccessCallback(callback: SuccessCallback) {
        if (!this.hookedSuccess) {
            this.hookAjaxSuccess();
        }

        this.successHooks.push(callback);
    }

    removeSuccessCallback(callback: SuccessCallback) {
        const index = this.successHooks.indexOf(callback);
        if (index > -1) {
            this.successHooks.splice(index, 1);
        }
    }

    hookAjaxSuccess() {
        $(document).ajaxSuccess((event, jqXHR, ajaxOptions, data) => {
            const url = ajaxOptions.url;
            if (!url) return;

            this.successHooks.map(v => v(url, data));
        })
    }
}

interface SuccessCallback {
    (url: string, data: JQuery.PlainObject): void
}