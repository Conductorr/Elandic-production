import { ChangeEvent, FormEvent } from 'react';

export enum FormField {
  Name = 'name',
  Phone = 'phone',
  Comment = 'comment',
}

export type TypeFormConfig = {
  [FormField.Name]: string;
  [FormField.Phone]: string;
  [FormField.Comment]: string;
};

export type TypeFormHookResult = {
  formConfig: TypeFormConfig;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export type TypeFieldsErrors = {
  [FormField.Name]: boolean;
  [FormField.Phone]: boolean;
};

export type TypeSubmitHookResult = {
  fieldErrors: TypeFieldsErrors;
  handleSubmit: (e: FormEvent) => void;
};

export type TypeFieldsErrorsResult = {
  hasErrors: boolean;
  fieldsHasErrors: TypeFieldsErrors;
};
