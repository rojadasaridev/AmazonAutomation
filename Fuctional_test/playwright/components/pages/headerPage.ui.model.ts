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

    async clickOnAddress() {
        await this.header.address.click();
    }

    async clickOnApplyButton() {
        await this.header.postcodeApplyButton.click();
    }

    async fillWithPostcode() {
        await this.header.enterPostcode.fill('LE46QT');
    }

    async clickOnLeftNav() {
        await this.header.leftNav.click();
    }
}
