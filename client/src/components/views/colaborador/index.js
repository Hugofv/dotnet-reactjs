import {
  Divider,
  Icon,
  Modal,
  Row,
  Table,
  Tag,
} from 'antd';
import React, { Component } from 'react';
import {
  addColaborador,
  deleteColaborador,
  fetchColaborador,
  updateColaborador,
} from '../../../actions/colaborador';

import { Button } from '../../library';
import Form from './form';
import Page from '../Page';
import { connect } from 'react-redux';

const { confirm } = Modal;

class Colaborador extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false, colaborador: {} };

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.showDeleteConfirm = this.showDeleteConfirm.bind(this);

    document.title = 'Colaborador';
  }

  componentDidMount() {
    this.props.fetchColaborador();
  }

  showModal(colaborador) {
    this.setState({
      visible: true,
      colaborador: colaborador || {},
    });
  }

  hideModal() {
    this.setState({
      visible: false,
      colaborador: {},
    });
  }

  showDeleteConfirm(colaborador) {
    const { deleteColaborador, toastManager } = this.props;

    confirm({
      title: 'Voce tem certeza que deseja excluir esse colaborador?',
      content: colaborador.nome,
      okText: 'Sim',
      okType: 'danger',
      cancelText: 'Não',
      onOk() {
        deleteColaborador(colaborador._id).then(() => {
          toastManager.add('Colaborador excluído com sucesso.', {
            appearance: 'success',
            autoDismiss: true,
            pauseOnHover: true,
          });
        });
      },
      onCancel() {},
    });
  }

  render() {
    const { addColaborador, updateColaborador, colaborador } = this.props;
    const columns = [
      {
        title: 'Nome',
        dataIndex: 'nome',
        key: 'nome',
      },
      {
        title: 'Idade',
        dataIndex: 'idade',
        key: 'idade',
      },
      {
        title: 'Gênero',
        key: 'genero',
        dataIndex: 'genero',
        render: genero => (
          <span>
            {
              <Tag color={genero == 'masculino' ? 'geekblue' : 'green'} key={genero}>
                {genero.toUpperCase()}
              </Tag>
            }
          </span>
        ),
      },
      {
        title: 'Latitude',
        dataIndex: 'localizacao.latitude',
        key: 'latitude',
      },
      {
        title: 'Longitude',
        dataIndex: 'localizacao.longitude',
        key: 'longitude',
      },
      {
        title: 'Ação',
        key: 'action',
        render: (text, record) => (
          <span>
            <Icon
              type="edit"
              theme="outlined"
              onClick={() => this.showModal(record)}
              style={{ color: '#08c', fontSize: '20px', cursor: 'pointer' }}
            />
            <Divider type="vertical" />
            <Icon
              type="delete"
              theme="outlined"
              onClick={() => this.showDeleteConfirm(record)}
              style={{ color: '#FF0000', fontSize: '20px', cursor: 'pointer' }}
            />
          </span>
        ),
      },
    ];

    return (
      <Page>
        <Row type="flex" justify="end">
          <Button primary onClick={() => this.showModal()}>
            <Icon type="plus" />
            Cadastrar
          </Button>
        </Row>

        <Modal
          visible={this.state.visible}
          onCancel={e => this.hideModal(e)}
          okText="Salvar"
          width="40%"
          footer={[null, null]}
        >
          <Form
            hideModal={() => this.hideModal()}
            addColaborador={addColaborador}
            updateColaborador={updateColaborador}
            colaborador={this.state.colaborador}
            toastManager={this.props.toastManager}
          />
        </Modal>

        <Table columns={columns} dataSource={colaborador} rowKey="nome" />
      </Page>
    );
  }
}

function mapStateToProps(state) {
  return {
    colaborador: state.colaborador,
    error: state.error,
  };
}

export default connect(
  mapStateToProps,
  {
    addColaborador,
    updateColaborador,
    fetchColaborador,
    deleteColaborador,
  },
)(Colaborador);
