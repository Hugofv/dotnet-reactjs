import {
  Button,
  Fieldset,
  InputMessageError,
  RadioButton,
  TextField
} from '../../library';
import { Cnpj, Cpf, Telefone } from '../../../utils/mask';
import { Col, Row } from 'antd';

import { Formik } from 'formik';
import React from 'react';

const Form = props => {
  return (
    <div>
      <Formik
        enableReinitialize
        initialValues={{
          id: props.colaborador._id || '',
          nome: props.colaborador.nome || '',
          nascimento: props.colaborador.nascimento || '',
          foto: props.colaborador.foto || '',
          descricao: props.colaborador.descricao || {},
        }}
        validate={values => {
          const errors = {};
         
          if (!values.nome) {
            errors.nome = 'Campo Obrigatório';
          }

          if (!values.idade) {
            errors.idade = 'Campo Obrigatório';
          }
          return errors;
        }}
        onSubmit={values => {
          if (values._id) {
            props.updateColaborador(values).then(() => {
              props.toastManager.add('Colaborador atualizado com sucesso.', {
                appearance: 'success',
                autoDismiss: true,
                pauseOnHover: true
              });
              props.hideModal();
            });
          } else {
            props.addColaborador(values).then(() => {
              props.toastManager.add('Colaborador cadastrado com sucesso.', {
                appearance: 'success',
                autoDismiss: true,
                pauseOnHover: true
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
        }) => (
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
                <TextField
                  title="Nascimento"
                  name="nascimento"
                  value={values.nascimento}
                  onChange={handleChange}
                />
                <InputMessageError>
                  {errors.nascimento && touched.nascimento && errors.nascimento}
                </InputMessageError>
              </Row>

              <Row>
                <TextField
                  title="Descrição"
                  name="descricao"
                  value={values.descricao}
                  onChange={handleChange}
                />
              </Row>

              <Row>
                <Col span={7}>
                  <TextField
                    title="Latitude"
                    name="localizacao.latitude"
                    value={values.localizacao.latitude}
                    maxLength="15"
                    onChange={handleChange}
                  />
                </Col>
              </Row>

              <Row type="flex" justify="end">
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
              </Row>
            </Fieldset>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Form;
