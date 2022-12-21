import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {ChainDialogComponent} from '../chain-dialog/chain-dialog.component';
import {Chain} from '../../../models/Chain';
import {filter, tap} from 'rxjs/operators';


@Component({
  selector: 'app-chains-card-list',
  templateUrl: './chains-card-list.component.html',
  styleUrls: ['./chains-card-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ChainsCardListComponent implements OnInit {
  @Input() chains: Chain[]  ;
   
  @Output() chainsChanged = new EventEmitter();

  constructor(private dialog:MatDialog ) { }

  ngOnInit(): void {
  }

  editChain(chain: Chain) {
    console.log(chain);
    
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = chain;
    dialogConfig.width = '400px';

    const dialogRef = this.dialog.open(ChainDialogComponent, dialogConfig);

    dialogRef.afterClosed()
    .pipe(
      filter(chain => !!chain),
      tap(chain => console.log(chain)),
      tap(() => this.chainsChanged.emit())
    )
    .subscribe();
  }
}
