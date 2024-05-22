import { Book } from "./Book";

export interface Library {
	id: string;
	name: string;
	location: string;
	books: Book[];
}
