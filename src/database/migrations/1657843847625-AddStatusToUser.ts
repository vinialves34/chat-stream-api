import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from "typeorm";

export class AddStatusToUser1657843847625 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      "users",
      new TableForeignKey({
        name: "FKStatusUser",
        columnNames: ["status_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "status",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("users", "FKStatusUser");
  }
}
