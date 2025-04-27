import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TABLE_ACTION } from '../../../../modules/table/enums/table-action.enum';
import { Producto } from '../../../../interfaces/producto';

@Component({
  selector: 'app-producto-mantenimiento',
  templateUrl: './producto-mantenimiento.component.html',
  styleUrl: './producto-mantenimiento.component.css'
})
export class ProductoMantenimientoComponent implements OnInit {
  form!: FormGroup;
  titleModal: string = 'Crear Producto';
  //data: FormularioSolicitudDIA;

  constructor(
    private builder: FormBuilder,
    public dialogRef: MatDialogRef<ProductoMantenimientoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log("modal:", this.data);
  }

  ngOnInit(): void {
    this.buildForm();
    if (this.data.action === TABLE_ACTION.EDIT) {
      this.patchFormValues(this.data.item);
      this.titleModal = 'Editar Producto';
    }
  }

  private buildForm(): void {
    this.form = this.builder.group({
      id: [null, Validators.required],
      codigo: [null, Validators.required],
      nombre: [null, Validators.required],
      precio: [null, Validators.required],
      stock: [null, Validators.required]
    });
  }

  private patchFormValues(data: Producto): void {
    this.form.patchValue(data);

  }
}
