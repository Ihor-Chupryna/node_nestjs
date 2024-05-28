import { MigrationInterface, QueryRunner } from "typeorm";

export class AddColumnLastName1716888425919 implements MigrationInterface {
    name = 'AddColumnLastName1716888425919'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "lastName" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "lastName"`);
    }

}
