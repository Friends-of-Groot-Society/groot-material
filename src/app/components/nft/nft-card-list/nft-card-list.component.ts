import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {filter, tap} from 'rxjs/operators';

import {NftDialogComponent} from '../nft-dialog/nft-dialog.component';
import {NftRef} from '../../../models/NftRef';


@Component({
  selector: 'app-nft-card-list',
  templateUrl: './nft-card-list.component.html', 
  changeDetection: ChangeDetectionStrategy.OnPush // less greedy/requires 
})
export class NftCardListComponent implements OnInit {
  @Input() nftRefs: NftRef[]  ;
   
  @Output() 
  private nftChanged = new EventEmitter();

  constructor(private dialog:MatDialog ) { }

  ngOnInit() {
  }

  editNftRef(nftRef: NftRef) {
    console.log(nftRef);
    
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = nftRef;
    dialogConfig.width = '400px';

    const dialogRef = this.dialog.open(NftDialogComponent, dialogConfig);

    dialogRef.afterClosed()
    .pipe(
      filter(nftRef => !!nftRef),
      tap(nftRef => console.log(nftRef)),
      tap(() => this.nftChanged.emit())
    )
    .subscribe();
  }

}
