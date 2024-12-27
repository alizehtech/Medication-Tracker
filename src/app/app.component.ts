import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Medication Tracker';
  medications: any[]=[];
  constructor( private http: HttpClient) { }
  
  ngOnInit(): void {
    this.getLocal();
  }

  getLocal(): void {
    const url = 'assets/medications.json';
    this.http.get(url).subscribe((res:any)=>{
      this.medications = res.medications;
      console.log('Medications:', this.medications);
        })
  }
  
}
