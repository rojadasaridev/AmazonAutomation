import { Locator, Page } from '@playwright/test';

export class Header{
    static readonly ACCEPT_COOKIES = '[id="sp-cc-accept"]';
    static readonly AMAZON_LOGO = '[id="nav-logo-sprites"]';
    static readonly ADDRESS = '[id="nav-global-location-popover-link"]';

    readonly acceptCookies: Locator;
    readonly amazonLogo: Locator;
    readonly address: Locator;

    constructor(page: Page){
        this.acceptCookies = page.locator(Header.ACCEPT_COOKIES);
        this.amazonLogo = page.locator(Header.AMAZON_LOGO);
        this.address = page.locator(Header.ADDRESS);
    }

}