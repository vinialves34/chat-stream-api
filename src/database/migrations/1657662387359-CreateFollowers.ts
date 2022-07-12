import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class CreateFollowers1657662387359 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "followers",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
          },
          {
            name: "user_follower_id",
            type: "uuid",
          },
          {
            name: "user_followed_id",
            type: "uuid",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );

    await queryRunner.createForeignKeys("followers", [
      new TableForeignKey({
        columnNames: ["user_follower_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "users",
      }),
      new TableForeignKey({
        columnNames: ["user_followed_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "users",
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("followers");
  }
}
