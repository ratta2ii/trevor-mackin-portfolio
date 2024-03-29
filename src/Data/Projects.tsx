import { IProject } from "../Models/IProject";

const PortfolioProjectImgSmall = "/assets/Images/single-placeholder.png";

export const featuredProjectsArr: IProject[] = [
  {
    name: "AZ Movie Nights",
    techUsed: "JavaScript | React | Redux | Material-UI",
    mainImage: "/assets/Images/movie-nights-homepage.png",
    gitHubRepo: "https://github.com/ratta2ii/movie_night_app",
    liveSite: "https://ratta2ii.github.io/movie_night_app/#/",
    description: () => (
      <div>
        <p>
          This is a client-side application built with React. The project
          focuses on building a website for an outdoor movie theatre rental
          company. I used Redux for state management, EmailJS for email
          services, and Material-UI for all of the design. The application is
          100% responsive and built for both Mobile and Desktop.
        </p>
        <p>
          There are a small number of products that a user can choose from by
          clicking on an item. Once the user selects a product, a single page
          will be populated with the corresponding data. A user can then add
          this product to a shopping cart, view the entirety of their cart at
          its current state, move on to the checkout page, or return back to the
          list of products.
        </p>
        <p>
          When a user has decided that they have selected all relevant products,
          a user will then head to checkout where they will see their total
          costs, with taxes. The checkout form will include personal
          information, the day and time of the event, and any message the user
          may want to the business owner. This information, along with all the
          all the cart items, will then be used to populate an email response to
          confirm scheduling.
        </p>
      </div>
    ),
  },
  {
    name: "Csharp-React-Jwt-Auth",
    techUsed:
      "C# | .NET5.0 | TypeScript | React | Postgres | Docker | Entity Framework | MobX ",
    mainImage: "/assets/Images/csharp-react-jwt-auth-ss.png",
    gitHubRepo: "https://github.com/ratta2ii/csharp-react-jwt-auth",
    liveSite: "https://csharp-react-jwt-auth.herokuapp.com",
    description: () => (
      <div>
        <p>
          The purpose of this application is to demonstrate a working knowledge
          of authentication, authorization in the context of Json Web Tokens
          (JWT's), as well as how to make an application more secure through the
          implementation of security headers. In addition to the Auth services,
          the project also demonstrates an understanding on how to build a
          dynamic web application (full-stack), and how to deploy it to a
          production environment.
        </p>
        <ul>
          <li>
            C#/.NET5.0 back-end API, with a TypeScript/React front-end client
          </li>
          <li>Containerized database using docker and Postgres</li>
          <li>
            The React client is hosted side-by-side to the back-end API on
            Heroku (PaaS)
          </li>
          <li>
            The back-end API is serving the React build files from a wwwroot
            folder (triggered by a post-build event)
          </li>
        </ul>
      </div>
    ),
  },
  {
    name: "MERN Stack Authentication",
    techUsed:
      "MongoDB | Express | React | Node.js | TypeScript | MobX | Passport.js",
    mainImage: "/assets/Images/screenshot-landing-page.png",
    // mainImage: "/assets/Images/screenshot-landing-page.png",
    gitHubRepo: "https://github.com/ratta2ii/mern-stack-authorization",
    liveSite: "https://mern-stack-authentication.herokuapp.com",
    description: () => (
      <div>
        <p>
          This application is a way to demonstrate a working knowledge of
          authentication, and authorization, at different security levels. The
          login services for the application include OAuth services, Salting and
          Hashing, as well as Cookies and Sessions.
        </p>
        <p>
          Google and Facebook OAuth strategies, w/ Passport.js middleware, are
          only one of ways that a user can be authenticated. These particular
          strategies work within the OAuth 2.0 protocols, and are also
          considered the most secure for this application (Security level 6).
        </p>
        <p>
          I have also added a "local" strategy as well, that allows a user to
          register a new account by entering a username (email) and password
          -instead of using the more secure OAuth services. The password will be
          a salted, hashed password (Security level 4), that will be stored in a
          MongoDB database.
        </p>
        <p>
          In addition to the Auth services, the application also demonstrates a
          working knowledge on how to both build, and deploy, a full-stack MERN
          application.
        </p>
      </div>
    ),
  },
  {
    name: "All's Sweets",
    techUsed: "JavaScript | React | EmailJS | Firebase",
    mainImage: "/assets/Images/allys-sweets-homepage.png",
    gitHubRepo: "https://github.com/ratta2ii/allys_sweets",
    liveSite: "https://allyssweets.com",
    description: () => (
      <div>
        <p>
          Freeze-dried candy sales.
        </p>
      </div>
    ),
  },
  {
    name: "Trevor Mackin Portfolio",
    techUsed: "JavaScript | TypeScript | React | Material-UI",
    mainImage: "/assets/Images/portfolio_homepage.png",
    gitHubRepo: "https://github.com/ratta2ii/trevor-mackin-portfolio",
    liveSite: "https://trevormackin.com",
    description: "",
  },
];

export const projectsArray: IProject[] = [
  {
    name: "MERN Stack Authentication",
    techUsed:
      "MongoDB | Express | React | Node.js | TypeScript | MobX | Passport.js",
    mainImage: PortfolioProjectImgSmall,
    // mainImage: "/assets/Images/screenshot-landing-page.png",
    gitHubRepo: "https://github.com/ratta2ii/mern-stack-authorization",
    liveSite: "https://mern-stack-authentication.herokuapp.com",
    description: () => (
      <div>
        <p>
          This application is a way to demonstrate a working knowledge of
          authentication, and authorization, at different security levels. The
          login services for the application include OAuth services, Salting and
          Hashing, as well as Cookies and Sessions.
        </p>
        <p>
          Google and Facebook OAuth strategies, w/ Passport.js middleware, are
          only one of ways that a user can be authenticated. These particular
          strategies work within the OAuth 2.0 protocols, and are also
          considered the most secure for this application (Security level 6).
        </p>
        <p>
          I have also added a "local" strategy as well, that allows a user to
          register a new account by entering a username (email) and password
          -instead of using the more secure OAuth services. The password will be
          a salted, hashed password (Security level 4), that will be stored in a
          MongoDB database.
        </p>
        <p>
          In addition to the Auth services, the application also demonstrates a
          working knowledge on how to both build, and deploy, a full-stack MERN
          application.
        </p>
      </div>
    ),
  },
  {
    name: "Movie Ratings App",
    techUsed: "JavaScript | React | Redux | Firebase | Material-UI",
    mainImage: PortfolioProjectImgSmall,
    // mainImage: "/assets/Images/movie_ratings_homepage.png",
    gitHubRepo: "https://github.com/ratta2ii/movie-ratings-app",
    liveSite: "https://ratta2ii.github.io/movie-ratings-app/#/",
    description: () => (
      <div>
        <p>
          Movie Ratings App is a client-side application that uses a Firebase
          database with client-side querying. The application is built using
          HTML, JavaScript with the React library, and Material UI and CSS for
          design.
        </p>
        <p>
          The application also uses an API (omdbapi.com) to retrieve a list of
          movies according to different search specifications. This particular
          application makes requests using a title name (inputted by the user)
          in the first API call, and then targets the ID of a single movie
          (selected by the user from the first response) in order to make
          another request for additional details at the same endpoint but with
          different parameters.
        </p>
        <p>
          I also implemented both upvote and downvote functionality for each
          movie selected by the user. Each time a movie is selected by the user,
          a database is queried in order to retrieve any upvotes and downvotes
          that may have been previously stored in the database for any given
          movie. If a movie has yet to be stored in the database, the vote
          counts will default to 0. The user is confined to one vote per movie;
          however, a user can deselect their current selection and then cast a
          new vote. Please note that the single vote per movie restrictions only
          work as long as a user remains on that page (since the application
          does not implement any type of authentication). Once the user has cast
          a vote (or deselected a previous vote), the users vote is then stored
          in a database under the currently selected movies ID.
        </p>
        <p>
          I also chose to use several additional technologies that I felt would
          be more in line with industry standards for a larger application. For
          example, instead of just drilling props to child components to handle
          the application state (arguably, maybe a better solution for an
          application of this size), I instead opted to use Redux for global
          state management. I also used multiple reducers in conjunction with a
          root reducer, action creators, constants, added middleware and a
          middleware logger, and structured the application in a way that would
          be more easily scalable for additional functionality.
        </p>
      </div>
    ),
  },
  {
    name: "Secrets-Authentication",
    techUsed:
      "JavaScript | Node.js | Express | MongoDB | Mongoose | Passport.js",
    mainImage: PortfolioProjectImgSmall,
    gitHubRepo: "https://github.com/ratta2ii/secrets-authentication",
    liveSite: "",
    description: () => (
      <div>
        <a href="https://github.com/ratta2ii/secrets-authentication">
          Please view GitHub README.md for project details
        </a>
      </div>
    ),
  },
  {
    name: "Reactivities",
    techUsed:
      "C# | .NET5.0 | React | TypeScript | MobX | EF Core | Semantic UI",
    mainImage: PortfolioProjectImgSmall,
    gitHubRepo: "https://github.com/ratta2ii/reactivities",
    liveSite: "",
    description: "",
  },
  {
    name: "Hair Salon",
    techUsed: "C# | APS.NET | Identity | Razor | Entity",
    mainImage: PortfolioProjectImgSmall,
    gitHubRepo: "https://github.com/ratta2ii/HairSalon.Solution",
    liveSite: "",
    description:
      "This is a server-side application built in C# using the ASP.NET Core Framework. The project focuses on connecting to a database using Entity Framework Core. The application is meant to be for a Salon owner to keep track of their stylists, and the clients that belong to each stylist individually. When a user runs the application, they should be welcomed on the landing page and given a link to view all stylist. From here, the user should be able to navigate to a page showing all the stylists with CRUD functionality, allowing a user to Add, Edit and Delete a stylist. When the user clicks on a particular stylist they will be presented with a list of clients for that specific stylist. From the list of clients, a user can then click on a specific client to view further details of the client as well. The application also provides all CRUD functionality for each of the clients.",
  },
  {
    name: "Pierre's Treats",
    techUsed: "C# | APS.NET | Identity | Razor | Entity",
    mainImage: PortfolioProjectImgSmall,
    gitHubRepo: "https://github.com/ratta2ii/PierresTreats.Solution",
    liveSite: "",
    description:
      "This is a server side MVC application built in C# using the ASP.NET Core framework. This project includes migrations using the Entity Framework (Core). This app also demonstrates a working knowledge of both Authentication and Authorization using ASP.NET Identity. A user should be able to view both products, Flavors and Treats, without having to sign in. If you a user wants access to the CRUD functionality in order add, edit, and delete products, the user must create an account and then sign in. After signing in, the user will have the option to add, edit, and delete, both flavors and treats. The application also has functionality to store the entire menu, as well as registered users within the database that was created using Entity Framework migrations. Lastly, the application demonstrates a many to many relationship, where multiple treats may belong to one flavor, and vice versa.",
  },
  {
    name: "Hiking Trails App",
    techUsed: "JavaScript | React | HTML | CSS",
    mainImage: PortfolioProjectImgSmall,
    gitHubRepo: "https://github.com/ratta2ii/hiking-trails-app",
    liveSite: "",
    description: "",
  },
  {
    name: "Animal Shelter",
    techUsed: "C# | APS.NET | Razor | Entity | MySQLite | Swagger",
    mainImage: PortfolioProjectImgSmall,
    gitHubRepo: "https://github.com/ratta2ii/AnimalShelterApi.Solution",
    liveSite: "",
    description:
      "The goal of this project was to build an application where an animal shelter site would become the provider of an API. The site then allows users to search for various animals by using query parameters. The application also demonstrates how to seed a database, and how to integrate with Swagger to gain access to the tools surrounding RESTful API's. The project is written in C# with ASP.NET framework.",
  },
  {
    name: "Cretaceous Park",
    techUsed: "C# | ASP.NET | Entity",
    mainImage: PortfolioProjectImgSmall,
    gitHubRepo: "https://github.com/ratta2ii/CretaceousPark.Solution",
    liveSite: "",
    description: "",
  },
  {
    name: "MVC API Calls",
    techUsed: "C# | ASP.NET",
    mainImage: PortfolioProjectImgSmall,
    gitHubRepo: "https://github.com/ratta2ii/MvcApiCall.Solution",
    liveSite: "",
    description: "",
  },
  {
    name: "Pizza Shop",
    techUsed: "JavaScript | React | HTML | CSS",
    mainImage: PortfolioProjectImgSmall,
    gitHubRepo: "https://github.com/ratta2ii/pizza-shop",
    liveSite: "",
    description: "",
  },
  {
    name: "Beer Shack",
    techUsed: "JavaScript | React | Webpack",
    mainImage: PortfolioProjectImgSmall,
    gitHubRepo: "https://github.com/ratta2ii/beerShack-react",
    liveSite: "",
    description:
      "This is a client-side application built in React. The focus of this project was to practice drilling down props to lower level components, as well as to show a fundamental understanding of lifting state. The application uses a brewery site that allows a user from the outside to view a list of all products. The app also includes an Authorization component, adding admin capabilities that will present an admin with additional functionality. From here, the admin has CRUD functionality and can add and delete new kegs of beer from product list, as well as place orders for beer. There is also functionality to notify an Admin once the 124 pints have been ordered from a specific keg (Time to refill). Please note that this project is early on into my React journey, so there are definitely some improvements that can be made. Most notably, using Redux to hold global state rather than drilling props down through multiple components.",
  },
];
