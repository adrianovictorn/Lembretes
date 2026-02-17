import { Component, inject } from '@angular/core';
import { AuthService } from '../../../core/services/auth-service';
import { MENU_ITEMS, Role } from '../../../core/config/menu.config';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-sidebar-layout',
  imports: [RouterLink, RouterLinkActive, LucideAngularModule],
  templateUrl: './sidebar-layout.html',
  styleUrl: './sidebar-layout.css',
})
export class SidebarLayout {
  private auth = inject(AuthService)

  menu = MENU_ITEMS

  canSee(itemRole: Role[]){
   return this.auth.hasRole(itemRole)
  }
  
}
