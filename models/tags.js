module.exports = (sequelize, DataTypes) => {
	var Tags = sequelize.define('Tags', {
		id          : { type: DataTypes.BIGINT(12), allowNull: false, autoIncrement: true, Unsigned: true, primaryKey: true, field: 'id' },
		typeName    : { type: DataTypes.STRING, allowNull: false, field: 'typeName' },
		tagName    : { type: DataTypes.STRING, allowNull: false, field: 'tagName' },

	}, {
		timestamps: true,
		createdAt: 'created_dt',
		updatedAt: 'changed_dt',
		tableName: 'Tags'
	});
	return Tags;
};