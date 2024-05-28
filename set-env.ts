// set-env.ts
const { writeFile } = require("fs");
const { argv } = require("yargs");
const dotenv = require("dotenv");
dotenv.config();

const environmentFileContent = `
export const environment = {
  production: ${process.env["PRODUCTION"] === "true"},
  apiUrl: "${process.env["API_URL"]}"
};
`;

writeFile(
	`./src/environments/environment.ts`,
	environmentFileContent,
	(err: any) => {
		if (err) {
			console.log(err);
		}
		console.log(`Environment file created: environment.ts`);
	}
);
