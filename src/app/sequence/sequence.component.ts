import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { firstValueFrom } from 'rxjs';

const url:string = "http://localhost:8080/alticci";

export interface ISequence {
  key: number;
  value: number;
}

@Component({
  selector: 'app-sequence',
  templateUrl: './sequence.component.html',
  styleUrls: ['./sequence.component.css']
})
export class SequenceComponent implements OnInit {
  result = new Map<string, string>([]);
  message: string | undefined;
  sequenceForm: FormGroup;

  constructor(private http: HttpClient) {
    this.sequenceForm = new FormGroup(
      {'sequence': new FormControl(null, Validators.required)}
    )
  }

  ngOnInit(): void {
    
  }

  async onSubmit(){
    const urlGet: string = `${url}/${this.sequenceForm.value.sequence}`
    this.message = undefined

    const map = JSON.stringify(await firstValueFrom(this.http.get(urlGet)));

    this.result = new Map(Object.entries(JSON.parse(map)))

  }

  onSubmitClear() {
      const urlPost: string = `${url}/clearCache`

      firstValueFrom(this.http.post(urlPost, null, { responseType: 'text' }))
      this.result = new Map();

      this.message = "Cache Cleared";
  }

  returnZero() {
    return 0
}

}
