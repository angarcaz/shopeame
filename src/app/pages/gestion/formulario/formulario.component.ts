import { ProductoServicioService } from './../../../servicios/producto-servicio.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  public productForm! : FormGroup;
  public submitted: boolean = false;

  constructor (
    private formBuilder: FormBuilder,
    private productoServicio: ProductoServicioService,
    private router: Router,
  ){}

  public newItem = this.productoServicio.itemData;
  public dataId = this.productoServicio.itemData.id;

  //Investigar y afinar con los validadores:

  ngOnInit() :void {
    this.productForm = this.formBuilder.group({
      name: [this.newItem.name,[Validators.required, Validators.minLength(2)]],
      price: [this.newItem.price,[Validators.required, Validators.minLength(1)]], 
      description: [this.newItem.description,[Validators.required, Validators.minLength(1)]],
      stars: [this.newItem.stars,[Validators.required, Validators.minLength(1)]],
      image: [this.newItem.image,[Validators.required, Validators.minLength(1)]],
    });

    //Recojo los datos introducidos en el formulario y le asigno esta información a la 
    //variable newItem.

    this.productForm.valueChanges.subscribe(newInfo=>{
      this.newItem = newInfo
    });
  }

  onSubmit(){
    this.productoServicio.postItem(this.newItem).subscribe((data) => {
      //PUT??
    })
    //validadores
    this.submitted = true;
    if(this.productForm.valid) {
      console.log(this.newItem)
    }

    this.productForm.reset();
  }

  }

