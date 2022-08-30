import dataType from "sequelize";
import connection from "../util/connection";
import { UUIDV4 } from "sequelize";

async function init(connection) {
  connection.define(
    "Hackathons",
    {
      id: {
        type: dataType.UUID,
        primaryKey: true,
        defaultValue: UUIDV4(),
      },
      name: {
        type: dataType.STRING,
        allawNull: false,
      },
      type: {
        type: dataType.ENUM(
          "flutter",
          "frontend",
          "backend",
          "fullstack",
          "machine learning",
          "deep Learning",
          "data Analysis",
          "Cyper Security"
        ),
        allawNull: false,
      },
      canRegister: {
        type: dataType.BOOLEAN,
        allawNull: false,
      },
      date: {
        type: dataType.DATE,
        allawNull: false,
      },
    },
    {
      createdAt: false,
      updatedAt: false,
    }
  );
}
export { init };
