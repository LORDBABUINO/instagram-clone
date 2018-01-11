import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  public form: FormGroup = new FormGroup({
    'title': new FormControl(null)
  })

  constructor() { }

  ngOnInit() {
  }

  public publicar(): void {
    console.log('publicado')
  }
}
