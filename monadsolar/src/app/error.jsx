"use client"
const ErrorPage = ({ statusCode }) => {
  <div>
    <h1>
      {statusCode ?
        `Error ${statusCode} occurred on server side` :
        'Error occurred on clinet side'
      }
    </h1>
  </div>
}

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error