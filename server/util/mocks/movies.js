const moviesMock = [{
        id: 'a39200d0-f803-42ef-9154-3f3222814d81',
        title: 'Story of Mankind, The',
        year: 2003,
        cover: 'http://dummyimage.com/178x172.png/5fa2dd/ffffff',
        description: 'Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
        duration: 1927,
        contentRating: 'R',
        source: 'https://hostgator.com/arcu/sed/augue/aliquam/erat.html',
        tags: ['Comedy|Fantasy|Musical', 'Drama|Romance', 'Western'],
    },
    {
        id: '46d867e6-8257-42cf-ab93-ceb8599d7203',
        title: "Nora's Will (Cinco días sin Nora)",
        year: 2002,
        cover: 'http://dummyimage.com/185x110.jpg/cc0000/ffffff',
        description: 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
        duration: 2002,
        contentRating: 'R',
        source: 'http://theguardian.com/dapibus/duis.aspx',
        tags: ['Comedy', 'Drama'],
    },
    {
        id: '5043feaf-06bd-4fc4-8e11-78d571c9a0c1',
        title: 'Force 10 from Navarone',
        year: 2008,
        cover: 'http://dummyimage.com/113x126.jpg/ff4444/ffffff',
        description: 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
        duration: 1972,
        contentRating: 'G',
        source: 'http://digg.com/cursus/id/turpis/integer/aliquet.json',
        tags: [
            'Adventure|Comedy|Crime',
            'Documentary|Drama|War',
            'Animation|Children|Comedy',
            'Thriller',
            'Children|Drama',
        ],
    },
    {
        id: '2be1add2-cf62-40d5-8f3f-1e524391b9f2',
        title: 'Solitary Man',
        year: 1984,
        cover: 'http://dummyimage.com/155x128.jpg/dddddd/000000',
        description: 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
        duration: 1916,
        contentRating: 'G',
        source: 'https://list-manage.com/duis/bibendum/felis/sed/interdum.json',
        tags: ['Documentary', 'Mystery|Sci-Fi|Thriller', 'Comedy|Drama|Romance'],
    },
    {
        id: '082ea4e4-79b8-440a-9ec9-6da37a6c3ba5',
        title: 'On Dangerous Ground',
        year: 1997,
        cover: 'http://dummyimage.com/143x122.jpg/ff4444/ffffff',
        description: 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
        duration: 1958,
        contentRating: 'G',
        source: 'http://google.it/lorem/quisque/ut/erat/curabitur.html',
        tags: [
            'Romance',
            'Comedy|Horror',
            'Drama',
            'Crime|Drama|Mystery',
            'Action|Sci-Fi',
        ],
    },
    {
        id: 'cd0c78e4-17a2-43c3-a156-903f2037a61a',
        title: 'Benigni',
        year: 2006,
        cover: 'http://dummyimage.com/226x101.png/cc0000/ffffff',
        description: 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
        duration: 1900,
        contentRating: 'PG',
        source: 'http://webeden.co.uk/sapien/sapien/non/mi.html',
        tags: [
            'Documentary',
            'Comedy|Drama',
            'Drama',
            'Drama',
            'Crime|Drama|Mystery',
        ],
    },
    {
        id: '50878351-416d-4d6f-a3c7-2026e7795b20',
        title: 'Borrowed Hearts (Borrowed Hearts: A Holiday Romance)',
        year: 2009,
        cover: 'http://dummyimage.com/203x116.png/dddddd/000000',
        description: 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
        duration: 1894,
        contentRating: 'G',
        source: 'https://slashdot.org/mauris/eget/massa.png',
        tags: ['Comedy', 'Comedy'],
    },
    {
        id: '8f1fda59-37b7-47dc-95e7-88ae170f18cc',
        title: 'Puppetry of the Penis: Live at the Forum (Puppetry of the Penis: The Ancient Art of Genital Origami)',
        year: 2008,
        cover: 'http://dummyimage.com/135x156.bmp/cc0000/ffffff',
        description: 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
        duration: 1923,
        contentRating: 'R',
        source: 'https://accuweather.com/placerat.html',
        tags: [
            'Drama|Horror',
            'Drama|Sci-Fi',
            'Comedy|Romance',
            'Drama',
            'Comedy|Musical|Romance',
        ],
    },
    {
        id: '446cea6f-4088-4392-b752-70196b3168fd',
        title: 'Pornographer, The (Le pornographe)',
        year: 1988,
        cover: 'http://dummyimage.com/163x163.png/5fa2dd/ffffff',
        description: 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
        duration: 1973,
        contentRating: 'R',
        source: 'http://sakura.ne.jp/volutpat/erat/quisque/erat.jpg',
        tags: [
            'Drama|Mystery|Romance',
            'Drama',
            'Comedy|Drama',
            'Comedy|Western',
            'Comedy|Drama',
        ],
    },
    {
        id: 'df822a70-bee0-42c5-87e8-45ee6d4bc399',
        title: 'Cutie and the Boxer',
        year: 2009,
        cover: 'http://dummyimage.com/126x183.bmp/dddddd/000000',
        description: 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
        duration: 1960,
        contentRating: 'PG-13',
        source: 'http://dailymail.co.uk/libero/convallis/eget/eleifend/luctus/ultricies/eu.aspx',
        tags: ['Comedy|Fantasy|Romance'],
    },
];

function filteredMoviesMock(tag) {
    return moviesMock.filter((movie) => movie.tags.includes(tag));
}

class MoviesServiceMock {
    async getMovies() {
        return Promise.resolve(moviesMock);
    }

    async createMovie() {
        return Promise.resolve(moviesMock[0]);
    }
}

module.exports = {
    moviesMock,
    filteredMoviesMock,
    MoviesServiceMock,
};