import {
  Button,
  Fieldset,
  InputMessageError,
  RadioButton,
  TextField,
} from '../../library';
import { Col, DatePicker, Row } from 'antd';

import { Formik } from 'formik';
import React from 'react';
import Util from '../../../utils/util';
import locale from 'antd/lib/date-picker/locale/pt_BR';

const Form = props => (
  <div>
    <Formik
      enableReinitialize
      initialValues={{
        id: props.colaborador._id || '',
        nome: props.colaborador.nome || '',
        nascimento: props.colaborador.nascimento || '',
        foto: props.colaborador.foto || '',
        descricao: props.colaborador.descricao || '',
      }}
      validate={(values) => {
        const errors = {};

        if (!values.nome) {
          errors.nome = 'Campo Obrigatório';
        }

        if (!values.idade) {
          errors.idade = 'Campo Obrigatório';
        }
        return errors;
      }}
      onSubmit={(values) => {
        if (values._id) {
          props.updateColaborador(values).then(() => {
            props.toastManager.add('Colaborador atualizado com sucesso.', {
              appearance: 'success',
              autoDismiss: true,
              pauseOnHover: true,
            });
            props.hideModal();
          });
        } else {
          props.addColaborador(values).then(() => {
            props.toastManager.add('Colaborador cadastrado com sucesso.', {
              appearance: 'success',
              autoDismiss: true,
              pauseOnHover: true,
            });
            props.hideModal();
          });
        }
      }}
    >
      {({
        values,
        errors,
        touched,
        handleSubmit,
        handleChange,
        resetForm,
        setFieldValue,
      }) => {
        const onChange = (date, dateString) => {
          console.log(date, dateString);
        };

        const setImagem = (item, event) => {
          const file = event.target.files[0];
          setFieldValue(`${item}`, Util.readUploadedFileAsText(file));
        };

        return (
          <form>
            <Fieldset legend="Cadastrar Colaborador">
              <Row style={{ marginTop: '1em' }}>
                <TextField
                  title="Nome"
                  name="nome"
                  onChange={handleChange}
                  value={values.nome}
                  error={errors.nome && touched.nome && errors.nome}
                />
                <InputMessageError>
                  {errors.nome && touched.nome && errors.nome}
                </InputMessageError>
              </Row>

              <Row>
                <span style={{ paddingLeft: '1.4em' }}>Data de Nascimento</span>
                <DatePicker
                  onChange={onChange}
                  style={{ width: '100%', borderRadius: '8px' }}
                  locale={locale}
                  format="DD/MM/YYYY"
                />
                <InputMessageError>
                  {errors.nascimento && touched.nascimento && errors.nascimento}
                </InputMessageError>
              </Row>

              <Row style={{ marginTop: '1em' }}>
                <TextField
                  title="Descrição"
                  name="descricao"
                  value={values.descricao}
                  onChange={handleChange}
                />
              </Row>

              <Row type="flex" justify="space-between">
                <input
                  id="inputFoto"
                  style={{ display: 'none' }}
                  type="file"
                  name="foto"
                  accept="image/*"
                  capture
                  onChange={event => setImagem('foto', event)}
                />

                <Button
                  type="reset"
                  onClick={() => document.getElementById('inputFoto').click()}
                >
                  Foto
                </Button>
                <div>
                  <Button
                    type="reset"
                    onClick={() => {
                      props.hideModal();
                      resetForm();
                    }}
                  >
                    Cancelar
                  </Button>
                  <Button
                    primary
                    type="button"
                    onClick={() => handleSubmit(values)}
                  >
                    Salvar
                  </Button>
                </div>
              </Row>
            </Fieldset>
          </form>
        );
      }}
    </Formik>
  </div>
);

export default Form;
