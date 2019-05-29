import { BoxFilter, BoxSelect } from './styles';
import {
  Divider,
  Icon,
  Modal,
  Row,
  Select,
  Table,
} from 'antd';
import React, { Component } from 'react';
import {
  addColaborador,
  deleteColaborador,
  fetchColaborador,
  filterColaborador,
  updateColaborador,
} from '../../../actions/colaborador';

import { Button } from '../../library';
import Form from './form';
import Page from '../Page';
import { connect } from 'react-redux';
import moment from 'moment';

const { confirm } = Modal;
const { Option } = Select;

class Colaborador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      colaborador: {},
      mes: '0',
      dia: '0',
    };

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.showDeleteConfirm = this.showDeleteConfirm.bind(this);
    this.handleChange = this.handleChange.bind(this);

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
        deleteColaborador(colaborador.uuid).then(() => {
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

  handleChange(item, value) {

    this.setState({
      [item]: value,
    }, () => {
      if(parseInt(this.state.mes) > 0 || parseInt(this.state.dia)) {
        this.props.filterColaborador(this.state.mes, this.state.dia)
      } else {
        this.props.fetchColaborador()
      }
    });
  }

  render() {
    const { addColaborador, updateColaborador, colaborador, toastManager } = this.props;
    const { mes, dia } = this.state;

    const columns = [
      {
        title: 'Nome',
        dataIndex: 'nome',
        key: 'nome',
      },
      {
        title: 'Descrição',
        dataIndex: 'descricao',
        key: 'descricao',
      },
      {
        title: 'Data de Nascimento',
        dataIndex: 'nascimento',
        key: 'nascimento',
        render: text => moment(text).format('DD/MM/YYYY'),
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
        <Row type="flex" justify="space-between" align="middle">
          <BoxFilter>
            <h3>Filtro</h3>
            <BoxSelect>
              <span style={{ paddingLeft: '.4em' }}>Dia</span>
              <Select
                style={{ width: 90 }}
                value={dia}
                onChange={value => this.handleChange('dia', value)}
              >
                <Option value='0'>Todos</Option>
                {[...Array(31).keys()].map(e => (
                  <Option value={e + 1}> {e + 1}</Option>
                ))}
              </Select>
            </BoxSelect>

            <BoxSelect>
              <span style={{ paddingLeft: '.4em' }}>Mês</span>
              <Select
                style={{ width: 120 }}
                value={mes}
                onChange={value => this.handleChange('mes', value)}
              >
                <Option value="0">Todos</Option>
                <Option value="1">Janeiro</Option>
                <Option value="2">Fevereiro</Option>
                <Option value="3">Março</Option>
                <Option value="4">Abril</Option>
                <Option value="5">Maio</Option>
                <Option value="6">Junho</Option>
                <Option value="7">Julho</Option>
                <Option value="8">Agosto</Option>
                <Option value="9">Setembro</Option>
                <Option value="10">Outubro</Option>
                <Option value="11">Novembro</Option>
                <Option value="12">Dezembro</Option>
              </Select>
            </BoxSelect>
          </BoxFilter>
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
            toastManager={toastManager}
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
    filterColaborador,
  },
)(Colaborador);
