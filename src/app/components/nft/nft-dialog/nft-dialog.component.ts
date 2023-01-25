import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogConfig, MatDialog } from '@angular/material/dialog';     
import {NftRef} from '../../../models/NftRef';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataStorageService } from 'src/app/services/data-storage.service'; 
import { LoaderService } from '../../layout/loader/loader.service';  
import { Observable } from 'rxjs'; 
import { Nft } from 'src/app/models/Nft';


@Component({
  selector: 'app-nft-dialog',
  templateUrl: './nft-dialog.component.html',
  styleUrls: ['./nft-dialog.component.scss'],
  providers: [LoaderService] 
})
export class NftDialogComponent implements OnInit {
  form: FormGroup;
  nftRef: NftRef;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<NftDialogComponent>,
    @Inject(MAT_DIALOG_DATA) nftRef: NftRef,
    private data: DataStorageService

  ) { 
    this.nftRef = nftRef;
    this.form = this.formBuilder.group({
      name: [nftRef.name, Validators.required],
      owner: [nftRef.owner, Validators.required],
      address: [nftRef.address, Validators.required],
      chain: [nftRef.chain, Validators.required]
  });
  }
  save() {
    const changes = this.form.value;
    this.data.editPersistedNftRef(this.nftRef.name, changes).subscribe();
  }

  close() {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }
}

export function openEditNftRefDialog(dialog: MatDialog, nft:Nft) {

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

