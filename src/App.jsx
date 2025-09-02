import './App.css'
import CartItem from './CartItem'
import Course from './Course'
import Employee from './Employee'
import Greeting from './Greeting'
import Movie from './Movie'
import Post from './Post'
import Product from './Product'
import Student from './Student'
import UserCard from "./UserCard"
import Weather from './Weather'


function App() {

  const UserData = {
    "name": "Rohit Mehta",
    "email": "rohit.mehta@example.com",
    "role": "Admin"
  }

  const ProductInfo = {
    "productName": "Bluetooth Headphones",
    "price": 2499,
    "inStock": true
  }

  const GreetingName = {
    "name": "Sneha"
  }

  const BlogPost = {
    "title": "Getting Started with React",
    "author": "Kunal Verma",
    "content": "React is a JavaScript library for building user interfaces..."
  }

  const StudentData = {
    "name": "Aditi Sharma",
    "rollNo": "STU102",
    "marks": 35
  }

  const EmployeeData = {
    "name": "Rajesh Kumar",
    "department": "Finance",
    "salary": 55000
  }

  const MovieData = {
    "title": "3 Idiots",
    "director": {
      "name": "Rajkumar Hirani",
      "age": 60
    }
  }

  const ShoppingData = {
    "item": "Laptop",
    "quantity": 2,
    "price": 45000
  }

  const CourseData = {
    "courseName": "Full Stack Development",
    "modules": ["HTML", "CSS", "JavaScript", "React", "Node.js"]
  }

  const WeatherReport = {
    "city": "Delhi",
    "temperatureC": 28,
    "condition": "Sunny"
  }




  return (
    <>
      <UserCard{...UserData} />

      <Product{...ProductInfo} />

      <Greeting{...GreetingName} />

      <Post{...BlogPost} />

      <Student{...StudentData} />

      <Employee{...EmployeeData} />

      <Movie{...MovieData} />

      <CartItem{...ShoppingData} />

      <Course{...CourseData} />

      <Weather{...WeatherReport} />




    </>
  )
}

export default App
