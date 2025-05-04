import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterOutlet } from '@angular/router';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, RouterOutlet]  // Inclui o AppComponent e RouterOutlet
    }).compileComponents();

    // Criação do componente e fixture
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app component', () => {
    expect(component).toBeTruthy(); // Testa se o componente foi criado corretamente
  });

  it('should have the correct saudacao value', () => {
    expect(component.saudacao).toEqual('jkljk'); // Verifica se a saudacao tem o valor correto
  });

  it('should have the correct autor value', () => {
    expect(component.autor).toEqual(123); // Verifica se o autor tem o valor correto
  });

  it('should render saudacao in template', () => {
    fixture.detectChanges(); // Detecta mudanças no template
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('div')?.textContent).toContain('jkljk'); // Verifica se a saudacao aparece no HTML
  });

  it('should render autor in template', () => {
    fixture.detectChanges(); // Detecta mudanças no template
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('div')?.textContent).toContain('123'); // Verifica se o autor aparece no HTML
  });
});


