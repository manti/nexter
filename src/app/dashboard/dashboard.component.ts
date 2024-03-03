import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  toggle() {
    const toggles = document.querySelectorAll(".faq-toggle");
    toggles.forEach((toggle) => {
      toggle.addEventListener("click", () => {
        if (toggle && toggle.parentElement && toggle.parentElement.classList) {
          toggle?.parentElement.classList.toggle("active");
        }
      });
    })
  }

}
