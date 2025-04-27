import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TABLE_ACTION } from '../../../../modules/table/enums/table-action.enum';
import { MedioPago } from '../../../../interfaces/medio-pago';

@Component({
  selector: 'app-medio-pago-mantenimiento',
  templateUrl: './medio-pago-mantenimiento.component.html',
  styleUrl: './medio-pago-mantenimiento.component.css'
})
export class MedioPagoMantenimientoComponent implements OnInit {
  form!: FormGroup;
  titleModal: string = 'Crear Medio de Pago';
  //data: FormularioSolicitudDIA;

  constructor(
    private builder: FormBuilder,
    public dialogRef: MatDialogRef<MedioPagoMantenimientoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log("modal:", this.data);
  }

  ngOnInit(): void {
    this.buildForm();
    if (this.data.action === TABLE_ACTION.EDIT) {
      this.patchFormValues(this.data.item);
      this.titleModal = 'Editar Medio de Pago';
    }
  }

  private buildForm(): void {
    this.form = this.builder.group({
      id: [null, Validators.required],
      nombre: [null, Validators.required]  
    });
  }

  private patchFormValues(data: MedioPago): void {
    this.form.patchValue(data);

  }
}

