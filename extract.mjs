import { Project, SyntaxKind } from "ts-morph";
import fs from "fs";

const project = new Project();
project.addSourceFileAtPath("src/lib/translations-context.tsx");
const file = project.getSourceFileOrThrow("src/lib/translations-context.tsx");

const translationsDefault = file.getVariableDeclarationOrThrow("translations");
const objectLiteral = translationsDefault.getInitializerIfKindOrThrow(SyntaxKind.ObjectLiteralExpression);

const enProperty = objectLiteral.getPropertyOrThrow("en");
const enObject = enProperty.getInitializerIfKindOrThrow(SyntaxKind.ObjectLiteralExpression);

const projectsProperty = enObject.getPropertyOrThrow("projects");
const projectsObject = projectsProperty.getInitializerIfKindOrThrow(SyntaxKind.ObjectLiteralExpression);

// Output the raw text of the en.projects
fs.writeFileSync("/tmp/en_projects.ts", projectsObject.getText());
console.log("Extracted en.projects");
