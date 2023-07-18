import { Component, EventEmitter, Output } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {

  public countries: Country[] = [];
  private query: string = 'capital';
  public isLoading: boolean = false;

  constructor(private countriesService: CountriesService) {}

  searchByCapital( term: string ): void {
    this.isLoading = true;
    this.countriesService.searchCapital( term, this.query )
      .subscribe( countries => {
        this.countries = countries;
        this.isLoading = false;
      });
  }

}
