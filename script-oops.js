//Movie Class
console.log("*** MOVIE CLASS ***")
class Movie
{
  constructor(title,studio,rating)
  {
    this.title = title
    this.studio = studio
    if(rating)
    {
      this.rating = rating
    }
    else
    {
      this.rating ="PG"
    }
  }
    getPG(arr)
    {
      var temp = []
      for(var i=0; i<arr.length; i++)
      {
        if(arr[i].rating === "PG")
        {
          temp.push(arr[i].title)
        }
      }
      return temp
    }
}
var m1 = new Movie("xxxx","yyyy","PG23")
var m2 = new Movie("aaaa","bbbb")
var m3 = new Movie("mmmm","ssss")
var m4 = new Movie("Casino Royale","Eon Productions","PG13")
var arr = [m1,m2,m3,m4]
var res = m1.getPG(arr)
console.log("Movie Names(whose rating is PG) : ", res)

//Circle Class 
console.log("\n *** CIRCLE CLASS ***")
class Circle
{
  constructor(radius,color)
  {
    this.radius = radius
    this.color = color
  }
  getArea(radius)
  {
    var area = Math.PI*radius*radius
    return area.toFixed(2)
  }
  getCircumference(radius)
  {
    var circumference = 2*Math.PI*radius
    return circumference.toFixed(2)
  }
  get getRadius()
  {
    return this.radius
  }
  set setRadius(radius)
  {
    this.radius = radius
  }
  set setColor(color)
  {
    this.color = color
  }
  get getColor()
  {
    return this.color
  }
}
var c1 = new Circle(2,"red")
console.log("Area of circle : ", c1.getArea(4.1))
console.log("Circumference of Circle : ", c1.getCircumference(4.1))
c1.setRadius = 2.34
console.log("Radius using set method : ",c1.getRadius)
c1.setColor = "green"
console.log("Color using set method : ",c1.getColor)
var c2 = new Circle(5.1,"orange")
console.log("After toString Method : ",c2.color.toString())

//Person Class
console.log("\n *** PERSON CLASS ***")
class Person
{
  set setFName(fname)
  {
    this.fname = fname
  }
  set setLName(lname)
  {
    this.lname = lname
  }
  get getFName()
  {
    return this.fname
  }
  get getLName()
  {
    return this.lname
  }
  set setAge(age)
  {
    this.age = age
  }
  get getAge()
  {
    return this.age
  }
}
var p1 = new Person()
p1.setFName = "Guvi"
p1.setLName = "Geek"
p1.setAge = 21
console.log("First Name : ",p1.getFName)
console.log("Last Name : ",p1.getLName)
console.log("Age : ",p1.getAge)

//Uber Class
console.log("\n *** UBER CLASS ***")
class Uber
{
  constructor(km,price)
  {
    this.km = km
    this.price = price
  }
  getPrice()
  {
    return this.km * this.price
  }
}
var ob = new Uber(200,30)
console.log("Price for "+ob.km+" km is : ",ob.getPrice())