# projectStructureForBackend

    - NODE JS initiate yarn/ npm
    - package.json
    - Express js backend with packages    
        - **yarn add express** [express to manage backend]

        - **yarn add cookie-parser** [cookie parser to manage cookie in our webApp]

        - **yarn add cors** [cors to manage API cross origin platform like Mobile device, computer, or any other gadget ]

        - **yarn add express-rate-limit** [express rate limit package to prevent ddos attacks. we can limit users request by this package]

        - **yarn add helmet** [this package used for impleament security policies like content privecy policy, click jaking, i-frame]

        - **yarn add hpp** [to prevent url pollution we can use hpp to make sure that nobody can customize my url and attack on my webApp]

        - **yarn add jsonwebtoken** [this package used for token based authentication, token encode or decoding]

        - **yarn add mongoose** [this package used for impleament mongoDB with express]

        - **yarn add nodemailer/sendgrid** [this package is used for mail verification for users]

        - **yarn add express-fileupload** [to upload a file]
        
        - **yarn add nodemon** [auto restart the server after every save]

    - File Folder Structrue
        - **config** [all kinds of variable for configuration our app is set up here]
        - **controller**
        - **middleware**
        - **model**
        - **utils**
        - **routes**
            - Api routing
        - storage
    
    -index.js
        - import applications all utilities
        - Global app middleware
        - Rate limiter
        - web cache
        - MongoDB connection
        - set Api
        - set application storage
        - run app

    - how to works with request params
        - url params
        - query string

    - how to works with request JSON body
        
    - how to works with request form data
    - how to works with MongoDB 
    - CRUD operation for a user
    - req to a server for creating a user
    - req to a server for get all users
    - req to a server for update users information
    - req to a server to delete a user
    - get response from a server as per clients request