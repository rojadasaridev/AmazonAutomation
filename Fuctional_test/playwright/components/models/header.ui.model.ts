import { Locator, Page } from '@playwright/test';

export class Header{
    static readonly ACCEPT_COOKIES = '[id="sp-cc-accept"]';
    static readonly AMAZON_LOGO = '[id="nav-logo-sprites"]';
    static readonly ADDRESS = '[id="nav-global-location-popover-link"]';
    static readonly ENTER_POSTCODE = '[id="GLUXZipUpdateInput"]';
    static readonly POSTCODE_APPLY_BUTTON = '[id="GLUXZipUpdate"]';
    static readonly LEFT_NAV = '[id="nav-search-dropdown-card"]';

    readonly acceptCookies: Locator;
    readonly amazonLogo: Locator;
    readonly address: Locator;
    readonly enterPostcode: Locator;
    readonly postcodeApplyButton: Locator;
    readonly leftNav: Locator;

    constructor(page: Page){
        this.acceptCookies = page.locator(Header.ACCEPT_COOKIES);
        this.amazonLogo = page.locator(Header.AMAZON_LOGO);
        this.address = page.locator(Header.ADDRESS);
        this.enterPostcode = page.locator(Header.ENTER_POSTCODE);
        this.postcodeApplyButton = page.locator(Header.POSTCODE_APPLY_BUTTON);
        this.leftNav = page.locator(Header.LEFT_NAV);
    }

}