import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { MercanciaService } from '../servicios/mercancia-service.service';
import { MatTableModule } from '@angular/material/table';
import { MercanciaDto } from '../modelos/mercancia-dto';



@Component({
  selector: 'app-nexos-mercancia',
  standalone: true,
  imports: [AsyncPipe, MatTableModule],
  templateUrl: './nexos-mercancia.component.html',
  styleUrl: './nexos-mercancia.component.css'
})
export class NexosMercanciaComponent {
  public mercanciaList: MercanciaDto[];
  constructor(private mercanciaService: MercanciaService){}

  ngOnInit(): void{
    this.mercanciaService.obtenerMercancias().subscribe(
      res=> this.mercanciaList = res);
    console.log(this.mercanciaList);
  }
  displayedColumns: string[] = ['id', 'Nombre Mercancia', 'weight', 'symbol'];

}
