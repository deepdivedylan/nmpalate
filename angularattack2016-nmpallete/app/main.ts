import {bootstrap} from "@angular/platform-browser-dynamic";
import {HTTP_PROVIDERS} from "@angular/http";
import {ROUTER_PROVIDERS} from "@angular/router";
import {NmPallete} from "./app.component";

bootstrap(NmPallete, [HTTP_PROVIDERS, ROUTER_PROVIDERS]);
