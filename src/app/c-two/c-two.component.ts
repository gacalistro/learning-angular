import { Component, OnInit } from "@angular/core";
import { ApiService } from "../services/api.service";

@Component({
  selector: "app-c-two",
  templateUrl: "./c-two.component.html",
  styleUrls: ["./c-two.component.css"],
})
export class CTwoComponent implements OnInit {
  pokemonData: any;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getPokemon("bulbasaur").subscribe({
      next: (res) =>
        (this.pokemonData = {
          name: res.name,
          sprite: res.sprites.front_default,
          types: res.types.map((types: any) => types.type.name),
        }),
      error: (err) => console.log(err),
    });
  }
}
