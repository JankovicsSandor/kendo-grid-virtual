import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KENDO_GRID } from '@progress/kendo-angular-grid';

export interface PersonData {
  id: number;
  firstName: string;
  lastName: string;
  city: string;
  title: string;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, KENDO_GRID],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  public gridData: PersonData[] = this.createRandomData(100);

  /* Generating example data */
  private createRandomData(count: number): PersonData[] {
    const firstNames = [
        'Nancy',
        'Andrew',
        'Janet',
        'Margaret',
        'Steven',
        'Michael',
        'Robert',
        'Laura',
        'Anne',
        'Nige',
      ],
      lastNames = [
        'Davolio',
        'Fuller',
        'Leverling',
        'Peacock',
        'Buchanan',
        'Suyama',
        'King',
        'Callahan',
        'Dodsworth',
        'White',
      ],
      cities = [
        'Seattle',
        'Tacoma',
        'Kirkland',
        'Redmond',
        'London',
        'Philadelphia',
        'New York',
        'Seattle',
        'London',
        'Boston',
      ],
      titles = [
        'Accountant',
        'Vice President, Sales',
        'Sales Representative',
        'Technical Support',
        'Sales Manager',
        'Web Designer',
        'Software Developer',
      ];

    return Array(count)
      .fill({})
      .map((_, idx) => ({
        id: idx + 1,
        firstName: firstNames[Math.floor(Math.random() * firstNames.length)],
        lastName: lastNames[Math.floor(Math.random() * lastNames.length)],
        city: cities[Math.floor(Math.random() * cities.length)],
        title: titles[Math.floor(Math.random() * titles.length)],
      }));
  }
}
