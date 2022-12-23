import { expect, Page } from "@playwright/test";
import { Header } from "../models/header.ui.model";

export class HeaderPage {
    readonly header: Header;

    constructor(page: Page) {
        this.header = new Header(page);
    }

    async verifyAmazonLogo() {
        await this.header.amazonLogo.isVisible();
        await expect(this.header.amazonLogo).toBeTruthy();
    }

    async clickOnAcceptCookies() {
        await this.header.acceptCookies.click();
    }
}
