export default class AppController {
  static getHomepage(request, response) {
    return response.status(200).send('Hello Holberton School!');
  }
}
