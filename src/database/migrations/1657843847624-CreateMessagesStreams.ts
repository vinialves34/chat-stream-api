import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateMessagesStreams1657843847624 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "messages_streams",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
          },
          {
            name: "text",
            type: "varchar",
          },
          {
            name: "stream_id",
            type: "int",
          },
          {
            name: "user_id",
            type: "uuid",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "deleted_at",
            type: "timestamp",
            default: "now()",
          },
        ],
        foreignKeys: [
          {
            name: "FKStreamMessageStream",
            referencedTableName: "streams",
            referencedColumnNames: ["id"],
            columnNames: ["stream_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
          {
            name: "FKUserMessageStream",
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            columnNames: ["user_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          }
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("messages_streams", "FKUserMessageStream");

    await queryRunner.dropForeignKey(
      "messages_streams",
      "FKStreamMessageStream"
    );

    await queryRunner.dropTable("messages_streams");
  }
}
