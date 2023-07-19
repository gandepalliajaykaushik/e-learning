import React from 'react';
import './Dashboard.css';

class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard-container">
        <h1>Welcome to E-Learning App</h1>
        <h1>Dashboard</h1>

        <section className="section">
          <h2>Web Development</h2>
          <ul>
            <li>
              <a
                href="https://www.youtube.com/watch?v=qz0aGYrrlhU"
                target="_blank"
                rel="noopener noreferrer"
              >
                Video 1 - HTML Crash Course
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=yfoY53QXEnI"
                target="_blank"
                rel="noopener noreferrer"
              >
                Video 2 - CSS Flexbox Tutorial
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=W6NZfCO5SIk"
                target="_blank"
                rel="noopener noreferrer"
              >
                Video 3 - JavaScript Basics
              </a>
            </li>
          </ul>
        </section>

        <section className="section">
          <h2>C++ Programming</h2>
          <ul>
            <li>
              <a
                href="https://www.youtube.com/watch?v=ZzaPdXTrSb8"
                target="_blank"
                rel="noopener noreferrer"
              >
                Video 1 - C++ Basics
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=m1fJjNLzRag"
                target="_blank"
                rel="noopener noreferrer"
              >
                Video 2 - Object-Oriented Programming in C++
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=B31LgI4Y4DQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                Video 3 - Data Structures in C++
              </a>
            </li>
          </ul>
        </section>

        <section className="section">
          <h2>Android Development</h2>
          <ul>
            <li>
              <a
                href="https://www.youtube.com/watch?v=fis26HvvDII"
                target="_blank"
                rel="noopener noreferrer"
              >
                Video 1 - Android App Development for Beginners
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=BWUWJEaI0aE"
                target="_blank"
                rel="noopener noreferrer"
              >
                Video 2 - Building UI with XML in Android
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=KSW5jyWXs_Y"
                target="_blank"
                rel="noopener noreferrer"
              >
                Video 3 - Firebase Integration in Android Apps
              </a>
            </li>
          </ul>
        </section>

        <section className="section">
          <h2>Python</h2>
          <ul>
            <li>
              <a
                href="https://www.youtube.com/watch?v=kqtD5dpn9C8"
                target="_blank"
                rel="noopener noreferrer"
              >
                Video 1 - Python Crash Course
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=LHBE6Q9XlzI"
                target="_blank"
                rel="noopener noreferrer"
              >
                Video 2 - Working with Data in Python
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=rHux0gMZ3Eg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Video 3 - Django Web Development
              </a>
            </li>
          </ul>
        </section>
      </div>
    );
  }
}

export default Dashboard;
