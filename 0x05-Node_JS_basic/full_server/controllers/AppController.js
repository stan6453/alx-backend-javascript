export default class AppController {
  static getHomepage(request, response) {
    response.setHeader('Content-Type', 'text/plain');
    return response.status(200).send('Hello Holberton School!');
  }
}
