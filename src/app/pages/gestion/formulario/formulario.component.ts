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

  
  ngOnInit() :void {
    this.productForm = this.formBuilder.group({
      name: [this.newItem.name,[Validators.required, Validators.maxLength(20), Validators.minLength(3)]],
      price: [this.newItem.price,[Validators.required, Validators.pattern("^[1-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[1-9][0-9]*$")]], 
      description: [this.newItem.description,[Validators.required, Validators.minLength(5)]],
      stars: [this.newItem.stars,[Validators.required, Validators.pattern("^[1-5]*$")]], 
      image: [this.newItem.image,[Validators.required, Validators.pattern("")]] 
      // AFINAR PATTERN PARA VALIDAR URL image: [this.newItem.image,[Validators.required, Validators.pattern("(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?")]] 
    });

    //Recojo los datos introducidos en el formulario y le asigno esta información a la 
    //variable newItem.
    this.productForm.valueChanges.subscribe(newInfo=>{
      this.newItem = newInfo
    });

  }
      //FUNCIÓN onSubmit():
      //Al hacer click en el botón submit, pasamos nuestro nuevo item al servicio, que lo mostrará en la página de productos
      //Cuando se complete al proceso, nos redirige a la página de productos.

    onSubmit(): void {

      this.submitted = true;

      this.productoServicio.postItem(this.newItem).subscribe((newInfo) => {
        this.router.navigate(["/productos"])
      })
      
      this.productForm.reset();
      this.submitted = false;
    }

    }

