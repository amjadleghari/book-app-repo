import { Serializer } from '../model/serializer';
import { Book } from '../model/book';

export class BookSerializer implements Serializer {
    fromJson(json: any): Book {
        const book = new Book(json.id, json.title, json.description, json.category);

        return book;
    }

    toJson(book: Book): any {
        return {
            id: book.id,
            title: book.title,
            description: book.description,
            category: book.category
        };
    }
}
