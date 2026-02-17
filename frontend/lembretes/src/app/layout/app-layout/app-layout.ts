import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderLayout } from "../component/header-layout/header-layout";
import { SidebarLayout } from "../component/sidebar-layout/sidebar-layout";

@Component({
  selector: 'app-app-layout',
  imports: [RouterOutlet, HeaderLayout, SidebarLayout],
  templateUrl: './app-layout.html',
  styleUrl: './app-layout.css',
})
export class AppLayout {
   isMenuOpen = false;
}
