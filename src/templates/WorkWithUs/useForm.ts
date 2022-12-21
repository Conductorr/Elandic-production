import { useState, useCallback, ChangeEvent } from 'react';
import { FormField, TypeFormHookResult, TypeFormConfig } from './types';

const DEFAULT_FORM_CONFIG = {
  [FormField.Name]: '',
  [FormField.Phone]: '',
  [FormField.Comment]: '',
};

export function useForm(): TypeFormHookResult {
  const [formConfig, setFormConfig] =
    useState<TypeFormConfig>(DEFAULT_FORM_CONFIG);

  const handleChange = useCallback(
    ({ target: { name, value } }: ChangeEvent<HTMLInputElement>) => {
      if (name) {
        setFormConfig((prevState) => ({ ...prevState, [name]: value }));
      }
    },
    [],
  );

  return { formConfig, handleChange };
}
