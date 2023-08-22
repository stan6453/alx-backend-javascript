import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

export default function attach_routes(app) {
  app.get('/', AppController.getHomepage)
  app.get('/students', StudentsController.getAllStudents)
  app.get('/students/:major', StudentsController.getAllStudentsByMajor)
}
