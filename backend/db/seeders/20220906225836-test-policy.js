'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Policies', [
      {
        name: 'Best Policy 2000',
        premium: 150,
        description: 'This shit covers everything',
        agentName: 'Bob Sizzle'
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Policies', {
      name: { [Op.in]: ['Bilbo'] }
    }, {});
  }
};