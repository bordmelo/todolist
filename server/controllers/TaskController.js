const Task = require('../models/Task');

module.exports = {
  add: function (req, res) {
		let task = new Task(req.body);

		task.save()
			.then(task => res.status(200).json(task))
			.catch(err => {
				res.status(400).send("Erro ao inserir tarefa: " + err)
			});
	},
  getAll: function (req, res) {
    Task.find(function (err, tasks) {
      if (err) {
        res.status(400).send("Ocorreu um erro ao buscar as Tarefas.");
      }
      else {
        res.status(200).json(tasks);
      }
    });
  },
  getById: function (req, res) {
    Task.findById(req.params.id, function (err, task) {
      if (err) {
        res.status(400).send("Ocorreu um erro ao encontrar tarefa " + err);
      }
      else {
        res.status(200).json(task);
      }
    })
  },
  delete: function (req, res) {
		Task.findByIdAndRemove(req.params.id, function (err, tasks) {
			if (err) {
				res.status(400).send("Erro ao tentar apagar tarefa " + err);
			}
			else {
				res.status(200).json(req.params.id);
			}
		});
	},
  update: function (req, res) {
    Task.findByIdAndUpdate(req.params.id, req.body, { new: true }, function (err, task) {
      if (err) {
        res.status(400).send("Ocorreu um erro ao alterar a Tarefa.", err);
      }
      else {
        res.status(200).json(task);
      }
    });
  }
};