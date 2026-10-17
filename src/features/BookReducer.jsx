const initialBooks=[
    {
    id: 1,
    title: "Le Petit Prince",
    author: "Antoine de Saint-Exupéry",
    year: 1943,
    genre: "Roman",
    cover: "https://covers.openlibrary.org/b/id/8231856-M.jpg",
    liked: false,
    inReadingList: false
  },
  {
    id: 2,
    title: "Les Misérables",
    author: "Victor Hugo",
    year: 1862,
    genre: "Classique",
    cover: "https://covers.openlibrary.org/b/id/12645114-M.jpg",
    liked: false,
    inReadingList: false
  },
  {
    id: 3,
    title: "L'Étranger",
    author: "Albert Camus",
    year: 1942,
    genre: "Roman",
    cover: "https://covers.openlibrary.org/b/id/10521220-M.jpg",
    liked: false,
    inReadingList: false
  }
];
export const initialState={
    books:initialBooks,
    filter:"Tous"
};
export default function BookReducer(state,action){
    switch (action.type){
        case "TOGGLE_LIKE":
            return{
                ...state,
                books:state.books.map(book=>
                book.id===action.payload
                ?{...book,liked:!book.liked}
                :book
                )
            };

        case "ADD_TO_READING_LIST":
      return {
        ...state,
        books: state.books.map(book =>
          book.id === action.payload
            ? { ...book, inReadingList: true }
            : book
        )
      };

    case "REMOVE_FROM_READING_LIST":
      return {
        ...state,
        books: state.books.map(book =>
          book.id === action.payload
            ? { ...book, inReadingList: false }
            : book
        )
      };

    case "REMOVE_BOOK":
      return {
        ...state,
        books: state.books.filter(
          book => book.id !== action.payload
        )
      };

    case "FILTER":
      return {
        ...state,
        filter: action.payload
      };

    default:
      return state;
  }
}