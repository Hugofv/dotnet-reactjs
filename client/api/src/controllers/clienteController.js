const express = require('express');

const Cliente = require('../models/Cliente');

const router = express.Router();

router.post('/', (req, res) => {
  try {
    return Cliente.findOne({
      $or: [{ documento: req.body.documento }, { email: req.body.email }]
    })
      .then(result => {
        if (result) {
          return res.status(409).send({
            error:
              'O Cliente informado já se encontra cadastrado, Verifique o documento e o e-mail.'
          });
        }

        delete req.body._id;
        Cliente.create(req.body).then(cliente => {
          return res.status(201).send(cliente);
        });
      })
      .catch(err => {
        console.log(err);
        return res.status(500).send({
          error: 'Houve algum problema, Favor contactar o administrador.'
        });
      });
  } catch (err) {
    return res.status(500).send({
      error: 'Houve algum problema, Favor contactar o administrador.'
    });
  }
});

router.put('/', (req, res) => {
  try {
    return Cliente.findOne({ _id: req.body._id }).then(result => {
      if (!result) {
        return res.status(404).send({
          error: 'O Cliente informado não se encontra cadastrado.'
        });
      }
      Cliente.findOne({
        _id: { $ne: req.body._id },
        $or: [{ documento: req.body.documento }, { email: req.body.email }]
      }).then(result => {
        if (result) {
          return res.status(409).send({
            error:
              'O Cliente informado já se encontra cadastrado, Verifique o documento e o e-mail.'
          });
        }

        Cliente.update({ _id: req.body._id }, req.body).then(cliente => {
          return res.status(200).send(cliente);
        });
      });
    });
  } catch (err) {
    return res.status(400).send({
      error: 'Houve algum problema, Favor contactar o administrador.'
    });
  }
});

router.get('/', async (req, res) => {
  try {
    const cliente = await Cliente.find({});
    return res.status(200).send(cliente);
  } catch (err) {
    return res.status(404).send({ error: 'Não possui registros cadastrados.' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    return Cliente.findOne({ _id: req.params.id }).then(result => {
      if (!result) {
        return res.status(404).send({
          error: 'O Cliente informado não se encontra cadastrado.'
        });
      }
      Cliente.deleteOne({ _id: req.params.id }).then(() => {
        return res.status(200).send();
      });
    });
  } catch (err) {
    console.log(err);
    return res.status(404).send({
      error: 'Houve algum problema, Favor contactar o administrador.'
    });
  }
});

module.exports = app => app.use('/cliente', router);
