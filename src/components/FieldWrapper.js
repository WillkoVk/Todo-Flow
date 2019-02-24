// @flow

import React, { type Node } from 'react';
import { ErrorMessage } from 'formik';

export type Props = {
  label: string,
  fieldName: string,
  withValidation?: boolean,
  children: Node
};

const FieldWrapper = ({ label, fieldName, withValidation, children }: Props) => (
  <div className="field-wrapper">
    <label htmlFor={fieldName}>{label}</label>
    {children}
    {withValidation && <small className="error"><ErrorMessage name={fieldName} /></small>}
  </div>
);

export default FieldWrapper;