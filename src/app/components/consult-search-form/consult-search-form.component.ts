import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'ailos-consult-search-form',
  templateUrl: './consult-search-form.component.html',
  styleUrls: ['./consult-search-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConsultSearchFormComponent implements OnInit {
  @Input()
  buttonPlaceholder = 'Consultar por CPF';

  @Output()
  submitFormValue = new EventEmitter<number>();

  @Output()
  emitFormInvalidData = new EventEmitter<boolean>();

  form!: FormGroup;

  mask = {
    mask: '000.000.000-00',
    max: 11
  };

  constructor(private _formBuilder: FormBuilder) { }

  validateElevenDigits(control: FormControl) {
    const value = control.value;
    const hasElevenDigits = /^\d{11,}$/.test(value);
    return hasElevenDigits ? null : { elevenDigits: true };
  }

  ngOnInit(): void {
    this._buildForm();
    this._formChanges();
  }

  handleSubmitForm() {
    this.form.markAsTouched();

    const hasValidData = isNaN(this.form.value.cpf);

    if (hasValidData && this.form.valid) {
      this.submitFormValue.emit(Number(this.form.value));
    }
  }

  private _buildForm() {
    this.form = this._formBuilder.group({
      cpf: [
        null,
        [
          Validators.required,
          Validators.pattern(/^(\d{3}\.){2}\d{3}\-\d{2}$/),
          Validators.minLength(14),
          Validators.maxLength(14)
        ]
      ]
    });
  }

  private _formChanges() {
    this.form.valueChanges.subscribe(() =>
      this.emitFormInvalidData.emit(this.form.invalid)
    );
  }
}
