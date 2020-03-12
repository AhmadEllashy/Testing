import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Title = 'Ahmad';
  Web="Front"
  obj: any[] = [
    {
      country : "Egypt",
      cities : [
        {name : "Tanta" , Pop:2000000},
        {name : "Cairo" , Pop:13000000},
        {name : "Banha" , Pop:9800000}


      ]
    },{
    country:"British",
    cities:[
        {name : "Brimngham" , Pop:2000000},
        {name:"London",Pop:92102801},
    ]

    }
  ]
  WebSort = [
    {
      
      Front:[
        {name : "Html"},
        {name : "Css"},
        {name : "Bootstrap"},

      ]
    },{
      Back :[
        {name : "Node"},
        {name : "Laveral"},
        
      ]
    }
  ]

  MyWeb(select){
    return this.Web = select
    debugger
  }
  //// Track BY
  myTrackBy(index , Langu){
    return Langu?Langu.name : undefined
  }
}