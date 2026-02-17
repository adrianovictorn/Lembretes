import { Component } from '@angular/core';
import { LembreteList } from "../../../components/lembrete-list/lembrete-list";
import { LembreteCard } from "../../../components/lembrete-card/lembrete-card";

@Component({
  selector: 'app-lembrete-list-page',
  standalone: true,
  imports: [LembreteList, LembreteCard],
  templateUrl: './lembrete-list-page.html',
  styleUrl: './lembrete-list-page.css',
})
export class LembreteListPage {

}
