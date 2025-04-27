import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Usuario } from '../../../../interfaces/usuario.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TABLE_ACTION } from '../../../../modules/table/enums/table-action.enum';

@Component({
  selector: 'app-usuario-mantenimiento',
  templateUrl: './usuario-mantenimiento.component.html',
  styleUrl: './usuario-mantenimiento.component.css'
})
export class UsuarioMantenimientoComponent implements OnInit {
  form!: FormGroup;
  titleModal:string='Crear Usuario';
  //data: FormularioSolicitudDIA;

  constructor(
    private builder: FormBuilder,
    public dialogRef: MatDialogRef<UsuarioMantenimientoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any){
      console.log("modal:",this.data);

      
      
  }
  ngOnInit(): void {
    this.buildForm();
    if(this.data.action=== TABLE_ACTION.EDIT){
      this.patchFormValues(this.data.item);
      this.titleModal ='Editar Usuario';
    }
  }

  private buildForm(): void {
    this.form = this.builder.group({
      id: [null, Validators.required],
      nombreUsuario: [null, Validators.required],
      nombreCompleto: [null, Validators.required]
    });
  }

  private patchFormValues(data: Usuario): void {
    this.form.patchValue(data);

  }

}
