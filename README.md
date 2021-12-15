# Projectify

## A React application to display information on the projects that students are involved with in different classes. CS348 Final Project.

### Running the Application
1. `cd` into [`src\backend`](https://github.com/JLee1210/projectify/tree/master/src/backend/src) and `pip install -r requirements.txt` 
2. Run `export FLASK_APP=src/flaskdriver.py` then `flask run`. Your flask server should be running locally now.
3. Run the python script [`src\backend\src\create_tables.py`](https://github.com/JLee1210/projectify/blob/cf5b45a3cf1681868e5cde17bfc0b7a394e3a631/src/backend/src/create_tables.py) via `python3 create_tables`. Your test db has been created.
4. `npm install` and run `npm start` in the root folder to start the React app.
5. Your app should be running locally on http://localhost:3000/projectify

![image](https://user-images.githubusercontent.com/46725713/145561131-edc5f144-78a2-44c3-8325-63a73c6ec701.png)
