import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import { Router} from '@angular/router';
// declare var $: any;
@Component({
  selector: 'app-shouye',
  templateUrl: './shouye.component.html',
  styleUrls: ['./shouye.component.css']
})
export class ShouyeComponent implements OnInit {
  scontent = '';
  scontentt = '';
  @ViewChild('content') content: ElementRef;
  @ViewChild('contentt') contentt: ElementRef;
  @Input() color = 'primary';
  @Input() color2 = 'primary';
  constructor(  private router: Router) { }
  ngOnInit() {
  //   $(document).ready(function() {
  //     $('#example').DataTable();
  // } );
  }

  chazhao() {
    this.scontent = this.content.nativeElement.value;
    // this.restservice.postData('search/', this.scontent).subscribe(data => {console.log(data)})
    this.router.navigate(['/compound-table/', this.scontent]);
  }
  chazhaot() {
    this.scontentt =  '?search=' +this.contentt.nativeElement.value;
    this.router.navigate(['/target-table/', this.scontentt]);
  }
}
