import { Component, EventEmitter, NgModule, Output } from '@angular/core';
import { LucideAngularModule, Menu  } from "lucide-angular";

@Component({
  selector: 'app-header-layout',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './header-layout.html',
  styleUrl: './header-layout.css',
})
export class HeaderLayout {
  readonly icons = { Menu }
  @Output() toggleMenu = new EventEmitter<void>()
}
