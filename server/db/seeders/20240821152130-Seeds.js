'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert(
				'Todos',
				[
					{
						name: 'John Doe',
						check: false,
					},
					{
						name: 'John Gou',
						check: true,
					},
					{
						name: 'John Jouler',
						check: false,
					},
				],
				{},
			);
    
  },

  async down (queryInterface, Sequelize) {

      await queryInterface.bulkDelete('Todos', null, {});
     
  }
};
