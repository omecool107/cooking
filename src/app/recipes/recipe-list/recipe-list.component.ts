import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("A Test Recipe", "This is a test", 
    "https://image.flaticon.com/icons/png/512/1021/1021460.png"),
    new Recipe("A Test Recipe", "This is a test", 
    "https://image.flaticon.com/icons/png/512/1021/1021460.png")
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
