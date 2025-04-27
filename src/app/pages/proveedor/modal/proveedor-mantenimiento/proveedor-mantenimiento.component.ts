import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TABLE_ACTION } from '../../../../modules/table/enums/table-action.enum';
import { Proveedor } from '../../../../interfaces/proveedor';

@Component({
  selector: 'app-proveedor-mantenimiento',
  templateUrl: './proveedor-mantenimiento.component.html',
  styleUrl: './proveedor-mantenimiento.component.css'
})
export class ProveedorMantenimientoComponent implements OnInit {
  form!: FormGroup;
  titleModal: string = 'Crear Proveedor';
  //data: FormularioSolicitudDIA;

  constructor(
    private builder: FormBuilder,
    public dialogRef: MatDialogRef<ProveedorMantenimientoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log("modal:", this.data);
  }

  ngOnInit(): void {
    this.buildForm();
    if (this.data.action === TABLE_ACTION.EDIT) {
      this.patchFormValues(this.data.item);
      this.titleModal = 'Editar Proveedor';
    }
  }

  private buildForm(): void {
    this.form = this.builder.group({
      id: [null, Validators.required],
      ruc: [null, Validators.required],
      razonSocial: [null, Validators.required],
      direccion: [null, Validators.required],
      telefono: [null, Validators.required],
      correo: [null, Validators.required]
    });
  }

  private patchFormValues(data: Proveedor): void {
    this.form.patchValue(data);

  }
}
