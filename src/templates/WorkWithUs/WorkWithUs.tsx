import React, { memo } from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import emailjs from '@emailjs/browser';
import { Button } from 'modules';
import { TextField, Label } from 'modules';
import { useForm } from './useForm';
import { useSubmit } from './useSubmit';
import { FormField } from './types';
import * as styles from './WorkWithUs.module.scss';

function WorkWithUs(): JSX.Element {
  const { t } = useTranslation();
  const { formConfig, handleChange } = useForm();
  const { fieldErrors, handleSubmit } = useSubmit(formConfig);

  async function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    await emailjs
      .sendForm(
        'service_4avde09',
        'template_y0wt3hw',
        e.currentTarget,
        'nUZrVaq5TEaCyWiX2',
      )
      .then((error) => {
        console.log(error.text);
      })
      .catch((err) => console.error(err));

    e.currentTarget.reset();
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.title}>
          <Label className={styles.heading}>{t('workWithUs:label')}</Label>
          <span className={styles.title__text}>{t('workWithUs:title')}</span>
        </div>
        <form onSubmit={sendEmail} className={styles.form}>
          <div className={styles.form__fields}>
            <div className={styles.form__fields__upper}>
              <TextField
                className={styles.field}
                name="name"
                placeholder={t('workWithUs:form.name.placeholder')}
                value={formConfig[FormField.Name]}
                hasError={fieldErrors[FormField.Name]}
                onChange={handleChange}
              />
              <TextField
                className={styles.field}
                name="phone"
                placeholder={t('workWithUs:form.phone.placeholder')}
                value={formConfig[FormField.Phone]}
                hasError={fieldErrors[FormField.Phone]}
                onChange={handleChange}
              />
            </div>
            <div className={styles.form__fields__bottom}>
              <TextField
                className={styles.field}
                name="comment"
                placeholder={t('workWithUs:form.comment.placeholder')}
                value={formConfig[FormField.Comment]}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={styles.form__button}>
            <Button
              className={styles.button}
              size="l"
              theme="white"
              hasArrow
              type="submit"
              isDisabled={
                !formConfig[FormField.Name] ||
                !formConfig[FormField.Phone] ||
                !formConfig[FormField.Comment]
              }
            >
              {t('workWithUs:button')}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default memo(WorkWithUs);
