import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TABLE_ACTION } from '../../../../modules/table/enums/table-action.enum';
import { Cliente } from '../../../../interfaces/cliente';

@Component({
  selector: 'app-cliente-mantenimiento',
  templateUrl: './cliente-mantenimiento.component.html',
  styleUrl: './cliente-mantenimiento.component.css'
})
export class ClienteMantenimientoComponent implements OnInit {
  form!: FormGroup;
  titleModal: string = 'Crear Cliente';
  //data: FormularioSolicitudDIA;

  constructor(
    private builder: FormBuilder,
    public dialogRef: MatDialogRef<ClienteMantenimientoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log("modal:", this.data);
  }

  ngOnInit(): void {
    this.buildForm();
    if (this.data.action === TABLE_ACTION.EDIT) {
      this.patchFormValues(this.data.item);
      this.titleModal = 'Editar Cliente';
    }
  }

  private buildForm(): void {
    this.form = this.builder.group({
      id: [null, Validators.required],
      ruc: [null, Validators.required],
      nombre: [null, Validators.required],
      direccion: [null, Validators.required],
      telefono: [null, Validators.required],
      correo: [null, Validators.required]
    });
  }

  private patchFormValues(data: Cliente): void {
    this.form.patchValue(data);

  }
}
