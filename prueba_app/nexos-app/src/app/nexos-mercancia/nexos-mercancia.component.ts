import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { MercanciaService } from '../servicios/mercancia-service.service';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MercanciaDto } from '../modelos/mercancia-dto';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input'



@Component({
  selector: 'app-nexos-mercancia',
  standalone: true,
  imports: [AsyncPipe, MatTableModule, CommonModule, MatInputModule],
  templateUrl: './nexos-mercancia.component.html',
  styleUrl: './nexos-mercancia.component.css'
})
export class NexosMercanciaComponent {
  public mercanciaList: MercanciaDto[];
  public dataSource: any;
  constructor(private mercanciaService: MercanciaService
  ){}

  ngOnInit(): void{
    this.mercanciaService.obtenerMercancias().subscribe(
      res=> this.mercanciaList = res);
      this.dataSource = new MatTableDataSource(this.mercanciaList);
    console.log(this.mercanciaList);
  }
  displayedColumns: string[] = ['id', 'Nombre Mercancia', 'Cantidad', 'Fecha registro'];
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
