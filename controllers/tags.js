const Tags = require('../models').Tags;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const create = async function (req, res) {

	const TagsInfo = req.body;

	try {
		if (!TagsInfo)
			return res.status(400).json({ erorr: 'Please fill form data' });
	
					Tags.create({
						typeName: TagsInfo.typeName,	
                        tagName: TagsInfo.tagName					
				
					})
						.then(Obj => {

							res.status(200).json({ message: 'Tags successfully!'});

						})
						.catch(err => res.status(500).json({ erorr: err }));
					

	} catch (error) {
		res.send({ message: error.message });
	}


};


const getAll = async function (req, res) {
	try {
		await Tags.findAll({})
			.then(resData => {
				return res.status(200).send({ resData, msg: 'Tags search Successfully!' });

			})
			.catch(err => {
				return res.send({ message: err.message });
			});

	} catch (error) {
		res.send({ message: error.message });

	}


};


const getAllWithSameTagtype = async function (req, res) {
    const typeNameQuery = req.params.typeName
    const tagNameQuery = req.params.tagName

    var condition = tagNameQuery&&tagNameQuery ? 
              {
                [Op.and]: [{
                    typeName: {
                            [Op.like]: `%${typeNameQuery}%`
                        }
                    },
                    {
                        tagName: {
                            [Op.like]: `%${tagNameQuery}%`
                        }
                    },
                  
                ]
            }  
              : null;
  
    try {
		await Tags.findAll({ where: condition })
			.then(resData => {
				return res.status(200).send({ resData, msg: 'Tags search Successfully!' });

			})
			.catch(err => {
				return res.send({ message: err.message });
			});

	} catch (error) {
		res.send({ message: error.message });

	}


};


module.exports = {
	create,
	getAll,
    getAllWithSameTagtype

};

