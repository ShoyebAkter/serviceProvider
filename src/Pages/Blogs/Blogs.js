import React from 'react';

const Blogs = () => {
    return (
        <div>
            <p>
                <h3>Ques 1:Difference between authentication and authorization?</h3>
                Ans:Simply put, authentication is the process of verifying who someone is,
                 whereas authorization is the process of verifying what specific applications,
                 files, and data a user has access to.
                 <h3>Ques 2:Why use firebase?What other options do u have to implement authentication?</h3>
                Ans:The Firebase Realtime Database lets you build rich, collaborative applications by
                 allowing secure access to the database directly from client-side code.
                  Password-based authentication,Multi-factor authentication,
                   Certificate-based authentication etc
                   <h3>Ques 3:What other service do firebase provide other than authentication</h3>
                   Ans:There are many services which Firebase provides, Most useful of them are:Cloud Firestore,
                   Cloud Functions,Authentication,Hosting,Cloud Storage,Google Analytics,Predictions,Cloud Messaging.
            </p>
        </div>
    );
};

export default Blogs;