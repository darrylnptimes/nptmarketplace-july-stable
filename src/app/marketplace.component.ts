import { Component, OnInit } from '@angular/core';
import { CarService } from './carservice';
import { Car } from './car';
import { MessageService } from 'primeng/api';
import { FilterUtils } from 'primeng/utils';
import { SelectItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})
export class MarketplaceComponent implements OnInit {

 cars: Car[];

    sectors: SelectItem[];

    users: SelectItem[];

    revenues: SelectItem[];

    ratings: SelectItem[];

    prices: SelectItem[];

    cols: any[];

    brands: SelectItem[];

    colors: SelectItem[];

    yearFilter: number;

    yearTimeout: any;

    selectedHero: any;

    hero: any;

    constructor(private carService: CarService,
              private router: Router) {
  }

    onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.log(hero)
    }  

    gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
    }

    gotoPop(): void {
    this.router.navigate(['/c2', ]);
    }

    ngOnInit() {
        this.carService.getCarsMedium().then(cars => this.cars = cars);

        this.brands = [
            { label: 'All Companies', value: null },
            { label: 'Audi', value: 'Audi' },
            { label: 'BMW', value: 'BMW' },
            { label: 'Fiat', value: 'Fiat' },
            { label: 'Honda', value: 'Honda' },
            { label: 'Jaguar', value: 'Jaguar' },
            { label: 'Mercedes', value: 'Mercedes' },
            { label: 'Renault', value: 'Renault' },
            { label: 'VW', value: 'VW' },
            { label: 'Volvo', value: 'Volvo' }
        ];

        this.sectors = [
            { label: 'All Sectors', value: null },
            { label: '403b Providers', value: '403b Providers' },
            { label: 'Accounting Services', value: 'Accounting Services' },
            { label: 'Advertising Specialties', value: 'Advertising Specialties' },
            { label: 'Affinity Programs', value: 'Affinity Programs' },
            { label: 'Auction Services', value: 'Auction Services' },
            { label: 'Auditing Software', value: 'Auditing Software' },
            { label: 'Background Screeners', value: 'Background Screeners' },
            { label: 'Budgeting Software', value: 'Budgeting Software' },
            { label: 'Capital Campaigns', value: 'Capital Campaigns' },
            { label: 'Charitable Estate Planning', value: 'Charitable Estate Planning' },
            { label: 'Charitable State Registration', value: 'Charitable State Registration' },
            { label: 'Checkout Services/Mobile Bidding', value: 'Checkout Services/Mobile Bidding' },
            { label: 'Computer Services', value: 'Computer Services' },
            { label: 'Computer Software', value: 'Computer Software' },
            { label: 'Computer Software/Planned Giving', value: 'Computer Software/Planned Giving' },
            { label: 'Computer Software/Special Events', value: 'Computer Software/Special Events' },
            { label: 'Computerized Fund Accounting', value: 'Computerized Fund Accounting' },
            { label: 'Computerized Fundraising Systems', value: 'Computerized Fundraising Systems' },
            { label: 'Computerized Fundraising Systems/Online', value: 'Computerized Fundraising Systems/Online' },
            { label: 'Cost Management Software', value: 'Cost Management Software' },
            { label: 'Creative Services/Copy', value: 'Creative Services/Copy' },
            { label: 'CRM Software', value: 'CRM Software' },
            { label: 'Data Security', value: 'Data Security' },
            { label: 'Database Management/Direct Mail', value: 'Database Management/Direct Mail' },
            { label: 'Defined Benefit Planners', value: 'Defined Benefit Planners' },
            { label: 'Direct Mail Consulting', value: 'Direct Mail Consulting' },
            { label: 'Direct Mail Printing', value: 'Direct Mail Printing' },
            { label: 'Direct Marketing Fundraising', value: 'Direct Marketing Fundraising' },
            { label: 'Direct Marketing Services', value: 'Direct Marketing Services' },
            { label: 'Donation Processing', value: 'Donation Processing' },
            { label: 'Donor Advised Funds', value: 'Donor Advised Funds' },
            { label: 'Donor Management', value: 'Donor Management' },
            { label: 'Donor Recognition Products', value: 'Donor Recognition Products' },
            { label: 'Donor/Prospect Research Evaluation', value: 'Donor/Prospect Research Evaluation' },
            { label: 'Education/Training', value: 'Education/Training' },
            { label: 'Electronic Health Records', value: 'Electronic Health Records' },
            { label: 'Email Marketing Services', value: 'Email Marketing Services' },
            { label: 'Event Fundraising Services', value: 'Event Fundraising Services' },
            { label: 'Executive Search', value: 'Executive Search' },
            { label: 'Financial Help Lines', value: 'Financial Help Lines' },
            { label: 'Financial Management & Training', value: 'Financial Management & Training' },
            { label: 'Financial Services', value: 'Financial Services' },
            { label: 'Financial Software', value: 'Financial Software' },
            { label: 'Fundraising Lists', value: 'Fundraising Lists' },
            { label: 'Fundraising Products', value: 'Fundraising Products' },
            { label: 'Fundraising / Full Service', value: 'Fundraising / Full Service' },
            { label: 'Fund Accounting Software', value: 'Fund Accounting Software' },
            { label: 'Fundraising/Major Gifts', value: 'Fundraising/Major Gifts' },
            { label: 'Fundraising/Software Consulting', value: 'Fundraising/Software Consulting' },
            { label: 'Grant & Scholarship Management Software', value: 'Grant & Scholarship Management Software' },
            { label: 'Grant Technology Services', value: 'Grant Technology Services' },
            { label: 'Grant Writers/Writing', value: 'Grant Writers/Writing' },
            { label: 'Grants Management Software', value: 'Grants Management Software' },
            { label: 'Healthcare Providers', value: 'Healthcare Providers' },
            { label: 'Hispanic Marketing', value: 'Hispanic Marketing' },
            { label: 'HR/Recruiting Services', value: 'HR/Recruiting Services' },
            { label: 'Human Resource Consulting', value: 'Human Resource Consulting' },
            { label: 'Human Resources', value: 'Human Resources' },
            { label: 'Insurance', value: 'Insurance' },
            { label: 'Internet Products/Services', value: 'Internet Products/Services' },
            { label: 'IT Service Providers', value: 'IT Service Providers' },
            { label: 'Legal Services', value: 'Legal Services' },
            { label: 'List Owners, Managers, Brokers', value: 'List Owners, Managers, Brokers' },
            { label: 'Mail Monitoring', value: 'Mail Monitoring' },
            { label: 'Managed IT Services', value: 'Managed IT Services' },
            { label: 'Management Consulting', value: 'Management Consulting' },
            { label: 'Marketing & Communications', value: 'Marketing & Communications' },
            { label: 'Mobile Applications', value: 'Mobile Applications' },
            { label: 'Mobile Fundraising', value: 'Mobile Fundraising' },
            { label: 'Online Database Management', value: 'Online Database Management' },
            { label: 'Online Fundraising', value: 'Online Fundraising' },
            { label: 'Online Fundraising & Auction Services', value: 'Online Fundraising & Auction Services' },
            { label: 'Payment Processing', value: 'Payment Processing' },
            { label: 'Payroll Software', value: 'Payroll Software' },
            { label: 'Planned Giving', value: 'Planned Giving' },
            { label: 'Software/Technology Consulting', value: 'Software/Technology Consulting' },
            { label: 'Telefundraising', value: 'Telefundraising' },
            { label: 'Temporary Staffing Firms', value: 'Temporary Staffing Firms' },
            { label: 'Unemployment Services', value: 'Unemployment Services' },
            { label: 'WEALTH MANAGEMENT', value: 'WEALTH MANAGEMENT' },
            { label: 'Website Design & Development', value: 'Website Design & Development' },
        ];

        this.users = [
            { label: 'All Number of Users', value: null },
            { label: '1 (just me)', value: '1 (just me)' },
            { label: '2-4', value: '2-4' },
            { label: '5-10', value: '5-10' },
            { label: '11-50', value: '2-4' },
            { label: '51-100', value: '2-4' },
            { label: '100-1000', value: '100-1000' },
            { label: '1000+', value: '1000+' }
        ];

        this.revenues = [
            { label: 'All Revenues', value: null },
            { label: '$0-100k', value: '10000' },
            { label: '$100k-$250k', value: '$100k-$250k' },
            { label: '$250k-$750k', value: '$250k-$750k' },
            { label: '$750k-$1mil', value: '$750k-$1mil' },
            { label: '$1mil-$5mil', value: '$1mil-$5mil' },
            { label: '$5mil +', value: '$5mil +' }
        ];

        this.ratings = [
            { label: 'All Ratings', value: null },
            { label: 'One', value: '1' },
            { label: 'Two', value: '2' },
            { label: 'Three', value: '3' },
            { label: 'Four', value: '4' },
            { label: 'Five', value: '5' },
            { label: 'Six', value: '6' },
            { label: 'Seven', value: '7' },
            { label: 'Eight', value: '8' },
            { label: 'Nine', value: '9' },
            { label: 'Ten', value: '10' }
        ];

        this.colors = [
            { label: 'White', value: 'White' },
            { label: 'Green', value: 'Green' },
            { label: 'Silver', value: 'Silver' },
            { label: 'Black', value: 'Black' },
            { label: 'Red', value: 'Red' },
            { label: 'Maroon', value: 'Maroon' },
            { label: 'Brown', value: 'Brown' },
            { label: 'Orange', value: 'Orange' },
            { label: 'Blue', value: 'Blue' }
        ];

        this.prices = [
            { label: 'All Prices', value: null },
            { label: 'Arts & Culture', value: 'Arts & Culture' },
            { label: 'Green', value: 'Green' },
            { label: 'Silver', value: 'Silver' },
            { label: 'Black', value: 'Black' },
            { label: 'Red', value: 'Red' },
            { label: 'Maroon', value: 'Maroon' },
            { label: 'Brown', value: 'Brown' },
            { label: 'Orange', value: 'Orange' },
            { label: 'Blue', value: 'Blue' }
        ];

        this.cols = [
            { field: 'brand', header: 'Company Name' },
            { field: 'sector', header: 'NonProfit Sector'},
            { field: 'revenue', header: 'Annual Contribution Revenue' },
            { field: 'user', header: 'Number of Users' },
            { field: 'rating', header: 'Overall Rating' }
        ];

        FilterUtils['custom'] = (value, filter): boolean => {
            if (filter === undefined || filter === null || filter.trim() === '') {
                return true;
            }
    
            if (value === undefined || value === null) {
                return false;
            }
            
            return parseInt(filter) > value;
        }
    }

    onYearChange(event, dt) {
        if (this.yearTimeout) {
            clearTimeout(this.yearTimeout);
        }

        this.yearTimeout = setTimeout(() => {
            dt.filter(event.value, 'year', 'gt');
        }, 250);
    }
}
