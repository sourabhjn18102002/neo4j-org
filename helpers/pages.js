exports.pages = {
    learn: {
        path: "/learn",
        title: "Learn",
        introText: "From graph concepts to deploying a globe spanning cluster, the path to success starts here.",
        featured: null,
        related: ["concepts", "intro", "tracks", "production"]
    },
    develop: {
        path: "/develop",
        title: "Develop",
        introText: "Learn how to develop applications with Neo4j and deploy Server instances.",
        featured: null,
        related: ["get_started", "drivers", "tools", "cloud", "ops"]
    },
    participate: {
        path: "/participate",
        title: "Participate",
        introText: "Connect with a friendly, engaging, and ever expanding community online or in person.",
        featured: null,
        related: ["q_and_a", "contributors", "events"]
    },
    concepts: {
        path: "/learn/concepts",
        title: "Graph Concepts",
        introText: "Learn about the graph data model, graph databases and their applicability. See how graph databases related to other NOSQL solutions.",
        featured: ["content_video_graphdb101"],
        actionText: "Learn more",
        related: [ "graphdatabase", "nosql","content_image_neo4j_ref_card" ]
    },
    intro: {
        path: "/learn/intro",
        title: "Neo4j Introduction",
        introText: "In order to get familiar with Graph Databases, Neo4j and Cypher, start with the following introduction sections.",
        featured: [
            {
                title: "Why Graphs",
                type: "video",
                thumbnail: "/assets/img/still/emil-explains.jpg",
                introText: "Emil Eifrem explains the secret behind websites like Twitter, Yelp and Facebook.",
                src: "http://player.vimeo.com/video/56040747"
            }
        ],
        related: [ "neo4j", "cypher", "tracks","content_image_neo4j_ref_card" ]
    },
    tracks: {
        path: "/learn/tracks",
        title: "Neo4j learning tracks",
        introText: "This is the starting point for a number of different tracks to learn more about Neo4j. Follow a track that you are interested in to learn more about different aspects of Neo4j.",
        featured: ["java"],
        actionText: "Choose your track",
        related: ["neo4j", "cypher"]
    },
    java: {
        path: "/java",
        type: "track",
        title: "Neo4j for Java devs",
        thumbnail: "/assets/img/languages/java.jpg",
        introText: "The Java track covers the Neo4j Core-API as well as interacting with the Neo4j Server from Java and other JVM languages",
        actionText: "Go Code",
        next: ["java_basics", "jvm"],
        prev: ["server_plugins"],
        featured: [
            {
                type: "track",
                title: "Java Intro",
                introText: "As the 4j indicates, Neo4j is a paradise for JVM developers. Welcome to the journey.",
                content: "<p>Welcome to Neo4j. For a Java or JVM-language developer, Neo4j offers a rich set of integration possibilities. Make sure to have looked at our information on <a href='/learn/graphdatabase'>graph databases</a> and Neo4j in general. You should also check out our graph query language Cypher which makes it very easy to get going regardless of the development platform.</p>\
    <p>Neo4j comes in two flavors. The standalone Neo4j-Server can be installed on any machine and then accessed via its REST API. You can then use whatever REST-library you choose for any JVM language. The dedicated Neo4j drivers go beyond that by offering comprehensive APIs for integrating with graph based applications.</p>\
    <p>But you can also run Neo4j embedded in your JVM process, much like HSQL or Derby. This is great for unit testing, but also for high performance / no-network setups. If you use Neo4j embedded you can use the Neo4j Core-API directly. Besides an object oriented approach to the graph database, working with Nodes, Relationships and Paths, it also offers highly customizable high-speed traversal- and graph-algorithm implementations. You can also choose from any useful wrapping drivers that exist either for specific programming languages or that add interesting functionality.</p>\
    <p>One example is Spring Data Neo4j which integrates tightly with the SpringFramework and offers Object-Graph mapping on top of Neo4j. Just to tease your interest - there are hundreds of open source Neo4j-related ecosystem projects, example applications and tutorials that can spark new ideas and possibilities.</p>\
    <p>As a JVM developer you are also on the bright side when it comes to pouring large amounts of data into Neo4j. With its non-transactional batch-insertion facilities it can ingest millions of nodes and relationships in just seconds.</p>"
            }
        ],
        related: [
            {
                title: "API JavaDoc",
                path: "http://api.neo4j.org/current/",
                thumbnail: "/assets/img/languages/java.jpg",
                introText: "Check out the Java API of the current milestone.",
                actionText: "Browse JavaDoc"
            },
            {
                title: "Manual: the Java Tutorial",
                path: "http://docs.neo4j.org/chunked/snapshot/tutorials-java-embedded.html",
                thumbnail: "/assets/img/languages/java.jpg",
                introText: "In the tutorial you will find everything needed — from setting up the environment to doing something useful with your data.",
                actionText: "Go to the manual"
            }
        ]
    },

    java_basics: {
        path: "/java/java_basics",
        title: "Java programming basics with Neo4j",
        introText: "",
        next: ["jvm"],
        prev: ["java"],
        featured: [
            {
                type: "track",
                content: "<p>The Neo4j Java API is very easy to use. You can interact with the GraphDatabase, Nodes and Relationships directly.\
                To run more interesting queries or complex operations you can also execute <a href=\"/java/java_cypher\">Cypher</a> from your program.</p>\
        <p>After including Neo4j in your project and <a href=\"/java/ide\">setting up your IDE</a>. See the Hello-World example below for getting started.</p>\
        <h3>Adding the Neo4j dependencies to your project</h3>\
        <% include ../download/_embedded_dependency %><div class=\"markdown\">\
        <%- content.java_hello_world %></div>"
            }
        ],
        related: ["neo4j"]

    },
    jvm: {
        path: "/java/jvm",
        title: "JVM projects",
        introText: "(TODO) Intro text for JVM projects",
        next: ["server_plugins"],
        prev: ["java_basics", "jvm"],
        featured: [
            {
                type: "track",
                content: "<ul><!-- todo replace with tiles -->\
                <li>Neo4j Spatial offering geospatial functionality on top of the graph</li>\
                <li>Structr a Java based custom Neo4j backend and CMS frontend</li>\
                <li>Neoclipse an Eclipse RCP based Neo4j workbench</li> \
                <li>Graph Collections a set of in-graph representations of typical data structures, like lists, trees etc.</li>\
                <li>Java Rest Binding which offers a Java API for the Neo4j-Server, built on jersey-client</li>\
                <li>The Neo4j JDBC driver which allows to run Cypher statements via JDBC and integrates so with all JDBC libraries and tools</li>\
                <li><a href='https://github.com/alexsmirnov/neo4j-connector'>Neo4j JCA connector</a></li>\
             </ul>"
            }
        ],
        related: []
    },
    server_plugins: {
        path: "/java/server_plugins",
        title: "Server plugins",
        introText: "If you are using Neo4j Server, you can use Server plugins written in Java to extend the functionality of the REST API.",
        next: ["java"],
        prev: ["jvm"],
        featured: [
            {
                type: "track",
                content: "the content"
            }
        ],
        related: [
            {
                title: "Neo4j Server manual",
                path: "http://docs.neo4j.org/chunked/milestone/server.html",
                thumbnail: "/assets/img/languages/java.jpg",
                introText: "Neo4j server manual sections",
                actionText: "Browse the neo4j server manual"
            }
        ]
    },

    production: {
        path: "/learn/production",
        title: "Going into Production",
        introText: "In order to run Neo4j in production scenarios, there are a number of aspects that need to be covered. Here you find some resources on putting Neo4j into production.",
        featured: {
            title: "Production Secrets",
            type: "video",
            thumbnail: "/assets/img/still/secrets.png",
            introText: "Maybe a day or two before you get featured on Techcrunch, make sure your application is fully production-ready.",
            src: "http://player.vimeo.com/video/49485027"
        },
        actionText: "Go into production",
        related: [
            "licensing",
            {
                title: "Partners Graph",
                introText: "Neo Technology works with a large, worldwide partner network which provide local consulting and training services.",
                path: "http://www.neotechnology.com/partners/"
            }

        ]
    },
    licensing: {
        path: "/learn/licensing",
        title: "Commercial Licensing",
        introText: "Neo4's enterprise editions are provided by Neo Technology for use in commercial, non open-source deployments.",
        actionText: "Read more",
        featured: [
            {
                title: "Pragmatic licensing guide",
                introText: "Understand which license you need and how Neo Technology can help you.",
                type: "article",
                content: "<p>Neo4j is commercial software. Proven in production since 2003, powering applications from global collaborative websites to in-house experiments, Neo4j is used in diverse environments.</p>\
    <p><a href='http://neotechnology.com'>Neo Technology</a> makes Neo4j available under a dual-license arrangement that is business friendly and open-source transparent: the Neo Technology Commercial License (NTCL), or the (A)GPLv3. Neo Technology also takes care of Neo4j customer support, (OEM) license agreements, the Partner Network, and more.</p>\
    <p>There are 3 editions of Neo4j:</p>\
    <ul>\
    <li><b>Neo4j Community</b>, a High Performance, fully ACID transactional graph database\
    <li><b>Neo4j Advanced</b> includes Advanced Monitoring\
    <li><b>Neo4j Enterprise</b> includes Online Backup, High Availability Clustering, and Advanced Monitoring\
    </ul>\
    <p>Commercial Licenses include the permission to integrate the enterprise editions in closed-source software products, service and support by Neo Technology.</p>"
            }
        ],
        related: []
    },
    partners: {
        path: "/learn/partners",
        title: "Partner Graph",
        //path : "http://www.neotechnology.com/partners/",
        introText: "Neo Technology works with a large, worldwide partner network which provide local consulting and training services.",
        actionText: "Read more",
        featured: [
            {
                title: "Neo4j Partners Graph",
                introText: "The Neo4j Partner Graph provides market differentiation and sustainable revenue opportunities for its members.",
                type: "article",
                content: "Program Benefits\
                <ul>\
    <li>Access to Neo4j, the world’s leading graph database and its global community of experts\
    <li>Effective field engagement with access to Neo engineering resources\
    <li>Access to partner program resources to help develop and expand business\
    Sales, training, and marketing enablement to expand existing and drive new partner business and revenue\
    <li>Recognition as an innovator and thought leader in the NoSQL space\
    </ul>"
            }
        ],
        related: []
    },
    graphdatabase: {
        path: "/learn/graphdatabase",
        title: "What is a Graph Database?",
        introText: "A graph database stores data in a graph, the most generic of data structures, capable of elegantly representing any kind of data in a highly accessible way",
        content: "A graph database stores data in a graph, the most generic of data structures, capable of elegantly representing any kind of data in a highly accessible way. Let’s follow along some graphs, using them to express themselves. We’ll “read” a graph by following arrows around the diagram to form sentences.",
        next: ["nosql","neo4j"],
        prev: [],
        featured: ["content_graphdb_graph", "content_graphdb_traversal", "content_graphdb_indexes"],
        actionText: "Learn more",
        related: ["cypher"]
    },
    nosql: {
        path: "/learn/nosql",
        title: "NoSQL Data Models",
        introText: "Understanding data stores for your application.",
        next: ["graphdatabase"],
        prev: ["concepts"],
        featured: [
            {
                type: "track",
                introText: "(Neo4j) –[:IS_A]–> (NoSQL Database)",
                content: "<p><strong>N</strong>ot <strong>o</strong>nly <strong>SQL</strong>, but modern choices which excel at answering different kinds of questions.</p>\
        <ul>\
            <li>Average income? Ask an RDBMS\
            <li>Shopping cart? Use a Key-Value Store\
            <li>How did you get here? Ask a graph\
        </ul>"
            }
        ],
        actionText: "Not only SQL",
        related: null
    },
    get_started: {
        path: "/learn/get_started",
        title: "Get started with Neo4j",
        introText: "(TODO) Intro text for get started with Neo4j",
        featured: ["content_video_installing_neo4j"],
        related: ["intro", "drivers"]
    },
    drivers: {
        path: "/develop/drivers",
        title: "Language Drivers",
        introText: "Friends of Neo4j speak many languages, and work in many frameworks.",
        thumbnail: "/assets/img/still/neo4j_drivers.png",
        featured: null,
        related: ["neo4j_rest", "spring_data_neo4j", "neo4j_java", "neo4j_rb", "neography", "neo4jphp", "neo4jclient", "py2neo", "neo4j_python", "node_neo4j", "neocons", "bulbflow", "keymaker", "neoid", "neo4django", "neo4j_rest_client", "neo4p", "scala", "grails", "anorm_cypher", "haskell", "datanucleus", "neo4j_go"]
    },
    tools: {
        path: "/develop/tools",
        title: "Tools and Resources",
        introText: "There are a lot of tools and resources around Neo4j.",
        featured: ["content_video_cypher"],
        related: ["drivers", "try", "visualize"]
    },
    books: {
        path: "/learn/books",
        thumbnail: "/assets/img/books/nosql_distilled.png",
        title: "Graph Database related Books",
        introText: "Learn more about Neo4j, Graph Theory and Graph Databases by reading these amazing books!",
        featured: ["springdata"],
        related: ["goodrelationships", "nosqldistilled", "sevendatabases", "neo4jinaction", "visualcomplexity", "connected"]
    },
    cloud: {
        path: "/develop/cloud",
        title: "Neo4j in the Cloud",
        introText: "Neo4j can be run in various cloud scenarios and on a number of cloud stacks.",
        actionText: "Neo4j in the Cloud",
        featured: ["content_video_james_ward_neo4j"],
        related: ["heroku"]
    },
    heroku: {
        path: "/develop/heroku",
        title: "Neo4j Heroku Add-on",
        introText: "NA managed graph database in the cloud, perfect for getting to know Neo4j.",
        actionText: "Do it now",
        featured: [
            {
                type: "article",
                title: "Neo4j on Heroku",
                introText: "Neo4j on Heroku",
                content: "<p>As a platform-as-a-service (PAAS) provider, Heroku offers a quick way from your locally developed app to a managed deployment in the cloud.</p>\
                <p>The ability of adding different hosted services is crucial for the daily needs of a modern day web-application.</p>\
                <p>To run a Neo4j graph powered app on Heroku you can easily add the Neo4j Add-on.</p>"
            }
        ],
        related: ["heroku_screencast"]
    },
    heroku_screencast: {
        path: "/develop/heroku/screencast",
        title: "Screencast: Integrate Neo4j, Heroku and Google Docs",
        actionText: "Watch this screencast ",
        featured: [
            {
                type: "video",
                title: "Screencast: Integrate Neo4j, Heroku and Google Docs",
                introText: "A screencast about deploying an application using the Neo4j add-on on Heroku to expose a readonly Cypher endpoint. Then integrating with a Google Spreadsheet for querying and rendering of the results. For step by step instructions, code and sample data see here: http://blog.neo4j.org/2011/12/neo4j-labs-heroku-neo4j-and-google.html",
                thumbnail: "http://vidcaster-media.s3.amazonaws.com/sites/145/videos/67656/freeze/thumbs/120x6816U7J.jpg",
                src: "http://video.neo4j.org/player/U4Yq"
            }
        ],
        related: []
    },
    sdn: {
        path: "/spring",
        title: "Spring Data Neo4j",
        introText: "The best NOSQL database for Spring.",
        actionText: "Go ahead",
        featured: ["content_video_good_relationships"],
        related: ["good-relationships-spring-data", "getting-started-spring"]
    },
    // people : {
    //     path : "/participate/people",
    //     title : "People around Neo4j",
    //     introText : "See who drives Neo4j",
    //     featured : {
    //         title : "We need you",
    //         type : "video",
    //         thumbnail : "http://photos3.meetupstatic.com/photos/event/8/3/a/6/600_149253702.jpeg",
    //         introText : "(TODO) we need an introductory video about why people matter to Neo4j",
    //         src : "http://player.vimeo.com/video/53838744"
    //     },
    //     related : ["contributors", "neo_staff", "speakers", "authors"]
    // },
    contributors: {
        path: "/participate/contributors",
        title: "Contributors - you rock.",
        introText: "The Neo4j project is driven by the community. Here are some individuals that you might encounter in the discussion forums or come across their projects.\
        For a full list of all code contributors, please see <a href='http://docs.neo4j.org/chunked/snapshot/contributors.html'>The official docs.</a>",
        previewText: "We're very proud to have such an engaged group of contributors to Neo4j and its ecosystem.",
        actionText: "See our contributors",
        thumbnail: "/assets/new/img/contributors.png",
        type: "_contributors",
        related: []
    },
    events: {
        path: "/events",
        title: "Events",
        thumbnail: "/assets/img/logo/meetup.jpg",
        introText: "If you want to learn more about Neo4j nothing beats a hands on experience. Listen to our community members and driver authors, talk to our engineers or discuss with our customers.",
        related: ["meetups", "conferences", "webinars"]
    },
    meetups: {
        path: "/participate/events/meetups",
        title: "Meetups around the World",
        introText: "",
        actionText: "Find a meetup",
        featured: [
            {
                type: "article",
                title: "",
                introText: "(TODO) Introtext meetups",
                content: "TODO: Content for meetup page"
            }
        ],
        related: ["events", "webinars", "conferences"]
    },
    webinars: {
        path: "/participate/events/webinars",
        title: "Webinars",
        introText: "",
        actionText: "Find a webinar",
        featured: [
            {
                type: "article",
                title: "",
                introText: "(TODO) Introtext webinars",
                content: "TODO: Content for webinars page"
            }
        ],
        related: ["events", "meetups", "conferences"]
    },
    conferences: {
        path: "/participate/events/conferences",
        title: "Neo4j at Conferences",
        introText: "(TODO) intro text neo4j conferences",
        actionText: "Neo4j at conferences",
        featured: ["content_article_gc2012"],
        related: ["events", "meetups", "webinars"]

    },
    q_and_a: {
        path: "/participate/q_and_a",
        title: "Ask Questions and Share Answers",
        introText: "Here you can find some of the resources that give you access to questions, answers and support around Neo4j related questions.",
        thumbnail: "/assets/img/logo/googlegroups.png",
        featured: null,
        related: [
            {
                title: "Stack Overflow",
                path: "http://stackoverflow.com/questions/tagged/neo4j",
                thumbnail: "/assets/img/logo/stackoverflow.png",
                introText: "Find answers or reach to fellow developers with questions.",
                actionText: "Ask Neo4j questions"
            },
            {
                title: "Neo4j Google Group",
                path: "http://groups.google.com/group/neo4j",
                thumbnail: "/assets/img/logo/googlegroups.png",
                introText: "Share your experiences and expertise with fellow graphistas.",
                actionText: "Join now"
            },
            {
                title: "GitHub Issues",
                path: "http://stackoverflow.com/questions/tagged/neo4j",
                thumbnail: "/assets/img/logo/github.png",
                introText: "Encountered an issue with Neo4j? Submit it here.",
                actionText: "Report issue"
            }
        ]
    },
    neo4j: {
        path: "/learn/neo4j",
        title: "What is Neo4j?",
        introText: "Neo4j is a graph database, reliable and fast for managing and querying highly connected data.",
        thumbnail: "http://thumbnails.visually.netdna-cdn.com/whats-a-graph-database_502918e97645c_w1051.png",
        actionText: "Study this",
        featured: [
            {
                type: "article",
                content: "Neo4j is an open-source <a href='/learn/graphdatabase'>graph database</a> supported by <a onclick=\"javascript:pageTracker._trackPageview(\'/outgoing/neotechnology.com/');\" href='http://neotechnology.com/''>Neo Technology</a>.</p>\
        <p>Neo4j stores data in nodes connected by directed, typed relationships with properties on both, also known as a <a href='/learn/graphdatabase'>Property Graph</a>.</p>\
        <h3>Neo4j is</h3>\
         <ul id='features'>\
            <li><em>intuitive</em>, using a graph model for data representation</li>\
            <li><em>reliable</em>, with full ACID transactions</li>\
            <li><em>durable and fast</em>, using a custom disk-based, native storage engine</li>\
            <li><em>massively scalable</em>, up to several billion nodes/relationships/properties</li>\
            <li><em>highly-available</em>, when distributed across multiple machines</li>\
            <li><em>expressive</em>, with a powerful, human readable <a href='/learn/cypher'>graph query language</a></li>\
            <li><em>fast</em>, with a powerful traversal framework for high-speed graph queries</li>\
            <li><em>embeddable</em>, with a few small jars</li>\
            <li><em>simple</em>, accessible by a convenient <a onclick=\"javascript:pageTracker._trackPageview('/outgoing/docs.neo4j.org/chunked/stable/rest-api.html');\" href='http://docs.neo4j.org/chunked/1.8.1/rest-api.html'>REST interface</a> or\
                an object-oriented Java <a onclick=\"javascript:pageTracker._trackPageview('/outgoing/api.neo4j.org/');\" href='http://api.neo4j.org/1.8.1'>API</a>"
            }
        ],
        related: [
            "graphdatabase",
            "content_video_graphdb101",
            "reference_card"
        ]
    },
    reference_card: {
        path: "/learn/neo4j/reference_card",
        title: "Neo4j Reference Card",
        thumbnail: "http://thumbnails.visually.netdna-cdn.com/whats-a-graph-database_502918e97645c_w587.png",
        featured: ["content_image_neo4j_ref_card"]
    },
    cypher: {
        path: "/learn/cypher",
        title: "Cypher Tutorial",
        thumbnail: "/assets/img/still/cypher_tutorial.gif",
        introText: "Hands on introduction to the Cypher Query Language",
        actionText: "Learn it",
        featured: [
            {
                title: "Cypher Tutorial",
                type: "_cypher"
            }
        ],
        related: [
            "try",
            {
                title: "Cypher Reference",
                path: "http://docs.neo4j.org/chunked/milestone/cypher-query-lang.html",
                introText: "Cypher is a declarative graph query language that allows for expressive and efficient querying and updating of the graph store without having to write traversals through the graph structure in code.",
                actionText: "Cypher Manual"
            },
            {
                title: "Cypher Cheat Sheet (PDF)",
                path: "/resources/cypher",
                introText: "Download the Cypher Cheat Sheet as PDF",
                actionText: "Download PDF"
            },
            "content_video_cypher"
        ]
    },
    ops: {
        path: "/develop/ops",
        title: "Operations",
        introText: "Here you can find some resources related to running Neo4j in different scenarios.",
        actionText: null,
        featured: null,
        related: ["content_video_ha", "content_video_installing_neo4j"]
    },
    try: {
        path: "/learn/try",
        title: "Try",
        introText: "Try Cypher live on a dataset of your choice",
        actionText: "Try live",
        featured: [
            {
                title: "Cypher Console",
                type: "_try",
                content: ""
            }
        ],
        related: [
            {
                title: "Cypher Reference",
                path: "http://docs.neo4j.org/chunked/milestone/cypher-query-lang.html",
                introText: "Cypher is a declarative graph query language that allows for expressive and efficient querying and updating of the graph store without having to write traversals through the graph structure in code.",
                actionText: "Cypher Manual"
            },
            {
                title: "Cypher Cheat Sheet (PDF)",
                path: "/resources/cypher",
                introText: "Download the Cypher Cheat Sheet as PDF",
                actionText: "Download PDF"
            },
            "cypher"
        ]
    },
    visualize: {
        path: "/develop/visualize",
        title: "Graph Visualization",
        introText: "Storing a graph is one thing, but visualizing it creates awe and epiphanies.\
                Graph visualisations are a powerful tool to convey the content of a graph. They can highlight patterns, show clusters and connections.\
                There are different tools that you can use to visualize the content of a Neo4j graph database.",
        featured: [
            {
                type: "_visualize",
                items: [
                    {
                        title: "Neo4j Server Web Interface",
                        type: "image",
                        introText: "<p>The Data Browser Tab offers a handy visualization of your graph. You can select the nodes to be shown by id,  index lookup or <a href='/learn/cypher'>cypher query</a>. A style editor will adapt the visualization to your needs.</p>\
                                <p>The Neo4j Server Web Interface was written using arbor.js and canvas.</p>",
                        thumbnail: "/assets/img/still/server_visualization.jpg",
                        src: "/assets/img/still/server_visualization.jpg"
                    },
                    {
                        title: "JavaScript D3.js",
                        type: "image",
                        introText: "<p>D3 is the most powerful javascript visualization library which supports a large number of visualizations, many of them are usable for graphs as well, <a href='http://maxdemarzi.com/tag/visualization-2/' target='_blank'>Max De Marzi</a> covered several of the visualizations on his blog.</p>",
                        thumbnail: "/assets/img/still/d3_network.png",
                        src: "/assets/img/still/server_visualization.jpg"
                    },
                    {
                        title: "Gephi",
                        type: "image",
                        introText: "<p>The well known Graph visualization tool Gephi has a <a href='http://gephi.org/tag/neo4j/' target='_blank'>plugin for importing Neo4j</a> Databases which can then be visualized and rendered with the full power of Gephi's engines.</p>",
                        thumbnail: "/assets/img/still/server_visualization.jpg",
                        src: "http://player.vimeo.com/video/31823202?badge=0&byline=0&portrait=0&title=0"
                    },
                    {
                        title: "GraphViz",
                        type: "video",
                        introText: "<p>Using the GraphViz Exporter it is possible to generate <code>.dot</code> files which can then be rendered as images using graphviz' dot toolchain.\
              See this <a href='http://blog.neo4j.org/2012/05/graph-this-rendering-your-graph-with.html' target='_blank'>blog post</a> for details.</p>",
                        thumbnail: "/assets/img/still/server_visualization.jpg"
                    }
                ]
            }
        ],
        related: [
            {
                title: "Max De Marzi's Graph Visualization Blog",
                path: "http://maxdemarzi.com/tag/visualization-2/"
            },
            {
                title: "D3.js visualization",
                path: "https://github.com/mbostock/d3/wiki/Gallery"
            },
            {
                title: "Gephi",
                path: "http://gephi.org"
            },
            {
                title: "Neoclipse on GitHub",
                path: "https://github.com/neo4j/neoclipse"
            },
            {
                title: "A collection of graph visualization options",
                path: "http://clipboard.com/mesirii/boards/viz"
            }
        ]
    },
    apps: {
        path: "/learn/apps",
        title: "Apps Gallery",
        introText: "Built with Neo4j, tripping the graph fantastic.",
        featured: null,
        related: []
    }
    /*
     ]
     {
     title : "POJO to Graph",
     path : "/develop/spring",
     introText : "Simply annotate your Java classes, configure your Spring application, then enjoy the power of object graph mapping.",
     actionText : "Go ahead"
     },
     {
     title : "Example App",
     path : "http://blog.neo4j.org/2012/10/using-spring-data-neo4j-for-hubway-data.html",
     introText : "Use Spring Data Neo4j to model and import the <a target='_blank' href='http://hubwaydatachallenge.org/trip-history-data/''>Hubway Challenge</a> dataset, for advanced querying and visualization.",
     actionText : "Follow along"
     }
     ]
     {
     title : "High Availability",
     path : "http://docs.neo4j.org/chunked/stable/ha-how.html",
     introText : "Master-slave replication in a cluster provides your application with read-scaling and fault tolerance.",
     actionText : "Read more"
     },
     {
     title : "Backups",
     path : "http://docs.neo4j.org/chunked/stable/operations-backup.html",
     introText : "A fundamental operation for any application: back up early, back up often.",
     actionText : "Read more"
     },
     {
     title : "Hardware Sizing",
     path : "",
     introText : "<img class='thumbnail' src='/assets/img/still/hardware-sizing.png' alt='Click to View' data-src='http://player.vimeo.com/video/46049647'><br><i class='icon icon-facetime-video'></i>  Roll up your sleeves and pop the hood, let&#39;s tune this engine.",
     actionText : ""
     }
     ]
     ]

     */

    //            content: "<p>The Neo4j Java API is very easy to use. You can interact with the GraphDatabase, Nodes and Relationships directly.\
//            To run more interesting queries or complex operations you can also execute <a href=\"/java/java_cypher\">Cypher</a>\
//        from your program.</p>\
//                                                             \
//    <p>After including Neo4j in your project and <a href=\"/java/ide\">setting up your IDE</a>. See the Hello-World example\
//    below for getting started.   </p>\
//    <h3>Adding the Neo4j dependencies to your project</h3>\
//    <% include ../../download/_embedded_dependency %>      \
//                                                              \
//        <div class=\"markdown\"><%- content.java_hello_world %></div>"

}

exports.content = {
    content_video_ha: {
        title: "High Availability",
        type: "video",
        thumbnail: "/assets/img/still/ha_video.gif",
        introText: "See how to setup a 3-member cluster for the <strong>new Neo4j HA 1.5</strong> running on a single machine.",
        src: "http://player.vimeo.com/video/51906007"
    },
    content_video_good_relationships: {
        title: "Good Relationships",
        type: "video",
        thumbnail: "/assets/img/still/sdn-intro.png",
        introText: "Michael Hunger introduces <a target='_blank' href='http://www.infoq.com/minibooks/good-relationships-spring-data'>Good Relationships</a>, the SDN book.",
        src: "http://www.youtube.com/embed/heC-8Pq2exQ"
    },
    content_video_cypher: {
        title: "Query with Cypher",
        type: "video",
        thumbnail: "/assets/img/still/cypher.png",
        introText: "Cypher is a graph query language. Easy on the eyes, while expressive and powerful.",
        src: "http://player.vimeo.com/video/50389825"
    },
    content_video_installing_neo4j: {
        title: "Installing Neo4j",
        type: "video",
        thumbnail: "/assets/img/still/install.gif",
        introText: "Peter Neubauer guides through the first steps of downloading and running Neo4j.",
        src: "http://player.vimeo.com/video/53838744"
    },
    content_video_graphdb101: {
        title: "Graph DB 101",
        type: "video",
        author: "akollegger",
        thumbnail: "/assets/img/still/graphdb-intro.png",
        introText: "A pleasant stroll through general concepts, and Neo4j particulars.",
        src: "http://player.vimeo.com/video/46886385"
    },
    content_video_james_ward_neo4j: {
        title: "James Ward on Neo4j",
        type: "video",
        author: "_JamesWard",
        thumbnail: "/assets/img/still/jamesward.jpg",
        introText: "James Ward shows how to build and deploy a Neo4j based app on heroku.",
        src: "http://player.vimeo.com/video/53221343"
    },
    content_image_neo4j_ref_card: {
        type: "external",
        title: "Neo4j Reference Card",
        introText: "Visualize the concepts of the graph as a graph, how much more meta can you go?",
        thumbnail: "http://thumbnails.visually.netdna-cdn.com/whats-a-graph-database_502918e97645c_w1051.png",
        path: "http://visual.ly/whats-graph-database"
    },
    content_article_gc2012: {
        type: "article",
        title: "GraphConnect 2012",
        introText: "(TODO) Introtext GraphConnect 2012",
        content: "TODO: Content for GraphConnect page"
    },
    content_graphdb_graph : {
        type: "article",
        title: "A Graph contains Nodes and Relationships",
        src: "/assets/img/propertygraph/graphdb-gve.png",
        content: "<p>A Graph –[:RECORDS_DATA_IN]–> Nodes –[:WHICH_HAVE]–> Properties.</p>The simplest possible graph is a single Node, a record that has named values referred to as Properties. A Node could start with a single Property and grow to a few million, though that can get a little awkward. At some point it makes sense to distribute the data into multiple nodes, organized with explicit Relationships."
    },
    content_graphdb_traversal : {
        type: "article",
        title: "Query a Graph with a Traversal",
        introText: "A Traversal –navigates–> a Graph; it –identifies–> Paths –which order–> Nodes.",
        src: "/assets/img/propertygraph/graphdb-traverse.png",
        content: "A Traversal is how you query a Graph, navigating from starting Nodes to related Nodes according to an algorithm, finding answers to questions like \“what music do my friends like that I don’t yet own,\” or \“if this power supply goes down, what web services are affected?\”"
    },
    content_graphdb_indexes : {
        type: "article",
        title: "Indexes Look-up Nodes or Relationships",
        introText: "An Index –maps from–> Properties –to either–> Nodes or Relationships. It –is a special–> Traversal.",
        src: "/assets/img/propertygraph/graphdb-index.png",
        content: "Often, you want to find a specific Node or Relationship according to a Property it has. This special case of Traversal is so common that it is optimized into an Index look-up, for questions like \“find the Account for username master-of-graphs.\”"
    }
}