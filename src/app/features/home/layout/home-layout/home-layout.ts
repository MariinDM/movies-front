import { Component } from '@angular/core';
import { Navbar } from "../../../../shared/components/navbar/navbar";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home-layout',
  imports: [RouterOutlet, Navbar],
  templateUrl: './home-layout.html',
  styleUrl: './home-layout.scss'
})
export class HomeLayout {

}
