import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogConfig, MatDialog } from '@angular/material/dialog';     
import {Address} from '../../../models/Address';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataStorageService } from 'cryptomaven-ui/src/app/services/data-storage.service'; 
import { LoaderService } from '../../layout/loader/loader.service';  
import { Observable } from 'rxjs'; 
import { Coin } from 'src/app/models/Coin';


@Component({
  selector: 'app-nft-dialog',
  templateUrl: './nft-dialog.component.html',
  styleUrls: ['./nft-dialog.component.scss'],
  providers: [LoaderService] 
})
export class NftDialogComponent implements OnInit {
  form: FormGroup;
  address: Address;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<NftDialogComponent>,
    @Inject(MAT_DIALOG_DATA) address: Address,
    private data: DataStorageService

  ) { 
    this.address = address;
    this.form = this.formBuilder.group({
      name: [address.id, Validators.required],
      owner: [address.owner, Validators.required],
      address: [address.address, Validators.required],
      chain: [address.chain, Validators.required]
  });
  }
  save() {
    const changes = this.form.value;
    this.data.editPersistedAddress(this.address.id, changes).subscribe();
  }

  close() {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }
}

export function openEditNftRefDialog(dialog: MatDialog, nft:Coin): Observable<any> {

  const config = new MatDialogConfig();

  config.disableClose = true;
  config.autoFocus = true;
  config.panelClass = "modal-panel";
  config.backdropClass = "backdrop-modal-panel";

  config.data = {
      ...nft
  };

  const dialogRef = dialog.open(NftDialogComponent, config);

  return dialogRef.afterClosed();
}

