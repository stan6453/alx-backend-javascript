export class AppController{

  static getHomepage(request, response){
    return res.status(200).send('Hello Holberton School!');
  }
}
