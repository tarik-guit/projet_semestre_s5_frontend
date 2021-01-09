import { Component, OnInit } from '@angular/core';
import {choix_service} from "../../services/choix_service";

import {patient} from "../../models/patient";
import { hopital } from '../../models/hopital';
import { dataperso } from '../../models/dataperso';


@Component({
  selector: 'app-choix',
  templateUrl: './choix.component.html',
  styleUrls: ['./choix.component.css']
})
export class ChoixComponent implements OnInit {

   afficheralertecreation:boolean=false;
  l_hopitaux: boolean = true;
  l_patients: boolean = false;
  noneditpatient:boolean=true;
  editpatient: boolean = false;
  edithopital: boolean = false;
  editdataperso:boolean = false;
  ajoutdataperso:boolean = false;
  hopitauxcurr:any=[];
  listehopitaux:any=[];
  currenthopital:any=[];
  currentpatient:any=[];
  hopital:hopital=new hopital();
  patient:patient=new patient();
  patientscurr:any=[];
  resultatcreationhopital:any=[];
  resultatcreationpatient:any=[];
  resultatupdatinghopital:any=[];
  dataspersonnelle:any=[];
  dataperso:dataperso=new dataperso();
  resultatcreationdataperso:any=[];
  pageofhopitals:Array<any>;
  pageofpatients:Array<any>;
  pageofdataper:Array<any>;
  constructor(private choixserv: choix_service) {
  }

  ngOnInit(): void {
    this.gethopitauxcurruser();
  }

  h_creer() {
    this.l_hopitaux = false;
    this.edithopital=false;
  }

  h_liste() {
    this.l_hopitaux = true;
    this.afficheralertecreation=false;
    this.edithopital=false;
    this.gethopitauxcurruser();
  }

  p_creer() {
    this.noneditpatient=true
    this.l_patients = false;
    this.editdataperso=false;
    this.ajoutdataperso=false;

  }

  p_liste() {
    this.l_patients = true;
    this.noneditpatient=true;
    this.editdataperso=false;
    this.ajoutdataperso=false;
    this.afficheralertecreation=false;

    this.getpatientforcurrenthopital(this.currenthopital);
  }
  editerpatient(p){this.editpatient=true;this.patient=p;this.l_patients=false,this.noneditpatient=false;}
  gethopitauxcurruser(){this.choixserv.gethopitauxpourcurrentuser().subscribe(data=>{this.hopitauxcurr=data,this.listehopitaux=data})}
  creerhopital(c){this.choixserv.creerhopital(c).subscribe(data=>{this.resultatcreationhopital=data});this.afficheralertecreation=true;}
  choisirhopital(p){this.currenthopital=p;this.choixserv.currenthopital=p;this.getpatientforcurrenthopital(p)}
  supprimerhopitale(p){if(window.confirm("voulez vous vraiment supprimer cet hopital")){ this.choixserv.supprimerhopitalbyid(p.id);this.pageofhopitals.splice(this.pageofhopitals.indexOf(p),1) ;if(p==this.currenthopital){this.currenthopital=[];this.choixserv.currenthopital=[]}};}
  creerpatient(p){this.choixserv.creerpatientpourhopitalid(this.currenthopital.id,p).subscribe(data=>{this.resultatcreationpatient=data});this.afficheralertecreation=true;}
  getpatientforcurrenthopital(p){this.choixserv.getpatientsforcurrenthopital(this.currenthopital).subscribe(data=>{this.patientscurr=data;})}
  choisirpatient(p){this.currentpatient=p;this.choixserv.currentpatient=p;}
  supprimerpatient(p){if(window.confirm("voulez vous vraiment supprimer cet patient")){this.choixserv.supprimerpatient(p.id);this.pageofpatients.splice(this.pageofpatients.indexOf(p),1);if(p==this.currentpatient){this.currentpatient=[];this.choixserv.currentpatient=[]}}}
  modifierpatient(p){this.choixserv.modifierpatient(p.id,p);this.noneditpatient=true;this.l_patients=true}
  getdataperso(p){this.choixserv.getdatapersonnelle(p).subscribe(data=>{this.dataspersonnelle=data;})}
  editdatapersonelle(p){this.editpatient=false;this.patient=p;this.editdataperso=true;this.l_patients=false;this.getdataperso(p);this.noneditpatient=true;}

  creerdatapers(c){this.choixserv.creerdataperso(this.patient.id,c).subscribe(data=>{this.resultatcreationdataperso=data;this.pageofdataper.push(data)});/*this.ajoutdataperso=false;this.editdataperso=true;*/this.afficheralertecreation=true;}
  ajoutdatapers(){this.ajoutdataperso=true;this.editdataperso=false}
  retour1(){this.ajoutdataperso=false;this.editdataperso=true;this.afficheralertecreation=false; }
  supprimerdataperso(p){if(window.confirm("voulez vous vraiment supprimer cet donnée")){this.choixserv.supprimerdataperso(p);this.pageofdataper.splice(this.pageofdataper.indexOf(p),1)}}
  modifierhopital(){this.choixserv.updatehopital(this.hopital.id,this.hopital).subscribe(data=>this.resultatupdatinghopital=data);this.edithopital=false;}
  editerhopital(p){this.hopital=p;this.edithopital=true}

  onChangePageh(page: Array<any>) {
    // update current page of items
    this.pageofhopitals=page ;

  }
  onChangePagep(page: Array<any>) {
    // update current page of items
    this.pageofpatients=page ;

  }
  onChangePaged(page: Array<any>) {
    // update current page of items
    this.pageofdataper=page ;

  }
}
