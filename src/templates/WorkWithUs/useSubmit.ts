import { FormEvent, useCallback, useState } from 'react';
import {
  TypeSubmitHookResult,
  TypeFieldsErrors,
  FormField,
  TypeFormConfig,
  TypeFieldsErrorsResult,
} from './types';

const DEFAULT_FIELD_ERRORS: TypeFieldsErrors = {
  [FormField.Name]: false,
  [FormField.Phone]: false,
};

export function getFieldsErrors(
  formConfig: TypeFormConfig,
): TypeFieldsErrorsResult {
  const fieldsHasErrors: TypeFieldsErrors = {
    [FormField.Name]: !formConfig[FormField.Name],
    [FormField.Phone]: !formConfig[FormField.Phone],
  };

  const hasErrors = Object.values(fieldsHasErrors).some(
    (fieldError) => fieldError,
  );

  return { hasErrors, fieldsHasErrors };
}

export function useSubmit(formConfig: TypeFormConfig): TypeSubmitHookResult {
  const [fieldErrors, setFieldErrors] =
    useState<TypeFieldsErrors>(DEFAULT_FIELD_ERRORS);

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      const { hasErrors, fieldsHasErrors } = getFieldsErrors(formConfig);

      if (!hasErrors) {
        setFieldErrors(fieldsHasErrors);
        console.log('No Errors, do request');
      } else {
        setFieldErrors(fieldsHasErrors);
      }
    },
    [formConfig],
  );

  return { fieldErrors, handleSubmit };
}
