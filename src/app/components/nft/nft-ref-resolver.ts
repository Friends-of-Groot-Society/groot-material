


import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {NftRef} from "../../models/NftRef";
import {Observable} from "rxjs";
import {NftsService} from "./nfts.service";


@Injectable()
export class NftRefResolver implements Resolve<NftRef> {

    constructor(private nftsService:NftsService) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<NftRef> {
        return this.nftsService.findNftRefByName(route.params['name']);
    }

}

