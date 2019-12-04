import { Component, OnInit } from '@angular/core';
import { ServiceReqresService } from '../../service/service-reqres.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styles: []
})
export class PrincipalComponent implements OnInit {

  public usuarios=[]

  constructor(private service:ServiceReqresService,private modalService: NgbModal) { 
    this.service.ListaUsuarios().subscribe((data:any)=>{
      console.log(data)
      this.usuarios=data.data
      console.log(this.usuarios);
      
    })

  }

  ngOnInit() {
  }

  closeResult: string;
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}



