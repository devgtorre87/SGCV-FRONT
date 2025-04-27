import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Usuario } from '../../interfaces/usuario.interface';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { filter } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { UsuarioMantenimientoComponent } from './modal/usuario-mantenimiento/usuario-mantenimiento.component';
import { TableColumn } from '../../modules/table/models/table-column.model';
import { TableConfig } from '../../modules/table/models/table-config.model';
import { TableAction } from '../../modules/table/models/table-action.model';
import Swal from 'sweetalert2';
import { TABLE_ACTION } from '../../modules/table/enums/table-action.enum';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent implements OnInit, AfterViewInit {

  tableColumns: TableColumn[] = [];
  tableConfig: TableConfig = {
    //isSelectable: true,
    isPaginable: true,
    showAction: true,
    showFilter: true
  };

  usuarios: Usuario[] = [];
  dataSource!: MatTableDataSource<Usuario>;

  @ViewChild(MatPaginator) paginator!: MatPaginator

  constructor(public dialog: MatDialog) {

  }
  openDialog() {
    const dialogRef = this.dialog.open(UsuarioMantenimientoComponent, {
      width: '50vw',
      //height: '85vh',
      data: { action: TABLE_ACTION.NEW, item: null },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }



  ngOnInit(): void {
    this.usuarios = this.obtenerDatos();
    this.dataSource = new MatTableDataSource(this.usuarios);

    if (this.dataSource) {
      this.dataSource.paginator = this.paginator;
    }

    this.setTableColumns();
  }

  ngAfterViewInit(): void {
    if (this.dataSource) {
      this.dataSource.paginator = this.paginator;
    }
  }

  displayedColumns: string[] = ["id", "nombreUsuario", "nombreCompleto", "nombreEstado", "usuarioRegistra", "fechaRegistra"];

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim();
  }

  private obtenerDatos(): Usuario[] {
    let datos: Usuario[] = [
      {
        id: 1,
        nombreUsuario: 'admin',
        nombreCompleto: 'Juan Perez Mendoza',
        password: '123456',
        nombreEstado: 'Activo',
        usuarioRegistra: 'admin',
        fechaRegistra: new Date(2024, 1, 25, 15, 32, 1)
      },
      {
        id: 2,
        nombreUsuario: 'gtorre',
        nombreCompleto: 'Guido Torre',
        password: '123456',
        nombreEstado: 'Activo',
        usuarioRegistra: 'admin',
        fechaRegistra: new Date(2024, 1, 26, 15, 32, 1)
      },
      {
        id: 2,
        nombreUsuario: 'gtorre',
        nombreCompleto: 'Guido Torre',
        password: '123456',
        nombreEstado: 'Activo',
        usuarioRegistra: 'admin',
        fechaRegistra: new Date(2024, 1, 26, 15, 32, 1)
      },
      {
        id: 2,
        nombreUsuario: 'gtorre',
        nombreCompleto: 'Guido Torre',
        password: '123456',
        nombreEstado: 'Activo',
        usuarioRegistra: 'admin',
        fechaRegistra: new Date(2024, 1, 26, 15, 32, 1)
      },
      {
        id: 2,
        nombreUsuario: 'gtorre',
        nombreCompleto: 'Guido Torre',
        password: '123456',
        nombreEstado: 'Activo',
        usuarioRegistra: 'admin',
        fechaRegistra: new Date(2024, 1, 26, 15, 32, 1)
      },
      {
        id: 2,
        nombreUsuario: 'gtorre',
        nombreCompleto: 'Guido Torre',
        password: '123456',
        nombreEstado: 'Activo',
        usuarioRegistra: 'admin',
        fechaRegistra: new Date(2024, 1, 26, 15, 32, 1)
      },
      {
        id: 2,
        nombreUsuario: 'gtorre',
        nombreCompleto: 'Guido Torre',
        password: '123456',
        nombreEstado: 'Activo',
        usuarioRegistra: 'admin',
        fechaRegistra: new Date(2024, 1, 26, 15, 32, 1)
      },
      {
        id: 2,
        nombreUsuario: 'gtorre',
        nombreCompleto: 'Guido Torre',
        password: '123456',
        nombreEstado: 'Activo',
        usuarioRegistra: 'admin',
        fechaRegistra: new Date(2024, 1, 26, 15, 32, 1)
      },
      {
        id: 2,
        nombreUsuario: 'gtorre',
        nombreCompleto: 'Guido Torre',
        password: '123456',
        nombreEstado: 'Activo',
        usuarioRegistra: 'admin',
        fechaRegistra: new Date(2024, 1, 26, 15, 32, 1)
      },
      {
        id: 2,
        nombreUsuario: 'gtorre',
        nombreCompleto: 'Guido Torre',
        password: '123456',
        nombreEstado: 'Activo',
        usuarioRegistra: 'admin',
        fechaRegistra: new Date(2024, 1, 26, 15, 32, 1)
      },
      {
        id: 2,
        nombreUsuario: 'gtorre',
        nombreCompleto: 'Guido Torre',
        password: '123456',
        nombreEstado: 'Activo',
        usuarioRegistra: 'admin',
        fechaRegistra: new Date(2024, 1, 26, 15, 32, 1)
      },
      {
        id: 2,
        nombreUsuario: 'gtorre',
        nombreCompleto: 'Guido Torre',
        password: '123456',
        nombreEstado: 'Activo',
        usuarioRegistra: 'admin',
        fechaRegistra: new Date(2024, 1, 26, 15, 32, 1)
      }
    ];
    return datos;
  }

  setTableColumns() {
    this.tableColumns = [
      { label: 'ID', def: 'id', dataKey: 'id' },
      { label: 'Usuario', def: 'nombreUsuario', dataKey: 'nombreUsuario' },
      { label: 'Nombre Completo', def: 'nombreCompleto', dataKey: 'nombreCompleto' },
      { label: 'Estado', def: 'nombreEstado', dataKey: 'nombreEstado' },
      { label: 'Usuario Registra', def: 'usuarioRegistra', dataKey: 'usuarioRegistra' },
      { label: 'Fecha y Hora del registro', def: 'fechaRegistra', dataKey: 'fechaRegistra', dataType: 'date', format: 'dd/MM/yyyy HH:mm:ss' }
    ]
  }

  onSelect(data: any) {
    console.log(data);
  }

  onTableAction(tableAction: TableAction) {
    console.log(tableAction);

    switch (tableAction.action) {
      case TABLE_ACTION.EDIT:
        this.onEdit(tableAction.row);
        break;
      case TABLE_ACTION.DELETE:
        this.onDelete();
        break;
      default: break;
    }
  }

  onEdit(data: Usuario) {
    const dialogRef = this.dialog.open(UsuarioMantenimientoComponent, {
      width: '50vw',
      //height: '85vh',
      data: { action: TABLE_ACTION.EDIT, item: data },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  onDelete() {
    Swal.fire({
      title: "Eliminar usuario",
      text: "¿Desea eliminar el siguiente registro?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si",
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Eliminado!",
          text: "El usuario ha sido eliminado satisfactoriamente.",
          icon: "success"
        });
      }
    });
  }
}
